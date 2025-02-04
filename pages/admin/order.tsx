// pages/admin/orders.tsx

import { useEffect, useState } from "react";
import { client } from "../../src/sanity/lib/client"; // Make sure this is the correct import for your Sanity client
import { useRouter } from "next/router";
import { Order } from "../../type"; // Define a type for your orders

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const router = useRouter();

  // Fetch orders from Sanity
  const fetchOrders = async () => {
    try {
      const query = `*[_type == "order"] | order(orderDate desc) {
        _id,
        fullName,
        email,
        totalPrice,
        items[]->{name, price, quantity},
        orderDate
      }`;
      
      const result = await client.fetch(query);
      setOrders(result);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin - Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="bg-white p-4 shadow rounded-lg">
              <h2 className="font-bold">{order.fullName}</h2>
              <p>{order.email}</p>
              <p className="text-lg font-semibold">${order.totalPrice}</p>
              <p className="text-sm text-gray-500">Order Date: {new Date(order.orderDate).toLocaleString()}</p>

              <div className="mt-4">
                <h3 className="font-semibold">Items:</h3>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name} - ${item.price} x {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => router.push(`/admin/order/${order._id}`)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;

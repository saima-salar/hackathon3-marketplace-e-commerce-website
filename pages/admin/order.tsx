"use client";

import { useEffect, useState } from "react";
import { client } from "../../src/sanity/lib/sanity"; // Correct import for Sanity client
import { useRouter } from "next/router";
import { Order, OrderItem } from "../../types/type"; // Import types from types/type.ts

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]); // Use the imported Order type
  const router = useRouter();

  // Fetch orders from Sanity
  const fetchOrders = async () => {
    try {
      const query = `*[_type == "order"] | order(orderDate desc) {
        id,
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
            <div key={order.id} className="bg-white p-4 shadow rounded-lg">
              <h2 className="font-bold">{order.fullName}</h2>
              <p>{order.email}</p>
              <p className="text-lg font-semibold">${order.totalPrice}</p>
              <p className="text-sm text-gray-500">Order Date: {new Date(order.orderDate).toLocaleString()}</p>

              <div className="mt-4">
                <h3 className="font-semibold">Items:</h3>
                <ul>
                  {order.items.map((item: OrderItem, index: number) => (
                    <li key={index}>
                      {item.name} - ${item.price} x {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => router.push(`/admin/order/${order.id}`)}
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

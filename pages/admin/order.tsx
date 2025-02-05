import { useEffect, useState } from "react";
import { fetchData } from "../../src/sanity/lib/sanity"; // Import the fetchData function
import { useRouter } from "next/router";

// Define types for your orders and items
interface Item {
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  _id: string;
  fullName: string;
  email: string;
  totalPrice: number;
  items: Item[];
  orderDate: string;
}

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);  // Loading state
  const [error, setError] = useState<string | null>(null);  // Error state
  const router = useRouter();

  // Fetch orders from Sanity
  const fetchOrders = async () => {
    const query = `*[_type == "order"] | order(orderDate desc) {
      _id,
      fullName,
      email,
      totalPrice,
      items[]->{name, price, quantity},
      orderDate
    }`;

    try {
      setLoading(true);
      setError(null); // Reset error state before fetching
      const result = await fetchData(query); // Use fetchData to get the orders
      if (Array.isArray(result)) {
        setOrders(result);
      } else {
        console.error("Fetched data is not an array:", result);
        setError("Failed to load orders. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Error fetching orders. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin - Orders</h1>

      {loading && <p>Loading orders...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {orders.length === 0 && !loading && !error && <p>No orders found.</p>}

      {orders.length > 0 && (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="bg-white p-4 shadow rounded-lg">
              <h2 className="font-bold">{order.fullName}</h2>
              <p>{order.email}</p>
              <p className="text-lg font-semibold">${order.totalPrice}</p>
              <p className="text-sm text-gray-500">
                Order Date: {new Date(order.orderDate).toLocaleString()}
              </p>

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

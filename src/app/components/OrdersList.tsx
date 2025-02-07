import { useState, useEffect } from "react";
import { client } from "../../sanity/lib/sanity";

// Define types for order and items
interface Item {
  _id: string;
  name: string;
  price: number;
}

interface Order {
  _id: string;
  fullName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  items: Item[];
  totalPrice: number;
  orderDate: string;
}

const OrdersList = () => {
  const [orders, setOrders] = useState<Order[]>([]); // Use the Order type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "order"]{
            _id,
            fullName,
            email,
            address,
            city,
            country,
            items[]->{
              _id,
              name,
              price
            },
            totalPrice,
            orderDate
          }`
        );
        setOrders(data);
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError("Failed to fetch orders: " + err.message);
        } else {
          setError("An unknown error occurred.");
        }
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (error) {
    return <div aria-live="polite" className="bg-red-100 text-red-800 p-4 rounded mb-4">{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id} className="border p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h2 className="text-xl font-semibold">{order.fullName}</h2>
            <p className="text-gray-600">{order.email}</p>
            <p className="text-lg font-medium text-gray-900">Total: ${order.totalPrice.toFixed(2)}</p>
            <p className="text-gray-500">Order Date: {formatDate(order.orderDate)}</p>
            <ul className="mt-2">
              {order.items.map((item) => (
                <li key={item._id} className="text-gray-700">
                  <span className="font-medium">{item.name}</span> - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersList;

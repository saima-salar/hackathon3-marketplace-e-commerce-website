import { useState, useEffect } from "react";
import { client } from "../../sanity/lib/client";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await client.fetch(`*[_type == "order"]{
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
      }`);
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <h2>{order.fullName}</h2>
            <p>{order.email}</p>
            <p>Total: ${order.totalPrice}</p>
            <ul>
              {order.items.map((item) => (
                <li key={item._id}>
                  <span>{item.name}</span> - ${item.price}
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

// app/order/page.js

import React, { useEffect, useState } from 'react';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('/api/order');
      const ordersData = await response.json(); // Use 'ordersData' instead of 'data'
      setOrders(ordersData);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              {order.name} - {order.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersPage;


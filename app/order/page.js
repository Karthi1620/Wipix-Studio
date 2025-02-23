'use client';  // Add this line to make this a client component

import React, { useEffect, useState } from 'react';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  // Fetch orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('/api/order');
      const ordersData = await response.json();
      setOrders(ordersData);
    };
    fetchOrders();
  }, []);  // Empty dependency array ensures it runs only once when the component mounts

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


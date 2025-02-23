// app/order/page.js
'use client';

import { useState } from 'react';

const OrderPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [orderDetails, setOrderDetails] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, orderDetails }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('Order placed successfully!');
      setName('');
      setEmail('');
      setOrderDetails('');
    } else {
      setMessage('Failed to place order. Please try again.');
    }
  };

  return (
    <div>
      <h1>Place Your Order</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Order Details:
          <textarea
            value={orderDetails}
            onChange={(e) => setOrderDetails(e.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit">Submit Order</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default OrderPage;


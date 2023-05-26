// AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="text-center">
      <h1  style={{ color: 'blue' }}>Welcome, Admin!</h1>
      <ul>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/admin/product-management">Product Management</Link>
        </li>
        <li>
          <Link to="/admin/user-management">User Management</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminDashboard;

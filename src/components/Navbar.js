import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">My Sports Rentals</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
      </nav>
      <footer className="footer bg-dark-green text-light text-center py-3">
        <div className="container">
          <span>&copy; 2023 My Sports Rentals. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
};

export default Navbar;

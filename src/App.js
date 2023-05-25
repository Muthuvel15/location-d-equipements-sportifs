import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// all the components
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import AdminProductManagement from './components/AdminProductManagement';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/products" element={<AdminProductManagement />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

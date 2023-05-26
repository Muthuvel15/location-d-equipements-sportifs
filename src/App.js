import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// all the components
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
// import AdminProductManagement from './components/AdminProductManagement';
import Signup from './components/Signup';
import AdminDashboard from './components/Admin_Dashbord';
import ProductManagementPage from './components/ProductManagementPage';
import UserManagementPage from './components/UserManagementPage';


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
            <Route path="/admin/*" element={<AdminRoutes />} />

            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}


function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/product-management" element={<ProductManagementPage />} />
      <Route path="/user-management" element={<UserManagementPage />} />
    </Routes>
  );
}


export default App;

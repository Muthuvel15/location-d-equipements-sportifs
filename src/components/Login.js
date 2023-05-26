// Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform authentication logic here
    // Example: Make an API call to validate the credentials
    // Replace the following code with your actual authentication logic

    if (email === 'admin@gmail.com' && password === 'admin') {
      // If authentication is successful
      // Redirect the user to the admin page
      navigate('/admin');
    } else {
      // If authentication fails
      // Display an error message or take appropriate action
      console.log('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="mt-3">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default Login;

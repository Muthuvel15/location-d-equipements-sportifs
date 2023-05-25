import React from 'react';

function Login() {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Login;

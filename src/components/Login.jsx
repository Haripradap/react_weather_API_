import {  Link, useNavigate } from "react-router-dom";
import { useState } from "react";


import "../App.css";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      navigate('/dashboard');
    } else {
      alert('Please enter email and password');
    }
  };
  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleLogin}>
        <h2 className="login-title">Login</h2>
        <input
          className="login-input"
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="login-button" type="submit">
          Login
        </button>
        <p className="switch-link">
          Don't have an account? <Link to="/signup">Signup here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

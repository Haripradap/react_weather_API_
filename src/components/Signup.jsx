import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (form.password === form.confirmPassword && form.name && form.email) {
      alert('Signup successful!');
      navigate('/');
    } else {
      alert('Please check all fields and make sure passwords match.');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          className="signup-input"
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />
        <input
          className="signup-input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="signup-input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          className="signup-input"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <button className="signup-button" type="submit">
          Sign Up
        </button>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RestaurantLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login/", // Correct backend API endpoint
        { email: formData.email, password: formData.password },
        { headers: { "Content-Type": "application/json" } }
        
      );

      // Store token in localStorage for future requests
      localStorage.setItem("access_token", response.data.token);
      localStorage.setItem("username", formData.email);

      navigate("/dashboard"); // Redirect to the dashboard
    } catch (err) {
      setError(err.response?.data?.error || "Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200">
      <nav className="relative bg-yellow-300 w-full p-1 flex justify-between items-center">
        <div className="bg-black border-1 border-black px-3 py-1">
          <img src="/logo.png" alt="QR Cuisine Logo" className="h-12 w-auto" />
        </div>
        <div className="space-x-6">
          <Link to="/" className="text-black font-semibold hover:underline">Home</Link>
          <Link to="/about" className="text-black font-semibold hover:underline">About</Link>
          <Link to="/login" className="text-black font-semibold hover:underline">Login</Link>
          <Link to="/restaurant-registration">
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Register</button>
          </Link>
        </div>
      </nav>

      <div className="mt-12 bg-white p-10 rounded-lg shadow-lg w-2/4 flex">
        <div className="w-1/2 flex justify-center">
          <img src="/restreg.png" alt="Restaurant" className="w-72 h-72" />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Restaurant Login</h2>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-500 focus:outline-none focus:border-blue-500 py-1"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-2">
              <label className="text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-b border-gray-500 focus:outline-none focus:border-blue-500 py-1"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="text-right mb-4">
              <Link to="/forgot-password" className="text-blue-500 text-sm hover:underline">Forgot password?</Link>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            New user? <Link to="/restaurant-registration" className="text-blue-500 hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLogin;

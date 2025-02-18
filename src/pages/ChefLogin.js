import React from "react";
import { Link } from "react-router-dom";

const ChefLogin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200">
      {/* Navigation Bar */}
      <nav className="relative bg-yellow-300 w-full p-1 flex justify-between items-center">
        {/* Logo inside a black rectangle */}
        <div className="bg-black border-1 border-black px-3 py-1">
          <img src="/logo.png" alt="QR Cuisine Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="text-black font-semibold hover:underline">Home</Link>
          <Link to="/about" className="text-black font-semibold hover:underline">About</Link>
          <Link to="/login" className="text-black font-semibold hover:underline">Login</Link>
          <Link to="/chef-registration">
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Register
            </button>
          </Link>
        </div>
      </nav>

      {/* Login Container */}
      <div className="mt-12 bg-white p-10 rounded-lg shadow-lg w-2/4 flex">
        {/* Left Side: Image */}
        <div className="w-1/2 flex justify-center">
          <img src="/chefreg.png" alt="Chef" className="w-72 h-72" />
        </div>

        {/* Right Side: Login Form */}
        <div className="w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Chef Login</h2>

          {/* Username Input */}
          <div className="mb-4">
            <label className="text-gray-700">Username</label>
            <input
              type="text"
              className="w-full border-b border-gray-500 focus:outline-none focus:border-blue-500 py-1"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Input */}
          <div className="mb-2">
            <label className="text-gray-700">Password</label>
            <input
              type="password"
              className="w-full border-b border-gray-500 focus:outline-none focus:border-blue-500 py-1"
              placeholder="Enter your password"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <Link to="/forgot-password" className="text-blue-500 text-sm hover:underline">Forgot password?</Link>
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Login
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600 mt-4">
            New user? <Link to="/chef-registration" className="text-blue-500 hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefLogin;

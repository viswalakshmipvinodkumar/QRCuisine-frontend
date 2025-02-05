import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-opacity-40" style={{ backgroundImage: "url('/bgreg.png')" }}>
      {/* Dark overlay on background */}
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>

      {/* Navigation Bar */}
       
      <nav className="relative bg-yellow-300 w-full p-1 flex justify-between items-center ">
        {/* Logo inside a black rectangle */}
        <div className="bg-black  border-1 border-black px-3 py-1">
          <img src="/logo.png" alt="QR Cuisine Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 ">
          <Link to="/" className="text-black font-semibold hover:underline">Home</Link>
          <Link to="/about" className="text-black font-semibold hover:underline">About</Link>
          <Link to="/login" className="text-black font-semibold hover:underline">Login</Link>
          <Link to="/restaurant-registration">
                      <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                        Register
                      </button>
                    </Link>
          
        </div>
      </nav>

      {/* Transparent Login Box */}
      <div className="relative flex justify-center items-center mt-12 z-10">
        <div className="bg-white bg-opacity-60 backdrop-blur-md px-12 py-8 rounded-lg shadow-lg border border-gray-300">
          {/* Login Header */}
          <h2 className="bg-black text-white text-4xl font-bold py-3 px-6 rounded-lg text-center mb-6">
            LOGIN
          </h2>

          {/* Login Options */}
          <div className="flex justify-center space-x-12">
            {/* Restaurant Login */}
            <Link to="/restaurant-login" className="text-center hover:scale-105 transition-transform duration-300">
              <img src="/restreg.png" alt="Restaurant Login" className="w-56 h-56 rounded-lg shadow-md" />
              <p className="text-lg font-semibold mt-3 text-blue-600">Restaurant Login</p>
            </Link>

            {/* Chef Login */}
            <Link to="/chef-login" className="text-center hover:scale-105 transition-transform duration-300">
              <img src="/chefreg.png" alt="Chef Login" className="w-56 h-56 rounded-lg shadow-md" />
              <p className="text-lg font-semibold mt-3 text-blue-600">Chef Login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

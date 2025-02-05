import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-yellow-300 w-full p-1 flex justify-between items-center">
        {/* Logo inside a rectangle */}
        <div className="bg-black border-1 border-black px-3 py-1">
          <img src="/logo.png" alt="QR Cuisine Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="text-black font-semibold hover:underline">Home</Link>
          <Link to="/about" className="text-black font-semibold hover:underline ">About</Link>
          <Link to="/login" className="text-black font-semibold hover:underline">Login</Link>
          
          {/* Register as a button that redirects to restaurant registration */}
          <Link to="/restaurant-registration">
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Register
            </button>
          </Link>
        </div>
      </nav>

      {/* Split screen layout (Top-Bottom) */}
      <div className="flex flex-col w-full h-screen">
        {/* Top Section - Yellow Background with QR Cuisine Text & Image */}
        <div className="w-full h-1/2 bg-yellow-300 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-5xl font-bold flex items-center">
            <span className="mr-2">QR CUISINE</span>
          </h1>
          {/* Image below the text */}
          <img src="/food-qr.png" alt="QR Menu" className="w-64 h-auto mt-4" />
        </div>

        {/* Bottom Section - Background Image */}
        <div className="w-full h-1/2">
          <img 
            src="/restaurant-background.png" 
            alt="Dining Table" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

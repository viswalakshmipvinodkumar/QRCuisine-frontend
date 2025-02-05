import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-yellow-300 w-full p-1 flex justify-between items-center">
      <div className="bg-black border- border-black px-3 py-1">
        <img src="/logo.png" alt="QR Cuisine Logo" className="h-12 w-auto" />
      </div>
      <div className="space-x-6">
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
  );
};

const About = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-black mb-6">About US</h1>
        <p className="text-lg text-gray-700 max-w-3xl text-center">
          QR Cuisine is an innovative platform that simplifies restaurant ordering using QR codes.
          Customers can scan a QR code at any restaurant, browse the digital menu, place orders, and
          make payments seamlessly. Our mission is to enhance dining experiences by providing a
          contactless, fast, and efficient solution for both customers and restaurants.
        </p>
        <div className="mt-8">
          <img src="/restaurant-background.png" alt="QR Cuisine Concept" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;

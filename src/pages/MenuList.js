import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaTrash } from "react-icons/fa";

// Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-yellow-300 w-full p-1 flex justify-between items-center">
      <div className="bg-black px-3 py-1">
        <img src="/logo.png" alt="QR Cuisine Logo" className="h-12 w-auto" />
      </div>
      <h1 className="text-3xl font-bold text-black">Menu Details</h1>
      <div className="space-x-6 flex items-center">
        <Link to="/" className="text-black font-semibold hover:underline">Home</Link>
        <Link to="/about" className="text-black font-semibold hover:underline">About</Link>
        <Link to="/login" className="text-black font-semibold hover:underline">Login</Link>
        <Link to="/profile">
          <FaUserCircle className="text-black text-3xl cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};

const MenuList = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);
  const [tableCount, setTableCount] = useState("");

  // Load menu items from local storage
  useEffect(() => {
    const storedMenu = JSON.parse(localStorage.getItem("menuItems")) || [];
    setMenuItems(storedMenu);
  }, []);

  // Delete a menu item
  const handleDelete = (index) => {
    const updatedMenu = [...menuItems];
    updatedMenu.splice(index, 1);
    setMenuItems(updatedMenu);
    localStorage.setItem("menuItems", JSON.stringify(updatedMenu));
  };

  // Edit a menu item
  
  // Generate QR Code for the full menu
  const handleGenerateQRCode = () => {
    if (!tableCount || tableCount <= 0) {
      alert("Please enter a valid number of tables.");
      return;
    }

    localStorage.setItem("qrMenuData", JSON.stringify({ menuItems, tableCount }));
    navigate("/menu-qr");
  };

  return (
    <div>
      <Navbar />
      <div className="p-6">
       
        {/* Enter Number of Tables */}
        <div className="flex justify-center items-center space-x-4 mb-4">
          <label className="text-xl font-bold text-black ">Number of Tables:</label>
          <input
            type="number"
            className="border px-3 py-2 rounded w-20"
            value={tableCount}
            onChange={(e) => setTableCount(e.target.value)}
            min="1"
          />
        </div>

        {menuItems.length === 0 ? (
          <p className="text-center text-gray-600">No menu items available. Please add items.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg relative">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                )}
                <h2 className="text-lg font-bold mt-2">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="font-semibold text-lg">₹ {item.price}</p>

                {/* Edit & Delete Buttons */}
                <div className="absolute top-2 right-2 flex space-x-2">
                   <button onClick={() => handleDelete(index)} className="text-red-600">
                    <FaTrash className="text-2xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add More Items Button */}
        <div className="flex justify-center mt-6">
          <Link to="/add-menu">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
              + Add More Items
            </button>
          </Link>
        </div>

        {/* Generate QR Code for the Entire Menu */}
        {menuItems.length > 0 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleGenerateQRCode}
              className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-800"
            >
              Generate QR Code for Full Menu
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuList;

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

const AddMenu = () => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    description: "",
    price: "",
    image: null,
  });

  const [menuList, setMenuList] = useState([]);
  const navigate = useNavigate();

  // Load existing menu items from localStorage on component mount
  useEffect(() => {
    const savedMenu = JSON.parse(localStorage.getItem("menuItems")) || [];
    setMenuList(savedMenu);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
    }
  };

  // Save the current item before adding another
  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) {
      alert("Please fill in all required fields.");
      return;
    }

    const newMenuList = [...menuList, formData];
    setMenuList(newMenuList);
    localStorage.setItem("menuItems", JSON.stringify(newMenuList));

    setFormData({ category: "", name: "", description: "", price: "", image: null });
  };

  // Delete a menu item
  const handleDelete = (index) => {
    const updatedMenuList = menuList.filter((_, i) => i !== index);
    setMenuList(updatedMenuList);
    localStorage.setItem("menuItems", JSON.stringify(updatedMenuList));
  };

  // Submit all menu items and navigate to menu list
  const handleSubmit = (e) => {
    e.preventDefault();
    if (menuList.length === 0) {
      alert("Please add at least one menu item before submitting.");
      return;
    }

    navigate("/menu-list");
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-4">Add Menu</h1>
        <form className="bg-white p-6 rounded-lg shadow-lg w-96">
          <select 
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
          >
            <option value="">Select category</option>
            <option value="starter">Starter</option>
            <option value="main">Main Course</option>
            <option value="dessert">Dessert</option>
            <option value="beverages">Beverages</option>
            <option value="specials">Specials</option>
          </select>

          <input 
            type="text" 
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
          />

          <textarea 
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
          />

          <div className="flex items-center">
            <label className="mr-2">Price ₹</label>
            <input 
              type="number" 
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>

          <div className="mt-3">
            <label className="block">Add Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" />
          </div>

          {/* Buttons for saving, adding more, and deleting before adding new items */}
          <div className="flex justify-between mt-3">
            <button onClick={handleSave} className="bg-blue-500 text-white w-1/3 py-2 rounded">
              Save
            </button>
            <button onClick={handleSave} className="bg-purple-500 text-white w-1/3 mx-2 py-2 rounded">
              Add More
            </button>
            <button type="button" onClick={() => setFormData({ category: "", name: "", description: "", price: "", image: null })} className="bg-red-500 text-white w-1/3 py-2 rounded">
              Clear
            </button>
          </div>
        </form>

        {/* Display added items before submission */}
        {menuList.length > 0 && (
          <div className="bg-white p-6 mt-4 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-2">Added Items</h2>
            <ul className="list-disc pl-5">
              {menuList.map((item, index) => (
                <li key={index} className="mb-2 flex justify-between items-center">
                  <span className="font-semibold">{item.name}</span> - ₹{item.price}
                  <FaTrash 
                    className="text-red-500 cursor-pointer ml-2"
                    onClick={() => handleDelete(index)}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Submit all items button */}
        <button onClick={handleSubmit} className="bg-green-600 text-white w-96 mt-4 py-2 rounded">
          Submit Menu
        </button>
      </div>
    </div>
  );
};

export default AddMenu;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-yellow-300 w-full p-1 flex justify-between items-center">
      <div className="bg-black border-1 border-black px-3 py-1">
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

const RestaurantRegistration = () => {
  const [formData, setFormData] = useState({
    license_number: '',
    date_of_issue: '',
    name_of_restaurant: '',
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/register/restaurant/', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 201) {
        navigate('/restaurant-success');
      }
    } catch (err) {
      setError('There was an error registering the restaurant. Please check your input and try again.');
      console.error('Error registering restaurant:', err); 
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="relative flex justify-center items-center h-full bg-cover" style={{ backgroundImage: "url('/rest-bg.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
        <div className="relative bg-white bg-opacity-80 p-8 rounded-2xl w-full max-w-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 bg-black text-white p-3 rounded-lg">Restaurant Registration</h2>
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-gray-700">License Number</label>
              <input type="text" name="license_number" value={formData.license_number} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="text-gray-700">Date of Issue</label>
              <input type="date" name="date_of_issue" value={formData.date_of_issue} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="text-gray-700">Restaurant Name</label>
              <input type="text" name="name_of_restaurant" value={formData.name_of_restaurant} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="text-gray-700">Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="text-gray-700">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="text-gray-700">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition-colors">Register</button>
          </form>
          <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500 font-semibold">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantRegistration;
import React from "react";
import { Link } from "react-router-dom";

const RestaurantSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-full max-w-md">
        {/* Success Icon */}
        <div className="text-green-500 text-5xl mb-4">✅</div>

        {/* Success Message */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Registration Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Your restaurant has been registered successfully. You can now log in and manage your menu.
        </p>

        {/* Continue Button */}
        <Link to="/add-menu">
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Continue to Add menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantSuccess;

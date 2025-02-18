import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react"; // Fix import

const MenuQR = () => {
  const [qrData, setQRData] = useState("");

  useEffect(() => {
    const menuData = localStorage.getItem("qrMenuData");
    if (menuData) {
      setQRData(menuData);
    }
  }, []);

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">QR Code for Full Menu</h1>

      {qrData ? (
        <QRCodeCanvas value={qrData} size={250} />
      ) : (
        <p className="text-gray-600">No menu data available.</p>
      )}

      <div className="mt-6">
        <Link to="/">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuQR;

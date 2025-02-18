import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import RestaurantRegistration from "./pages/RestaurantRegistration";
import About from "./pages/About";
import RestaurantLogin from "./pages/RestaurantLogin";
import ChefLogin from "./pages/ChefLogin";
import RestaurantSuccess from "./pages/RestaurantSuccess";
import AddMenu from "./pages/AddMenu";
import MenuList from "./pages/MenuList";
import MenuQR from "./pages/MenuQR";

function App() {
  const [menuItems, setMenuItems] = useState([]);

  const addMenuItem = (item) => {
    setMenuItems([...menuItems, item]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant-registration" element={<RestaurantRegistration />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/restaurant-login" element={<RestaurantLogin />} />
        <Route path="/chef-login" element={<ChefLogin />} />
        <Route path="/restaurant-success" element={<RestaurantSuccess />} />
        
        {/* Pass addMenuItem to AddMenu */}
        <Route path="/add-menu" element={<AddMenu addMenuItem={addMenuItem} />} />  
        
        {/* Pass menuItems to MenuList */}
        <Route path="/menu-list" element={<MenuList />} />
        <Route path="/menu-qr" element={<MenuQR />} />
      
      </Routes>
    </Router>
  );
}

export default App;

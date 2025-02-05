import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import RestaurantRegistration from "./pages/RestaurantRegistration";
import About from "./pages/About";
import RestaurantLogin from "./pages/RestaurantLogin";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant-registration" element={<RestaurantRegistration />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/restaurant-login" element={<RestaurantLogin />} />


      </Routes>
    </Router>
  );
}

export default App;

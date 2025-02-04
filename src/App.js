import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantRegistration from "./pages/RestaurantRegistration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant-registration" element={<RestaurantRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;

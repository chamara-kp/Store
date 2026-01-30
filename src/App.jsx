import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import Placeorder from "./pages/Placeorder";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/placeorder" element={<Placeorder />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;

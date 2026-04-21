import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Product from "./components/Product";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Signln from "./pages/Signln";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/Signln" element={<Signln />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

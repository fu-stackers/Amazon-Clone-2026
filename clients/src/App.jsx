import { useReducer, useState } from "react";
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
import GroupProuduct from "./pages/GroupProuduct";
import Productdetail from "./pages/Productdetail";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "reset":
        return { count: 0 };
      case "increase":
        return { count: state.count + 1 };
      case "deacrease":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="flex flex-col">
      <Navbar />
      {/* <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>increase</button>
      <button onClick={() => dispatch({ type: "deacrease" })}>deacrease</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/Signln" element={<Signln />} />
        <Route path="/category/:categoryurl" element={<GroupProuduct />} />
        <Route path="/productdetails/:id" element={<Productdetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";
import Home from"./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
// import Slider from "./components/Slider";
// import CounterApp from "./components/CounterApp";

function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <Card
          name="Sunita verma"
          image={"src/assets/images/sunitaverma.jpg"}
          bio=" front-end developer"
          contact="Sunita@gmail.com"
        />
      </div>
      <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center pt-6">Product List</h1>
      <ProductList/>
      </div>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Slider /> */}
        {/* <CounterApp/> */}
    </>
  );
}

export default App;

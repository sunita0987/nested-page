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
import Slider from "./components/Carousal";
import CounterApp from "./components/CounterApp";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <Card
          name="SUNITA VERMA"
          bio=" Front-End Developer"
          contact="SunitaVerma@gmail.com"
        />
      </div>
      <div className="min-h-screen bg-gray-700 p-4 "> 
      <h1 className="text-3xl font-bold text-center pt-6 text-red-500">Product List</h1>
      <ProductList/>
      </div>
        <Slider />
        <CounterApp/>
    </>
  );
}

export default App;

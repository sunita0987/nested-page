import { useState } from "react";
import React from "react";
import "./App.css";
import Card from "./components/Card";

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
    </>
  );
}

export default App;

import React from "react";
import { useState, useEffect } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">React Counter App</h1>
      <div className="text-5xl font-bold mb-6">{count}</div>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow cursor-pointer "
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow cursor-pointer "
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className={`${
            count === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white px-6 py-2 rounded-lg shadow cursor-pointer`}
          disabled={count === 0}
        >
          Reset
        </button>
      </div>
      <div
        className="mt-6 relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow cursor-pointer">
          Hover me
        </button>
        {showTooltip && (
          <div className="absolute bottom-full mb-2 bg-black text-white text-sm px-3 py-1 rounded shadow-lg">
            This is a tooltip!
          </div>
        )}
      </div>
    </div>
  );
};

export default CounterApp;

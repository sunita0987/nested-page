import React from "react";
const Card = ({ name, image, bio, contact }) => {
  const handleClick = () => {
    alert(`You clicked on ${name}'s profile!`);
  };
  return (
    <div className=" max-w-full rounded-xl bg-gray-400">
      <img
        src={"/images/sunita.png"}
        alt={name}
        className="w-full h-48  rounded-xl object-cover bg-white border-indigo-400 border-4"
        style={{ filter: "grayscale(50%)" }}
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="mt-2 text-white">{bio}</p>
        <p className="mt-2 text-gray-900">{contact}</p>
        <button
          onClick={handleClick}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
        >
          Click now
        </button>
      </div>
    </div>
  );
};

export default Card;

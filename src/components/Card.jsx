import React from 'react';
const Card = ({ name, image, bio, contact }) => {
  const handleClick = () => {
    alert(`You clicked on ${name}'s profile!`);
  };

  return (
    <div className="max-w-full rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img src={"src/assets/images/sunitaverma.jpg"} alt={name} className="w-45 h-45 rounded-xl" />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="mt-2 text-gray-600">{bio}</p>
        <p className='mt-2 text-gray-900'>{contact}</p>
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

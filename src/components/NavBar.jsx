import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const isAbout = location.pathname === "/about";
  const isContact = location.pathname === "/contact";

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
        <NavLink
          to="/home"
          className={`font-semibold text-lg ${
            isHome ? "text-blue-600 underline" : "text-gray-700"
          }`}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={`font-semibold text-lg ${
            isAbout ? "text-blue-600 underline" : "text-gray-700"
          }`}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={`font-semibold text-lg ${
            isContact ? "text-blue-600 underline" : "text-gray-700"
          }`}
        >
          Contact
        </NavLink>
      </div>

      <div className="text-sm text-gray-500 text-center sm:text-left">
        {isHome || isAbout
          ? "Welcome to our website!"
          : isContact
          ? "Feel free to reach out!"
          : ""}
      </div>
    </nav>
  );
};

export default NavBar;

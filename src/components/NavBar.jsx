import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const isAbout = location.pathname === "/about";
  const isContact = location.pathname === "/contact";

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-center gap-6">
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
      <div className="ml-auto text-sm text-gray-500">
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

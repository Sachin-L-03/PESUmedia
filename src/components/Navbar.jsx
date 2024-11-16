import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../assets/Logo.png';

const Navbar = () => {
  // State to track user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle the login state
  const handleLoginLogout = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  // Navbar items with dynamic Login/Logout
  const getNavbarData = () => [
    {
      path: "/",
      title: "Events",
    },
    {
      path: "/podcasts",
      title: "Podcasts",
    },
    {
      path: isLoggedIn ? "/" : "/login",
      title: isLoggedIn ? "Logout" : "Login",
      action: isLoggedIn ? handleLoginLogout : null, // Attach logout logic
    },
  ];

  return (
    <div className="w-full h-[80px] flex justify-between items-center p-6 bg-black sticky top-0 z-50">
      {/* Left Corner Image */}
      <img
        src={Logo}
        alt="Logo"
        className="h-full max-h-[90px] w-auto max-w-[200px] object-contain"
      />

      {/* Right Corner Links */}
      <div className="flex gap-x-8 pr-6">
        {getNavbarData().map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            onClick={link.action || null} // Only attach action if it exists
            className={({ isActive }) =>
              isActive
                ? "text-purple-300 font-semibold text-xl"
                : "text-white font-medium text-xl"
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 px-6 font-medium">
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className="w-36" />

      {/* Menu */}
      <ul className="hidden sm:flex gap-8 text-m text-gray-700">
        <li>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-700 border-none hidden" />
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/collections"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTIONS</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-700 border-none hidden" />
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-700 border-none hidden" />
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-700 border-none hidden" />
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-6">
        {/* Search */}
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search"
        />

        {/* Profile Dropdown */}
        <div className="relative group">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="Profile"
          />

          {/* Dropdown */}
          <div className="absolute dropdown-menu right-0 top-full mt-2 hidden group-hover:block pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-600 rounded shadow-lg">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

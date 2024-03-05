import React, { useState, useRef } from "react";
import { useDescope, useUser } from "@descope/react-sdk";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { logout } = useDescope();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const userDetail = useUser()

  const handleSignout = () => {
    logout().then(() => navigate("/"));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/leagues" className="flex items-center text-white font-bold">
            Leagues
          </Link>
          <div className="flex items-center relative">
            <p className="text-white px-2">Hi, { userDetail?.user?.name}</p>
            <button
              onClick={toggleMenu}
              className="p-1 rounded-full text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
             <img
                className="h-6 w-6 rounded-full object-cover"
                src={userDetail?.user?.picture}
                alt="Profile"
              />
            </button>
            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute top-11 right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              >
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <button
                    onClick={handleSignout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-white"
                    role="menuitem"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

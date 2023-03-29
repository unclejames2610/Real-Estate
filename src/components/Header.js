import React, { useContext } from "react";

import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.svg";

import { BsMoonFill, BsFillMoonStarsFill } from "react-icons/bs";
import { HouseContext } from "./HouseContext";

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(HouseContext);
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex gap-6 justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <div className="flex items-center gap-6">
          <Link
            className="hover:text-violet-900 transition text-sm leading-none sm:text-base dark:text-white"
            to=""
          >
            Log in
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition text-sm leading-none text-center sm:text-base"
            to=""
          >
            Sign up
          </Link>
          <div>
            <button
              onClick={toggleTheme}
              className={`${
                isDarkMode ? "hover:bg-slate-900" : "hover:bg-gray-200"
              } rounded-full p-2 `}
            >
              {isDarkMode ? (
                <BsFillMoonStarsFill className="text-xl text-violet-700" />
              ) : (
                <BsMoonFill className="text-xl text-violet-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

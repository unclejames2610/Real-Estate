import React from "react";

import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex gap-6 justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <div className="flex items-center gap-6">
          <Link
            className="hover:text-violet-900 transition text-sm leading-none sm:text-base"
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
        </div>
      </div>
    </header>
  );
};

export default Header;

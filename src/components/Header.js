import React from "react";
import Logo from "../img/header/SMP logo.svg";
import Socials from "./Socials";
import MobileNav from "./MobileNav";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-black fixed w-full px-[40px] lg:px-[px] z-30 h-[100] lg:h-[100px] flex items-centre">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={"/"} className="max-w[200px]">
          <img
            src={Logo}
            style={{ height: 100, width: 350 }}
            alt="website logo"
          />
        </Link>

        <nav className="hidden lg:flex gap-x-12 font-semibold">
          <Link to={"/"} className="text-[#696c6d] hover:text-white transition">
            Home
          </Link>
          <Link
            to={'/about'}
            className="text-[#696c6d] hover:text-white transition"
          >
            About
          </Link>
          <Link
            to={'/portfolio'}
            className="text-[#696c6d] hover:text-white transition"
          >
            Portfolio
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d] hover:text-white transition"
          >
            Contact
          </Link>
          <Link
            to={"/feedback"}
            className="text-[#696c6d] hover:text-white transition"
          >
            Feedback
          </Link>
        </nav>
      </div>
      {/*Socials*/}
      <Socials />
      {/*mobile nav*/}
      <MobileNav />
    </header>
  );
};

export default Header;

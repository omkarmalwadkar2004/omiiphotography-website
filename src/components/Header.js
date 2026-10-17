import React from "react";
import Logo from "../img/header/omii-logo.svg";
import Socials from "./Socials";
import MobileNav from "./MobileNav";

import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
  { to: "/feedback", label: "Feedback" },
];

const Header = () => {
  return (
    <header className="bg-black fixed w-full px-[40px] lg:px-[px] z-30 h-[100px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={"/"}>
          <img
            src={Logo}
            style={{ height: 100, width: 350 }}
            alt="Omii's Photography"
          />
        </Link>

        <nav className="hidden lg:flex gap-x-12 font-semibold">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `relative py-2 transition after:absolute after:left-0 after:bottom-0 after:h-px after:bg-gold after:transition-all after:duration-300 ${
                  isActive
                    ? "text-white after:w-full"
                    : "text-[#696c6d] hover:text-white after:w-0 hover:after:w-full"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
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

import React, { useState } from "react";
import logoMakgraph from "../assets/logo_Makgraph.png";
import facebook from "../assets/facebook_color.png";
import instagram from "../assets/instagram_color.png";
import pinterest from "../assets/pinterest_color.png";
// import { navLinks } from "../constants";
import { ShoppingCart } from "phosphor-react";
import { Outlet, NavLink } from "react-router-dom";
import Home from "./home/home";
import { navLinks } from "./../constants/index";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div id="header">
        <div className="shadow-md z-10 fixed top-0 lef-0 w-full">
          <div className="md:flex items-center justify-between bg-surfaceContainer py-2 md:px-6 lg:px-[156px] xl:px-[200px] sm:px-8 px-7">
            <div>
              <img
                className=" flex w-20 h-16 md:w-28 md:h-20"
                src={logoMakgraph}
              />
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="md:hidden text-3xl absolute right-8 top-6 cursor-pointer"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute bg-surfaceContainer  md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-6 transition-all md:transition-none duration-500 ease-in ${
                open ? "top-[81px] opacity-100" : "top-[-490px]"
              } md:opacity-100 opacity-0`}
            >
              {navLinks.map((navLinks) => (
                <li
                  key={navLinks.id}
                  // key={`/navLinks/${navLinks.id}`}
                  className="w-full md:w-[70px] text-[14px] h-5 justify-center items-center flex md:my-0 my-7 md:bg-surfaceContainer hover:bg-primary/10 duration-300"
                >
                  <NavLink
                    to={`/${navLinks.title}/${navLinks.id}`}
                    // to={`/navLinks/navLinks.id/`}
                    // to={`/home/1`}
                    className={({ isActive }) => {
                      return isActive ? " text-primary" : "";
                    }}
                  >
                    {navLinks.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="h-6 items-center md:flex hidden gap-2 ">
              <a href="#home">
                <b>
                  <span className="text-[14px] hover:bg-primary/10 duration-300">
                    S'inscrire
                  </span>
                </b>
              </a>
              ou
              <NavLink
                to={`/home/1`}
                // onClick={() => setActiveNav("#home")}
                className={({ isActive }) => {
                  return isActive ? " text-primary" : "";
                }}
                // href="#contact"
                // onClick={() => setActiveNav("#contact")}
                // className={activeNav === "#contact" ? "text-primary" : ""}
              >
                <b>
                  <span className="text-[14px] hover:bg-primary/10 duration-300">
                    Se Connecter
                  </span>
                </b>
              </NavLink>
              <ShoppingCart size={24} />
            </div>
          </div>
        </div>
        {/* <div>
              <Home />
            </div> */}
      </div>
      {/* <div className="mt-20 md:mt-24 h-[100%]" id="detail">
        <Outlet />
      </div> */}
    </>
  );
}

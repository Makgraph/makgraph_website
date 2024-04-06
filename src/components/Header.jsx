import React, { useState } from "react";
import logoMakgraph from "../assets/logo_Makgraph.png";
import facebook from "../assets/facebook_color.png";
import instagram from "../assets/instagram_color.png";
import pinterest from "../assets/pinterest_color.png";
import { navLinks } from "../constants";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md z-10 fixed top-0 lef-0 w-full">
      <div className="md:flex items-center justify-between bg-surfaceContainer py-2 md:px-6 lg:px-[156px] xl:px-[200px] sm:px-8 px-7">
        <div>
          <img className=" flex w-20 h-16 md:w-28 md:h-20" src={logoMakgraph} />
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
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="w-full md:w-24 h-5 justify-between items-center flex md:my-0 my-7"
            >
              <a
                href={`#${nav.id}`}
                className="grow shrink basis-0 text-center text-onSurface  md:bg-surfaceContainer hover:bg-primary/10 duration-300 text-sm font-medium font-['Roboto'] leading-tight tracking-tight"
              >
                {nav.title}
              </a>
            </li>
          ))}
          <div className="w-full h-6 justify-center items-center  flex md:hidden pl-3 mt-16 gap-10 ">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-pinterest"></ion-icon>
          </div>
        </ul>
        <div className="h-6 items-center md:flex hidden gap-2 ">
          <img src={facebook} className="w-6 h-6 relative cursor-pointer" />
          <img src={instagram} className="w-6 h-6 relative" />
          <img src={pinterest} className="w-6 h-6 relative" />
        </div>
      </div>
    </div>
  );
};

export default Header;

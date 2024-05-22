import React, { useContext, useState } from "react";
import logoMakgraph from "../assets/logo_Makgraph.png";
import facebook from "../assets/facebook_color.png";
import instagram from "../assets/instagram_color.png";
import pinterest from "../assets/pinterest_color.png";
// import { navLinks } from "../constants";
import { Person, ShoppingCart, SignIn, UserCircle } from "phosphor-react";
import { Outlet, NavLink, Link } from "react-router-dom";
import Home from "./home/home";
import { navLinks } from "./../constants/index";
import { ShopContext } from "../context/ShopContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { getCartAmount } = useContext(ShopContext);

  const cartAmount = getCartAmount();

  return (
    <>
      <div id="header">
        <div className="shadow-md z-10 fixed top-0 lef-0 w-full">
          <div className="flex justify-center items-center md:justify-between bg-surfaceContainer py-2 md:px-6 lg:px-[156px] xl:px-[200px] sm:px-8 px-7">
            <div
              onClick={() => setOpen(!open)}
              className="md:hidden flex text-3xl absolute left-6 top-6 cursor-pointer"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>

            <div>
              <Link to="/">
                <img
                  className=" flex w-20 h-16 md:w-28 md:h-20"
                  src={logoMakgraph}
                />
              </Link>
            </div>

            <div className="md:hidden absolute right-6 top-6">
              <Link to="/shop/3/cart">
                <div className="relative ">
                  {cartAmount > 0 ? (
                    <div className="bg-error absolute h-4 w-4 md:h-4 md:w-4 rounded-[50%] -right-1 -top-[5px] md:-right-2 md:-top-[6px]">
                      <span className="text-white text-[10px] md:text-[11px] md:pb-2 flex justify-center items-center">
                        {cartAmount}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  <ShoppingCart size={28} />
                </div>
              </Link>
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
              <NavLink
                to={`/home/login/1`}
                className={({ isActive }) => {
                  return isActive ? " text-primary" : "";
                }}
              >
                <div className="relative flex bg-onSecondaryContainer/5 p-1">
                  <UserCircle size={24} />

                  <span className="text-[14px] px-1 hover:text-primary duration-300">
                    Se Connecter
                  </span>
                </div>
              </NavLink>
              <NavLink to="/shop/3/cart">
                <div className="relative flex bg-onSecondaryContainer/5 p-1">
                  <ShoppingCart size={24} />
                  <span className="text-[14px] px-1 hover:text-primary duration-300">
                    Panier
                  </span>
                  {cartAmount > 0 ? (
                    <div className="bg-error h-4 w-4 md:h-4 md:w-4 rounded-[50%] -right-1 -top-[2px] md:-right-2 md:-top-[6px]">
                      <span className="text-white text-[10px] md:text-[11px] md:pb-2 flex justify-center items-center">
                        {cartAmount}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </NavLink>
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

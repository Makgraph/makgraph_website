import React, { useState } from "react";
import logoMakgraph from "/assets/logo_Makgraph.png";
import {
  Person,
  ShoppingCart,
  SignIn,
  SignOut,
  UserCircle,
} from "phosphor-react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { navLinks } from "../../constants/index";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../redux/auth/authSlice";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <div className="shadow-md z-10 fixed top-0 left-0 w-full">
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
          {/* MOBILE HEADER */}
          <div className="md:hidden absolute right-6 top-6">
            <div className="flex gap-3">
              {user ? (
                <button onClick={onLogout}>
                  <div>
                    <SignOut size={28} />
                  </div>
                </button>
              ) : (
                <NavLink to={`/Accueil/login`}>
                  <div>
                    <UserCircle size={28} />
                  </div>
                </NavLink>
              )}
              {/* <>
                <NavLink to={`/Accueil/login`}>
                  <div>
                    <UserCircle size={28} />
                  </div>
                </NavLink>
              </> */}

              <Link to="/shop/3/cart">
                <div className="relative">
                  <div className="bg-error absolute h-4 w-4 md:h-4 md:w-4 rounded-[50%] -right-1 -top-[5px] md:-right-2 md:-top-[6px]">
                    <span className="text-white text-[10px] md:text-[11px] md:pb-2 flex justify-center items-center">
                      1
                    </span>
                  </div>

                  <ShoppingCart size={28} />
                </div>
              </Link>
            </div>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute bg-surfaceContainer  md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-6 transition-all md:transition-none duration-500 ease-in ${
              open ? "top-[81px] opacity-100" : "top-[-490px]"
            } md:opacity-100 opacity-0`}
          >
            {navLinks.map((navLinks) => (
              <li
                key={navLinks.id}
                className="w-full md:w-[70px] text-[14px] h-5 justify-center items-center flex md:my-0 my-7 md:bg-surfaceContainer hover:bg-primary/10 duration-300"
              >
                <NavLink
                  to={`/${navLinks.title}`}
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
            <div>
              {user ? (
                <div
                  className={({ isActive }) => {
                    return isActive ? " text-primary" : "";
                  }}
                >
                  <div className="relative flex bg-onSecondaryContainer/5 p-1">
                    <UserCircle size={28} />
                    <button onClick={onLogout}>
                      <span className="text-[14px] px-1 hover:text-primary duration-300">
                        Se déconnecter
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <Link to="/Accueil/login">
                  <div
                    className={({ isActive }) => {
                      return isActive ? " text-primary" : "";
                    }}
                  >
                    <div className="relative flex bg-onSecondaryContainer/5 p-1">
                      <UserCircle size={28} />
                      <button>
                        <span className="text-[14px] px-1 hover:text-primary duration-300">
                          Se Connecter
                        </span>
                      </button>
                    </div>
                  </div>
                </Link>
              )}
            </div>
            <NavLink to="/shop/3/cart">
              <div className="relative flex bg-onSecondaryContainer/5 p-1">
                <ShoppingCart size={24} />
                <span className="text-[14px] px-1 hover:text-primary duration-300">
                  Panier
                </span>

                <div className="bg-error h-4 w-4 md:h-4 md:w-4 rounded-[50%] -right-1 -top-[2px] md:-right-2 md:-top-[6px]">
                  <span className="text-white text-[10px] md:text-[11px] md:pb-2 flex justify-center items-center">
                    1
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

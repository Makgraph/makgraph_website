import React, { useState } from "react";
import {
  homeOutline,
  cartOutline,
  addOutline,
  appsOutline,
  listOutline,
  peopleOutline,
  peopleCircleOutline,
  cashOutline,
  list,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import logoMakgraph from "/assets/logo_Makgraph.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(true); // État pour suivre si le menu est ouvert
  const [logoOpen, setLogoOpen] = useState(true); // État pour suivre si le logo et Admin sont ouverts

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setLogoOpen(!logoOpen);
  };

  return (
    <div className="hidden sm:flex">
      {menuOpen ? (
        <>
          <div className=" sm:flex">
            <div className=" h-screen sm:w-44 md:w-48 text-black">
              {/* Header avec logo, titre et bouton Menu */}
              <div className="w-auto flex items-center justify-between p-4 sm:mb-4  sm:px-3">
                <div className="flex items-center">
                  <div className={`${logoOpen ? "" : "flex"}`}>
                    {logoOpen && (
                      <img
                        src={logoMakgraph}
                        alt="Logo"
                        className="hidden sm:flex sm:h-12 sm:w-14 md:h-12  md:w-18 sm:mr-1"
                      />
                    )}
                  </div>
                  <div className={`${logoOpen ? "" : "flex"}`}>
                    {logoOpen && (
                      <span className="text-primary hidden  sm:flex text-base md:text-lg font-semibold">
                        Admin
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={toggleMenu}
                  className="text-onSurface w-auto focus:outline-none"
                >
                  <IonIcon
                    icon={list}
                    className=" sm:flex sm:h-4 md:h-5 sm:w-4 md:w-5 sm:mr-1 text-primary"
                  />
                </button>
              </div>

              {/* Navigation */}
              <nav className="mt-2 sm:mt-4">
                <ul>
                  <li className={`${menuOpen ? "" : "flex"}`}>
                    <NavLink
                      to="/"
                      className={({ isActive }) => {
                        return isActive
                          ? " flex items-center text-primary bg-primary/20 py-2 sm:px-4"
                          : "flex items-center hover:bg-onSurface/30 hover:text-onPrimary text-black py-2 sm:px-4";
                      }}
                    >
                      <IonIcon
                        icon={homeOutline}
                        className="hidden sm:flex sm:h-5 sm:w-5 sm:mr-2 text-primary"
                      />
                      {menuOpen && (
                        <span className="hidden sm:flex sm:text-medium md:text-base font-serif">
                          Dashboard
                        </span>
                      )}
                    </NavLink>
                  </li>
                  <li className={`${menuOpen ? "" : "flex"}`}>
                    <NavLink
                      to="/products"
                      className={({ isActive }) => {
                        return isActive
                          ? " flex items-center text-primary bg-primary/20 py-2 sm:px-4"
                          : "flex items-center hover:bg-onSurface/30 hover:text-onPrimary text-black py-2 sm:px-4";
                      }}
                    >
                      <IonIcon
                        icon={cartOutline}
                        className="hidden sm:flex sm:h-5 sm:w-5 sm:mr-2 text-primary"
                      />
                      {menuOpen && (
                        <span className="hidden sm:flex sm:text-medium md:text-base font-serif">
                          Products
                        </span>
                      )}
                    </NavLink>
                  </li>
                  <li className={`${menuOpen ? "" : "flex"}`}>
                    <NavLink
                      to="/addProduct"
                      className={({ isActive }) => {
                        return isActive
                          ? " flex items-center text-primary bg-primary/20 py-2 sm:px-4"
                          : "flex items-center hover:bg-onSurface/30 hover:text-onPrimary text-black py-2 sm:px-4";
                      }}
                    >
                      <IonIcon
                        icon={addOutline}
                        className="hidden sm:flex sm:h-5 sm:w-5 sm:mr-2 text-primary"
                      />
                      {menuOpen && (
                        <span className="hidden sm:flex sm:text-medium md:text-base font-serif">
                          Add Product
                        </span>
                      )}
                    </NavLink>
                  </li>
                  <li className={`${menuOpen ? "" : "flex"}`}>
                    <NavLink
                      to="/categories"
                      className={({ isActive }) => {
                        return isActive
                          ? " flex items-center text-primary bg-primary/20 py-2 sm:px-4"
                          : "flex items-center hover:bg-onSurface/30 hover:text-onPrimary text-black py-2 sm:px-4";
                      }}
                    >
                      <IonIcon
                        icon={appsOutline}
                        className="hidden sm:flex sm:h-5 sm:w-5 sm:mr-2 text-primary"
                      />
                      {menuOpen && (
                        <span className="hidden sm:flex sm:text-medium md:text-base font-serif">
                          Categories
                        </span>
                      )}
                    </NavLink>
                  </li>
                  <li className={`${menuOpen ? "" : "flex"}`}>
                    <NavLink
                      to="/orders"
                      className={({ isActive }) => {
                        return isActive
                          ? " flex items-center text-primary bg-primary/20 py-2 sm:px-4"
                          : "flex items-center hover:bg-onSurface/30 hover:text-onPrimary text-black py-2 sm:px-4";
                      }}
                    >
                      <IonIcon
                        icon={listOutline}
                        className="hidden sm:flex sm:h-5 sm:w-5 sm:mr-2 text-primary"
                      />
                      {menuOpen && (
                        <span className="hidden sm:flex sm:text-medium md:text-base font-serif">
                          Orders
                        </span>
                      )}
                    </NavLink>
                  </li>
                  <li className={`${menuOpen ? "" : "flex"}`}>
                    <NavLink
                      to="/users"
                      className={({ isActive }) => {
                        return isActive
                          ? " flex items-center text-primary bg-primary/20 py-2 sm:px-4"
                          : "flex items-center hover:bg-onSurface/30 hover:text-onPrimary text-black py-2 sm:px-4";
                      }}
                    >
                      <IonIcon
                        icon={peopleOutline}
                        className="hidden sm:flex sm:h-5 sm:w-5 sm:mr-2 text-primary"
                      />
                      {menuOpen && (
                        <span className="hidden sm:flex sm:text-medium md:text-base font-serif">
                          Users
                        </span>
                      )}
                    </NavLink>
                  </li>
                  <li className={`${menuOpen ? "" : "flex"}`}>
                    <NavLink
                      to="/sellers"
                      className={({ isActive }) => {
                        return isActive
                          ? " flex items-center text-primary bg-primary/20 py-2 sm:px-4"
                          : "flex items-center hover:bg-onSurface/30 hover:text-onPrimary text-black py-2 sm:px-4";
                      }}
                    >
                      <IonIcon
                        icon={peopleCircleOutline}
                        className="hidden sm:flex sm:h-5 sm:w-5 sm:mr-2 text-primary"
                      />
                      {menuOpen && (
                        <span className="hidden sm:flex sm:text-medium md:text-base font-serif">
                          Sellers
                        </span>
                      )}
                    </NavLink>
                  </li>
                  <li className={`${menuOpen ? "" : "flex"}`}>
                    <NavLink
                      to="/transactions"
                      className={({ isActive }) => {
                        return isActive
                          ? " flex items-center text-primary bg-primary/20 py-2 sm:px-4"
                          : "flex items-center hover:bg-onSurface/30 hover:text-onPrimary text-black py-2 sm:px-4";
                      }}
                    >
                      <IonIcon
                        icon={cashOutline}
                        className="hidden sm:flex sm:h-5 sm:w-5 sm:mr-2 text-primary"
                      />
                      {menuOpen && (
                        <span className="hidden sm:flex sm:text-medium md:text-base font-serif">
                          Transactions
                        </span>
                      )}
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </>
      ) : (
        <div className=" sm:flex">
          <div className=" h-screen w-14 text-black">
            {/* Header avec logo, titre et bouton Menu */}
            <div className="flex items-center justify-between p-6 sm:mb-4 px-2 sm:px-4">
              <button
                onClick={toggleMenu}
                className="text-onSurface w-auto focus:outline-none"
              >
                <IonIcon
                  icon={list}
                  className=" sm:flex sm:h-4 md:h-5 sm:w-4 md:w-5 sm:mr-2 text-primary"
                />
              </button>
            </div>

            {/* Navigation */}
            <nav className="mt-2 sm:mt-4">
              <ul>
                <li className={`${menuOpen ? "" : "flex"}`}>
                  <NavLink
                    to="/"
                    className={({ isActive }) => {
                      return isActive
                        ? " flex items-center text-primary bg-primary/20 py-2 sm:px-4"
                        : "flex items-center hover:bg-onSurface/30 hover:text-onPrimary text-black py-2 sm:px-4";
                    }}
                  >
                    <IonIcon
                      icon={homeOutline}
                      className="hidden sm:flex sm:h-5 sm:w-5 sm:mr-2 text-primary"
                    />
                    {menuOpen && (
                      <span className="hidden sm:flex sm:text-medium md:text-base font-serif">
                        Dashboard
                      </span>
                    )}
                  </NavLink>
                </li>
                <li className={`${menuOpen ? "" : "flex"}`}>
                  <NavLink
                    to="/products"
                    className={({ isActive }) => {
                      return isActive
                        ? " flex items-center text-primary bg-primary/20 py-2 sm:px-4"
                        : "flex items-center hover:bg-onSurface/30 hover:text-onPrimary text-black py-2 sm:px-4";
                    }}
                  >
                    <IonIcon
                      icon={cartOutline}
                      className="hidden sm:flex sm:h-5 sm:w-5 sm:mr-2 text-primary"
                    />
                    {menuOpen && (
                      <span className="hidden sm:flex sm:text-medium md:text-base font-serif">
                        Products
                      </span>
                    )}
                  </NavLink>
                </li>
                <li className={`${menuOpen ? "" : "flex"}`}>
                  <NavLink
                    to="/addProduct"
                    className={({ isActive }) => {
                      return isActive
                        ? " flex items-center text-primary bg-primary/20 py-2 sm:px-4"
                        : "flex items-center hover:bg-onSurface/30 hover:text-onPrimary text-black py-2 sm:px-4";
                    }}
                  >
                    <IonIcon
                      icon={addOutline}
                      className="hidden sm:flex sm:h-5 sm:w-5 sm:mr-2 text-primary"
                    />
                    {menuOpen && (
                      <span className="hidden sm:flex sm:text-medium md:text-base font-serif">
                        Add Product
                      </span>
                    )}
                  </NavLink>
                </li>
                <li className={`${menuOpen ? "" : "flex"}`}>
                  <NavLink
                    to="/categories"
                    className={({ isActive }) => {
                      return isActive
                        ? " flex items-center text-primary bg-primary/20 py-2 sm:px-4"
                        : "flex items-center hover:bg-onSurface/30 hover:text-onPrimary text-black py-2 sm:px-4";
                    }}
                  >
                    <IonIcon
                      icon={appsOutline}
                      className="hidden sm:flex sm:h-5 sm:w-5 sm:mr-2 text-primary"
                    />
                    {menuOpen && (
                      <span className="hidden sm:flex sm:text-medium md:text-base font-serif">
                        Categories
                      </span>
                    )}
                  </NavLink>
                </li>
                <li className={`${menuOpen ? "" : "flex"}`}>
                  <NavLink
                    to="/orders"
                    className={({ isActive }) => {
                      return isActive
                        ? " flex items-center text-primary bg-primary/20 py-2 sm:px-4"
                        : "flex items-center hover:bg-onSurface/30 hover:text-onPrimary text-black py-2 sm:px-4";
                    }}
                  >
                    <IonIcon
                      icon={listOutline}
                      className="hidden sm:flex sm:h-5 sm:w-5 sm:mr-2 text-primary"
                    />
                    {menuOpen && (
                      <span className="hidden sm:flex sm:text-medium md:text-base font-serif">
                        Orders
                      </span>
                    )}
                  </NavLink>
                </li>
                <li className={`${menuOpen ? "" : "flex"}`}>
                  <NavLink
                    to="/users"
                    className={({ isActive }) => {
                      return isActive
                        ? " flex items-center text-primary bg-primary/20 py-2 sm:px-4"
                        : "flex items-center hover:bg-onSurface/30 hover:text-onPrimary text-black py-2 sm:px-4";
                    }}
                  >
                    <IonIcon
                      icon={peopleOutline}
                      className="hidden sm:flex sm:h-5 sm:w-5 sm:mr-2 text-primary"
                    />
                    {menuOpen && (
                      <span className="hidden sm:flex sm:text-medium md:text-base font-serif">
                        Users
                      </span>
                    )}
                  </NavLink>
                </li>
                <li className={`${menuOpen ? "" : "flex"}`}>
                  <NavLink
                    to="/sellers"
                    className={({ isActive }) => {
                      return isActive
                        ? " flex items-center text-primary bg-primary/20 py-2 sm:px-4"
                        : "flex items-center hover:bg-onSurface/30 hover:text-onPrimary text-black py-2 sm:px-4";
                    }}
                  >
                    <IonIcon
                      icon={peopleCircleOutline}
                      className="hidden sm:flex sm:h-5 sm:w-5 sm:mr-2 text-primary"
                    />
                    {menuOpen && (
                      <span className="hidden sm:flex sm:text-medium md:text-base font-serif">
                        Sellers
                      </span>
                    )}
                  </NavLink>
                </li>
                <li className={`${menuOpen ? "" : "flex"}`}>
                  <NavLink
                    to="/tansactions"
                    className={({ isActive }) => {
                      return isActive
                        ? " flex items-center text-primary bg-primary/20 py-2 sm:px-4"
                        : "flex items-center hover:bg-onSurface/30 hover:text-onPrimary text-black py-2 sm:px-4";
                    }}
                  >
                    <IonIcon
                      icon={cashOutline}
                      className="hidden sm:flex sm:h-5 sm:w-5 sm:mr-2 text-primary"
                    />
                    {menuOpen && (
                      <span className="hidden sm:flex sm:text-medium md:text-base font-serif">
                        Transactions
                      </span>
                    )}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

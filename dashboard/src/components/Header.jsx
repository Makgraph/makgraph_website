import { IonIcon } from "@ionic/react";
import {
  searchOutline,
  cartOutline,
  personCircleOutline,
  settingsOutline,
  exitOutline,
  chevronDownOutline,
  homeOutline,
  addOutline,
  appsOutline,
  listOutline,
  peopleOutline,
  peopleCircleOutline,
  cashOutline,
} from "ionicons/icons";
import { useState } from "react";
import "./Header.css"; // Importez votre fichier CSS pour les animations
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="z-10 bg-white sm:border-l  shadow-md py-2 sm:py-4 px-4 sm:px-6 sm:gap-20 flex justify-between items-center relative">
      {/* Menu Button - visible only on small screens (md and below) */}
      <button
        onClick={toggleMenu}
        className="mr-auto block sm:hidden text-primary focus:outline-none absolute top-2 left-0 mt-4 ml-4"
        style={{ zIndex: 10 }}
      >
        <IonIcon icon={listOutline} className="h-5 w-5" />
      </button>

      {/* Navigation - visible on md and above screens */}
      <nav
        className={`menu  ${
          menuOpen ? "open" : ""
        } sm:hidden absolute top-0 left-0 h-full bg-white shadow-md pt-4  sm:gap-20 flex justify-between items-center w-full sm:w-4/5`}
      >
        <ul className="mt-[350px] bg-onPrimary flex flex-col md:flex-row ">
          <li>
            <Link to="/" className="flex items-center text-black py-2 px-4">
              <IonIcon
                icon={homeOutline}
                className="h-5 w-5 mr-2 text-primary"
              />
              <span className="text-sm md:text-base font-serif">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="flex items-center text-black py-2 px-4"
            >
              <IonIcon
                icon={cartOutline}
                className="h-5 w-5 mr-2 text-primary"
              />
              <span className="text-sm md:text-base font-serif">Products</span>
            </Link>
          </li>
          <li>
            <Link
              to="/addProduct"
              className="flex items-center text-black py-2 px-4"
            >
              <IonIcon
                icon={addOutline}
                className="h-5 w-5 mr-2 text-primary"
              />
              <span className="text-sm md:text-base font-serif">
                Add Product
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className="flex items-center text-black py-2 px-4"
            >
              <IonIcon
                icon={appsOutline}
                className="h-5 w-5 mr-2 text-primary"
              />
              <span className="text-sm md:text-base font-serif">
                Categories
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="flex items-center text-black py-2 px-4"
            >
              <IonIcon
                icon={listOutline}
                className="h-5 w-5 mr-2 text-primary"
              />
              <span className="text-sm md:text-base font-serif">Orders</span>
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="flex items-center text-black py-2 px-4"
            >
              <IonIcon
                icon={peopleOutline}
                className="h-5 w-5 mr-2 text-primary"
              />
              <span className="text-sm md:text-base font-serif">Users</span>
            </Link>
          </li>
          <li>
            <Link
              to="/sellers"
              className="flex items-center text-black py-2 px-4"
            >
              <IonIcon
                icon={peopleCircleOutline}
                className="h-5 w-5 mr-2 text-primary"
              />
              <span className="text-sm md:text-base font-serif">Sellers</span>
            </Link>
          </li>
          <li>
            <Link
              to="/transactions"
              className="flex items-center text-black py-2 px-4"
            >
              <IonIcon
                icon={cashOutline}
                className="h-5 w-5 mr-2 text-primary"
              />
              <span className="text-sm md:text-base font-serif">
                Transactions
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Search Bar */}
      <div className="relative    ml-8 mr-4 sm:ml-auto sm:mr-4 flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IonIcon icon={searchOutline} className="text-[#4b5563]" />
        </div>
        <input
          type="text"
          placeholder="Rechercher..."
          className="bg-[#e5e7eb] w-full text-sm sm:text-base text-[#1f2937] rounded-full py-2 pl-10 pr-4 outline-none border border-[#d1d5db] focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50 "
        />
      </div>

      {/* User Dropdown */}
      <div className="flex items-center relative">
        <button
          className="text-[#374151] p-2 rounded-md  hover:bg-[#d1d5db] focus:outline-none"
          onClick={toggleDropdown}
        >
          <IonIcon
            icon={personCircleOutline}
            className="h-6 sm:h-8 w-6 sm:w-8"
          />
          <IonIcon
            icon={chevronDownOutline}
            className="pb-1 sm:pb-2 h-3 sm:h-4 w-3 sm:w-4"
          />
        </button>
        {dropdownOpen && (
          <div className="absolute top-full right-0 w-36 sm:w-48 bg-white rounded-md shadow-lg py-4 sm:py-1 z-10">
            <button className="block w-full text-left text-sm sm:text-base px-4 py-2 text-[#374151] hover:bg-[#e5e7eb]">
              <IonIcon icon={personCircleOutline} className="mr-2" /> Mon Profil
            </button>
            <button className="block w-full text-left text-sm sm:text-base px-4 py-2 text-[#374151] hover:bg-[#e5e7eb]">
              <IonIcon icon={settingsOutline} className="mr-2" /> Settings
            </button>
            <Link
              to=""
              onClick={logoutHandler}
              className="block w-full text-left text-sm sm:text-base px-4 py-2 text-[#374151] hover:bg-[#e5e7eb]"
            >
              <IonIcon icon={exitOutline} className="mr-2" /> Exit
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

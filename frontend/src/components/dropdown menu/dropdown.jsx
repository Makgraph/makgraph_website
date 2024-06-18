import React, { useState } from "react";
import { useSelector } from "react-redux";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-[#cbd5e1] text-[#374151] font-semibold py-1 px-4 rounded inline-flex items-center"
      >
        <span className="text-primary">Hi, {user.name}</span>
        <svg
          className="fill-current h-4 w-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12.59l-6.3-6.3a1 1 0 1 0-1.4 1.42l7 7a1 1 0 0 0 1.4 0l7-7a1 1 0 0 0-1.4-1.42L10 12.59z" />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute mt-1 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-xs text-[#374151] hover:bg-primary hover:text-onPrimary"
            >
              Profil
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-xs text-[#374151] hover:bg-primary hover:text-onPrimary"
              onClick={onLogout}
            >
              Se Déconnecter
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

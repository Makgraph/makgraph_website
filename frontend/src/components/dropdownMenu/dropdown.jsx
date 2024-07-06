import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../../redux/auth/authSlice";
import { UserCircle } from "phosphor-react";
import { resetOrderList } from "../../redux/order/orderListSlice";
import { resetOrderDetail } from "../../redux/order/orderDetailsSlice";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    dispatch(resetOrderList());
    dispatch(resetOrderDetail());
    navigate("/Accueil/SignUp");
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="md:bg-[#d3e2f7] text-[#374151] font-semibold md:py-1 px-2 rounded-1 inline-flex items-center"
      >
        <div className="md:flex hidden">
          <h5 className="text-primary text-[14px] font-normal">
            Hi, {user.name}
          </h5>
        </div>
        <div className="md:hidden">
          <UserCircle size={32} />
        </div>

        <svg
          className="fill-current h-4 w-4 text-primary md:ml-2 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12.59l-6.3-6.3a1 1 0 1 0-1.4 1.42l7 7a1 1 0 0 0 1.4 0l7-7a1 1 0 0 0-1.4-1.42L10 12.59z" />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute mt-1 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <li>
            <Link
              to="/profile"
              className="block py-2 px-4 text-xs text-[#374151] hover:bg-primary hover:text-onPrimary"
            >
              Profil
            </Link>
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

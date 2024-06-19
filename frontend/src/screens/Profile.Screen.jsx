import React, { useState } from "react";
import Header from "../components/headerComponent/Header";
import { Link, NavLink, Outlet } from "react-router-dom";
import { UserCircle } from "phosphor-react";

const ProfileScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {};
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    // <div className="mt-20 md:mt-24 h-[100%]">
    //   <div className="p-screen grid md:grid-cols-[100px_repeat(2,_1fr)]">
    //     profil
    //   </div>
    // </div>
    <>
      <Header />
      <div className="mt-20 md:mt-24 h-[100%]">
        <div class="p-screen md:pt-8 flex">
          <div class="w-1/3 bg-secondary/20 py-4">
            <div className="flex flex-col justify-center items-center">
              <div className="flex">
                <div className="w-2/5 pr-24">
                  <UserCircle size={140} color="#216487" />
                </div>
                <div className="w-3/5 flex flex-col text-[12px] justify-center items-center">
                  <div>
                    <b>Admin Makgraph </b>
                  </div>
                  <div>rejoint 01 Janv. 2022</div>
                </div>
              </div>
              <div className="mt-4">
                <NavLink to="/profile/tabs">
                  <button className="bg-tertiary text-[12px] hover:bg-onSecondary focus:bg-onSecondary focus:text-onPrimary hover:text-white py-2 px-[94px]">
                    PARAMÈTRES DE PROFIL
                  </button>
                </NavLink>
                <NavLink to="/profile/orders">
                  <button className="bg-tertiary text-[12px] hover:bg-secondary focus:bg-secondary focus:text-onPrimary hover:text-white py-2 px-[94px]">
                    LISTE DES COMMANDES
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div class="w-2/3 bg-secondary/20 ml-3 p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;

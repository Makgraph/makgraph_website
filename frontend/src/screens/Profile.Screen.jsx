import React, { useEffect, useState } from "react";
import Header from "../components/headerComponent/Header";
import { Link, NavLink, Outlet } from "react-router-dom";
import { UserCircle } from "phosphor-react";
import ProfileTabs from "./../components/profileComponents/ProfileTabs";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../redux/auth/authSlice";
import moment from "moment";
import LoadingSpinner from "../components/loadingError/loading";

const ProfileScreen = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetails()); // Fetch user details on component mount
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="mt-20 md:mt-24 h-[100%]">
        <div className="p-screen md:pt-20 md:flex">
          <div className=" md:w-1/3 bg-secondary/20 py-4">
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-4">
                <div className="hidden md:flex w-2/5">
                  <UserCircle size={140} color="#216487" />
                </div>
                {/* MOBILE */}
                <div className="md:hidden w-2/5">
                  <UserCircle size={100} color="#216487" />
                </div>
                <div className="w-3/5 flex flex-col text-[12px] justify-center items-center">
                  <div>
                    <h5>
                      <b>{user.name}</b>
                    </h5>
                  </div>
                  <div>rejoint {moment(user.createdAt).format("LL")}</div>
                </div>
              </div>
              <div className="mt-4 w-[100%] flex flex-col justify-center items-center">
                <Link to="/tabs" className="w-[100%]">
                  <button className="bg-tertiary w-[100%] text-[12px]  hover:bg-onSecondary focus:bg-onSecondary focus:text-onPrimary hover:text-white py-2 px-[94px]">
                    PARAMÈTRES DE PROFIL
                  </button>
                </Link>
                <NavLink to="/orders" className="w-[100%]">
                  <button className="bg-tertiary w-[100%] text-[12px] hover:bg-secondary focus:bg-secondary focus:text-onPrimary hover:text-white py-2 px-[94px]">
                    LISTE DES COMMANDES
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 py-2 md:p-4  ">
            {isLoading && <LoadingSpinner />}
            {isError && <p>Error: {isError.message}</p>}
            {user && <ProfileTabs />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;

import React, { useEffect, useState } from "react";
import Header from "../components/headerComponent/Header";
import { Link, NavLink, Outlet } from "react-router-dom";
import { UserCircle } from "phosphor-react";
import ProfileTabs from "./../components/profileComponents/ProfileTabs";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../redux/auth/authSlice";
import moment from "moment";
import LoadingSpinner from "../components/loadingError/loading";

// import { selectUserDetails, selectLoading, selectError } from "./selectors";

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
        <div class="p-screen md:pt-8 flex">
          <div class="w-1/3 bg-secondary/20 py-4">
            <div className="flex flex-col justify-center items-center">
              <div className="flex">
                <div className="w-2/5 pr-24">
                  <UserCircle size={140} color="#216487" />
                </div>
                <div className="w-3/5 flex flex-col text-[12px] justify-center items-center">
                  <div>
                    <b>{user.name}</b>
                  </div>
                  <div>rejoint {moment(user.createdAt).format("LL")}</div>
                </div>
              </div>
              <div className="mt-4">
                <NavLink to="/tabs">
                  <button className="bg-tertiary text-[12px] hover:bg-onSecondary focus:bg-onSecondary focus:text-onPrimary hover:text-white py-2 px-[94px]">
                    PARAMÈTRES DE PROFIL
                  </button>
                </NavLink>
                <NavLink to="/orders">
                  <button className="bg-tertiary text-[12px] hover:bg-secondary focus:bg-secondary focus:text-onPrimary hover:text-white py-2 px-[94px]">
                    LISTE DES COMMANDES
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div class="w-2/3 ml-3 p-4">
            {/* {userDetails.isLoading ? (
              <p>isLoading...</p>
            ) : userDetails.error ? (
              <p>Error: {userDetails.error}</p>
            ) : (
              <ProfileTabs />
            )} */}
            {/* {isLoading && <p>Loading user details...</p>} */}
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

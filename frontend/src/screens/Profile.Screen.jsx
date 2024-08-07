import React, { useEffect, useState } from "react";
import Header from "../components/headerComponent/Header";
import { Link, NavLink, Outlet } from "react-router-dom";
import { UserCircle } from "phosphor-react";
import ProfileTabs from "../components/profileComponents/ProfileTabs";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../redux/auth/authSlice";
import moment from "moment";
import LoadingSpinner from "../components/loadingError/loading";
import { listUserOrders } from "../redux/order/orderListSlice";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  // const { orderList, loading, error } = useSelector((state) => state.orderList);
  // const loading = useSelector((state) => state.orderList.loading);
  // const error = useSelector((state) => state.orderList.error);
  const { user } = useSelector((state) => state.auth);
  // console.log(orderList);

  useEffect(() => {
    dispatch(listUserOrders()); // Fetch user details on component mount
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
                    <h5 className="font-serif">
                      <b>{user.name}</b>
                    </h5>
                  </div>
                  <div className="font-serif">
                    rejoint {moment(user.createdAt).format("LL")}
                  </div>
                </div>
              </div>
              <div className="mt-4 w-[100%] flex flex-col justify-center items-center">
                <div className="w-[100%]">
                  <NavLink
                    to="/profile/profileTabs"
                    className={({ isActive }) => {
                      return isActive ? "bg-onSecondary" : "";
                    }}
                  >
                    <button className="font-serif bg-tertiary w-[100%] text-[12px]  hover:bg-onSecondary focus:bg-onSecondary focus:text-onPrimary hover:text-white py-2 px-20">
                      PARAMÈTRES DE PROFIL
                    </button>
                  </NavLink>
                </div>
                <div className="w-[100%]">
                  <NavLink
                    to="/profile/orderTabs"
                    className={({ isActive }) => {
                      return isActive ? "bg-secondary" : "";
                    }}
                  >
                    <button className="font-serif bg-tertiary w-[100%] text-[12px] focus: hover:bg-secondary focus:bg-secondary focus:text-onPrimary hover:text-white py-2 px-20">
                      LISTE DES COMMANDES
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3  md:pl-4  ">
            {/* {isLoading && <LoadingSpinner />}
            {isError && <p>Error: {isError.message}</p>}
            {user && <ProfileTabs />} */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;

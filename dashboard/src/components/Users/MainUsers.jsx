import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import SecondHeaderUsers from "./SecondHeaderUsers";
import logoMakgraph from "/assets/logo_Makgraph.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/auth/usersSlice.js";
import LoadingSpinner from "./../Loadingerror/loading";
import Message from "./../Loadingerror/errorMessage";

const MainUsers = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <section className="sm:border-x-[1px] p-2 sm:p-4 border-b-secondary sm:flex sm:flex-col sm:py-4">
      <div className="flex justify-between my-4">
        <p className="text-lg sm:text-2xl font-serif font-semibold flex items-center">
          Custumers
        </p>
        <div>
          <button>
            <span className="font-serif font-semibold rounded-sm text-sm sm:text-base text-onPrimary bg-[#22c55e] p-1 sm:p-2 ">
              Create New
            </span>
          </button>
        </div>
      </div>

      <div>
        <SecondHeaderUsers />
      </div>

      {/* Card */}
      <div className="w-full pt-4 sm:gap-6 md:gap-6 sm:grid grid-cols-3 ">
        {loading ? (
          <div className="flex justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <Message>
            <div className="p-4">
              {/* <Message variant="bg-green-100 text-green-800">
      C'est un message de succès !
    </Message> */}

              <Message variant="bg-[#fee2e2] text-[#991b1b]">{error}</Message>

              {/* <Message>
      Ceci est un message par défaut avec Tailwind CSS.
    </Message> */}
            </div>
          </Message>
        ) : (
          <>
            {users.map((user) => (
              <div
                key={user._id}
                className="w-full mb-4 sm:w-full md:w-full border border-[#d4d6d8] flex flex-col items-center justify-center"
              >
                <div className="w-full h-20 bg-primary"></div>
                <div className="h-16 relative -top-[40px]">
                  <img
                    src={logoMakgraph}
                    alt="Logo"
                    className="sm:flex  h-24 w-30 md:22  md:w-28"
                  />
                </div>
                <p className="font-serif font-semibold ">{user.name}</p>
                {user.isAdmin === true ? (
                  <p className="text-sm font-serif">Admin</p>
                ) : (
                  <p className="text-sm font-serif">Custumers</p>
                )}

                <p className="font-mono text-[#3b82f6] underline pb-3">
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="flex justify-center sm:justify-end ">
        <Pagination />
      </div>
    </section>
  );
};

export default MainUsers;

import React, { useState } from "react";
import Pagination from "./Pagination";
import SecondHeaderUsers from "./SecondHeaderUsers";
import logoMakgraph from "/assets/logo_Makgraph.png";

const MainUsers = () => {
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
      <div className="w-full pt-4 sm:gap-6 md:gap-6 sm:flex">
        <div className="w-full mb-4 sm:w-1/3 md:w-1/4 border border-[#d4d6d8] flex flex-col items-center justify-center">
          <div className="w-full h-20 bg-primary"></div>
          <div className="h-16 relative -top-[40px]">
            <img
              src={logoMakgraph}
              alt="Logo"
              className="sm:flex  h-24 w-30 md:22  md:w-28"
            />
          </div>

          <p className="font-serif font-semibold ">Admin</p>
          <p className="text-sm font-serif">Admin</p>
          <p className="font-mono text-[#3b82f6] underline pb-3">
            admin123@gmail.com
          </p>
        </div>
        <div className="w-full mb-4 sm:w-1/3 md:w-1/4 border border-[#d4d6d8] flex flex-col items-center justify-center">
          <div className="w-full h-20 bg-primary"></div>
          <div className="h-16 relative -top-[40px]">
            <img
              src={logoMakgraph}
              alt="Logo"
              className="sm:flex  h-24 w-30 md:22  md:w-28"
            />
          </div>

          <p className="font-serif font-semibold ">User</p>
          <p className="text-sm font-serif">Custumer</p>
          <p className="font-mono text-[#3b82f6] underline pb-3">
            user123@gmail.com
          </p>
        </div>
      </div>
      <div className="flex justify-center sm:justify-end ">
        <Pagination />
      </div>
    </section>
  );
};

export default MainUsers;

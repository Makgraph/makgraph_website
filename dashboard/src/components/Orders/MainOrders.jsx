import React from "react";
import Orders from "./Orders";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import OrdersTable2 from "./OrdersTable2";

const MainOrders = () => {
  return (
    <section className="p-2 sm:p-4 sm:border-l">
      <div>
        <p className="text-lg sm:text-2xl font-serif font-semibold">Orders</p>
      </div>

      <div className="border border-[#d4d6d8] sm:px-4">
        <div className="">
          <div className="bg-white  py-2 sm:py-2 px-4 sm:px-6 sm:gap-20 sm:flex sm:justify-between sm:items-center relative">
            {/* Search Bar */}
            <div className="relative sm:ml-auto sm:mr-4 flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IonIcon icon={searchOutline} className="text-[#4b5563]" />
              </div>
              <input
                type="text"
                placeholder="Rechercher..."
                className="bg-[#e5e7eb] w-full md:w-[80%] text-sm sm:text-base text-[#1f2937] rounded-sm py-2 pl-10 pr-4 outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50 "
              />
            </div>
            <div className="flex justify-between sm:gap-4">
              <div className="flex sm:gap-10 border border-[#d4d6d8] my-2 px-2 items-center">
                <select name="" id="">
                  <option value="">Status</option>
                  <option value="">Active</option>
                  <option value="">Disabled</option>
                  <option value="">Show all</option>
                </select>
              </div>

              <div className="flex gap-10 border border-[#d4d6d8] my-2 p-2 items-center">
                <select name="" id="">
                  <option value="">Show 20</option>
                  <option value="">Show 30</option>
                  <option value="">Show 40</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div>
            <OrdersTable2 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainOrders;

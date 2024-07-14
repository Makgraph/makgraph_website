import React from "react";
import TopTotal from "./TopTotal";
import AppStat from "./SalesStatistics";
import AppStatProducts from "./ProductStatistics";
import OrdersTable from "./OrdersTable";

const Main = () => {
  return (
    <section className="sm:border-x-[1px] p-2 sm:p-4 border-b-secondary sm:flex sm:flex-col sm:py-4">
      <div className="">
        <p className="text-lg sm:text-2xl font-serif font-semibold">
          Dashboard
        </p>
      </div>

      <div>
        <TopTotal />
      </div>
      <div className="w-full justify-between sm:gap-6 md:gap-8 sm:flex">
        <AppStat />
        <AppStatProducts />
      </div>
      <div className="w-full ">
        <OrdersTable />
      </div>
    </section>
  );
};

export default Main;

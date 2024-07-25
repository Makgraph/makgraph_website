import React from "react";
import { basket, briefcase, logoUsd } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const TopTotal = (props) => {
  const { orders, products } = props;
  let totalSale = 0;
  if (orders) {
    orders.map((order) =>
      order.isPaid === true ? (totalSale = totalSale + order.totalPrice) : null
    );
  }
  console.log(products);
  return (
    <div className="py-2 sm:py-4 sm:flex justify-between  sm:gap-4 md:gap-14">
      {/* CLIENT */}
      <div className="sm:w-1/3 flex shadow-lg  border-t border-x border-[#d4d6d8] px-4 sm:px-0 my-4 sm:my-0 py-4">
        <div className="w-1/3 -z-[1]">
          <div className=" flex bg-[#dbeafe] sm:ml-2 md:ml-4 w-10 h-10 md:w-14 md:h-14 justify-center items-center rounded-full">
            {/*<mder simd={30} weight="fill" color="#216487" /> */}
            <IonIcon
              icon={logoUsd}
              className=" md:h-5 md:w-5  text-[#2563eb]"
            />
          </div>
        </div>
        <div className="w-2/3 md:flex flex-col">
          <div className="sm:pl-2 md:text-base text-sm font-serif">
            <b>Total Sales</b>
          </div>
          <p className="sm:pl-2 sm:text-sm text-xs font-serif">
            $ {totalSale.toFixed(0)}
          </p>
        </div>
      </div>
      {/* INFO SUR LES COMMANDES */}
      <div className="sm:w-1/3 flex shadow-lg  border-t border-x border-[#d4d6d8] px-4 sm:px-0 my-4 sm:my-0 py-4">
        <div className="w-1/3 -z-[1]">
          <div className="flex bg-[#fef9c3] sm:ml-2 md:ml-4 w-10 h-10 md:w-14 md:h-14 justify-center items-center rounded-full">
            <IonIcon
              icon={briefcase}
              className="md:h-5 md:w-5  text-[#facc15]"
            />
          </div>
        </div>
        <div className="w-2/3 md:mr-4 flex flex-col">
          <div className=" sm:pl-2 md:text-base text-sm font-serif">
            <b>Total Orders</b>
          </div>
          <div className="sm:pl-2 sm:text-sm text-xs font-serif">
            {orders ? <>{orders.length}</> : 0}
          </div>
        </div>
      </div>
      {/* LIVRAISON */}
      <div className="sm:w-1/3 flex shadow-lg  border-t border-x border-[#d4d6d8] px-4 sm:px-0 my-4 sm:my-0 py-4">
        <div className="w-1/3 -z-[1]">
          <div className="flex bg-[#dcfce7] sm:ml-2 md:ml-4 w-10 h-10 md:w-14 md:h-14 justify-center items-center rounded-full">
            <IonIcon icon={basket} className="md:h-5 md:w-5  text-[#22c55e]" />
          </div>
        </div>
        <div className="w-2/3 md:mr-4 flex flex-col">
          <div className="sm:pl-2 md:text-base text-sm font-serif">
            <strong>Total Products</strong>
          </div>
          <div className="sm:pl-2 sm:text-sm text-xs font-serif">
            {products ? <>{products.length}</> : 0}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTotal;

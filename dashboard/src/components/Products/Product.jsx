import React from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  searchOutline,
  personCircleOutline,
  settingsOutline,
  trash,
  create,
} from "ionicons/icons";

const Product = (props) => {
  const { product } = props;
  return (
    // <div className="gap-10 md:gap-28 items-center justify-center grid md:grid-cols-4 grid-cols-2">

    <div className="border border-[#d4d6d8] ">
      <div
        // className="rounded-lg gap-2 w-auto h-auto flex flex-col transition hover:transition-[0.3s] hover:ease-in cursor-pointer"
        className="p-6"
        key={product._id}
      >
        <Link to="#">
          <img
            src={product.image}
            className="w-full rounded-sm"
            alt={product.name}
          />
        </Link>
      </div>
      <div className="pl-3">
        <div className="text-start w-[100%]">
          <p className="font-medium font-serif text-xs md:text-sm">
            {product.name}
          </p>
          <p className="font-semibold font-serif  text-sm md:text-base">
            <b>$ {product.price}</b>
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full sm:py-2 px-1">
        <button className="w-full border border-[#22c55e]">
          <IonIcon
            icon={create}
            className="text-[#22c55e] h-3 sm:h-4 w-3 sm:w-4"
          />
        </button>
        <button className="w-full border border-danger">
          <IonIcon icon={trash} className="text-danger h-3 sm:h-4 w-3 sm:w-4" />
        </button>
      </div>
    </div>
  );
};

export default Product;

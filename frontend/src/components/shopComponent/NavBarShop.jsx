import React from "react";
import { Link } from "react-router-dom";

const NavBarShop = (props) => {
  return (
    <div>
      <div className="w-[100%]  flex justify-center items-center py-2 md:py-5">
        <div className="flex justify-center">
          <Link to="/">
            <h2 className="text-[20px]  font-serif font-medium md:text-[28px]">
              Makgraph Shop
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBarShop;

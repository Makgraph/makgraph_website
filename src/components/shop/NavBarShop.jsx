import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const NavBarShop = () => {
  return (
    <div className="w-[100%] h-20 flex justify-center items-center">
      <div className="flex gap-4 items-center">
        <Link to="/">
          <h2 className="text-[20px] md:text-[28px]">Makgraph Shop</h2>
        </Link>
        <Link to="/cart">
          <div className="relative">
            <div className="bg-error absolute h-4 w-4 rounded-[50%] -right-1 -top-1">
              <h6 className="text-white  flex justify-center items-center">
                1
              </h6>
            </div>
            <ShoppingCart size={32} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBarShop;
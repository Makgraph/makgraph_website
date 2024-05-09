import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const NavBarShop = () => {
  return (
    <div className="w-[100%] h-20 flex justify-center items-center ">
      <div className="flex gap-4 items-center">
        <Link to="/">
          <h1>Makgraph Shop</h1>
        </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default NavBarShop;

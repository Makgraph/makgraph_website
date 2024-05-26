import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../../context/ShopContext";
import Header from "../Header";
import Footer from "../Footer";

const NavBarShop = (props) => {
  const { getCartAmount } = useContext(ShopContext);

  const cartAmount = getCartAmount();

  return (
    <div>
      <div className="w-[100%]  flex justify-center items-center py-3 md:py-8">
        <div className="flex justify-center">
          <Link to="/">
            <h2 className="text-[20px] md:text-[28px]">Makgraph Shop</h2>
          </Link>
          {/* <Link to="/shop/3/cart">
            <div className="relative">
              {cartAmount > 0 ? (
                <div className="bg-error absolute h-4 w-4 md:h-5 md:w-5 rounded-[50%] -right-1 -top-[2px] md:-right-2 md:-top-1">
                  <span className="text-white text-[10px] md:text-[13px] flex justify-center items-center">
                    {cartAmount}
                  </span>
                </div>
              ) : (
                ""
              )}
              <ShoppingCart size={32} />
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default NavBarShop;

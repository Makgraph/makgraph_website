import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../../context/ShopContext";
import { PRODUCTS } from "../../product.js";
import Product from "./Product";

const NavBarShop = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, getDefaultCart, getCartAmount, getTotalCarAmount } =
    useContext(ShopContext);

  const cartItemsAmount = cartItems[id];
  const totalAmount = getTotalCarAmount();
  const cartAmount = getCartAmount();

  return (
    <div className="w-[100%] h-20 flex justify-center items-center">
      <div className="flex gap-4 items-center">
        <Link to="/">
          <h2 className="text-[20px] md:text-[28px]">Makgraph Shop</h2>
        </Link>
        <Link to="/cart">
          <div className="relative">
            {/* {cartItems.length === 0 ? ( */}
            {cartAmount > 0 ? (
              <div className="bg-error absolute h-5 w-5 rounded-[50%] -right-2 -top-1">
                <span className="text-white text-[13px] flex justify-center items-center">
                  {cartAmount}
                  {/* {cartItems.length} */}
                  {/*  {cartItemsAmount > 0 && <>{cartItemsAmount}</>} */}
                  {/* {cartItems.lenght === 0 ? "" : cartItems.lenght} */}
                </span>
              </div>
            ) : (
              ""
            )}
            <ShoppingCart size={32} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBarShop;

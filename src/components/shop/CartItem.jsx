import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="w-[550px] h-[150px] flex items-center shadow-[0_3px_15px_rgba(0,0,0,0.3)] rounded-[25px] p-[20px] m-[30px]">
      <img src={productImage} className="w-[105px] rounded-[20px]" />
      <div className="w-[100%] ">
        <h5 className="m-4">
          <b>{productName}</b>
        </h5>
        <h5 className="m-4">$ {price}</h5>
        <div className="m-4 ">
          <button
            onClick={() => removeFromCart(id)}
            className="w-5 bg-onPrimary justify-center items-center border"
          >
            -
          </button>
          <input
            className="w-10 text-center border font-bold"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button
            onClick={() => addToCart(id)}
            className="w-5 bg-onPrimary justify-center items-center border"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

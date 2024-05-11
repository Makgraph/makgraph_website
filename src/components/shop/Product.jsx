import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemsAmount = cartItems[id];

  return (
    <div className="rounded-lg w-[100%] p-[50px] h-[250px]  md:my-[100px] my-[40px]  flex flex-col justify-center items-center transition hover:transition-[0.3s] hover:ease-in cursor-pointer ">
      <img src={productImage} className="w-[400px] rounded-lg " />
      <div className="text-center w-[100%]  ">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price}</p>
        <button
          className="bg-[#fffff] border-2 border-primary hover:bg-primary cursor-pointer min-w-[80px] px-2 py-1 rounded-[50px]"
          onClick={() => addToCart(id)}
        >
          <h6>
            Ajouter au panier {cartItemsAmount > 0 && <>({cartItemsAmount})</>}{" "}
          </h6>
        </button>
      </div>
    </div>
  );
};

export default Product;

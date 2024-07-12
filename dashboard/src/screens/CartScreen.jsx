import React, { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { close } from "ionicons/icons";
import { arrowBack } from "ionicons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Star, StarHalf, UserCircle } from "phosphor-react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import Header from "../components/headerComponent/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useSelector, useDispatch } from "react-redux";
// import { isLoggedIn } from "../redux/auth/authSlice.js";
import {
  removeFromCart,
  selectCartItems,
  updateCartQuantity,
} from "../redux/Cart/cartSlice.js";

import {
  ArrowArcLeft,
  ArrowCircleDownLeft,
  ArrowCircleLeft,
} from "phosphor-react";
// import { selectIsLoggedIn } from "../redux/auth/authSlice.js";

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const { productId } = useParams();
  const { isLoggedIn } = useSelector((state) => state.auth);

  // Calculate total quantity and total price
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ productId }));
  };

  const handleQuantityChange = (productId, e) => {
    const newQuantity = parseInt(e.target.value, 10);
    dispatch(updateCartQuantity({ productId, quantity: newQuantity }));
  };

  const handleContinueShopping = () => {
    navigate("/shop");
  };

  const handleCheckout = () => {
    if (isLoggedIn) {
      navigate("/shipping");
    } else {
      navigate("/Accueil/login");
    }
  };

  return (
    <>
      <Header />
      <div className="pt-20 md:pt-28  mx-7 md:mx-6 lg:mx-[156px] xl:px-[200px]  border-primary/20 flex flex-col justify-center items-center">
        <div className="absolute top-[88px] md:top-[119px] left-8 md:left-44  cursor-pointer">
          <Link to="/shop">
            <IonIcon
              icon={arrowBack}
              className="text-onPrimary text-sm md:text-2xl"
            />
          </Link>
        </div>
        <div className="w-[100%] flex flex-col items-center justify-center"></div>
        {cartItems.length === 0 ? (
          <div className="m-20">
            <h1 className="text-[18px] font-serif md:text-[32px]">
              Votre Panier est vide !
            </h1>
          </div>
        ) : (
          <>
            <div className="bg-primary/70 py-1 mt-2 md:mt-0 w-full">
              <div className="font-normal font-serif text-onPrimary flex justify-center text-[10px] md:text-[20px]">
                Total produit dans le panier ({cartItems.length})
              </div>
            </div>
            <ul className="w-[100%]">
              {cartItems.map((item) => (
                <div
                  className=" w-[100%]  h-[100%] md:h-[150px] shadow-[0_3px_15px_rgba(0,0,0,0.3)] rounded-[10px] px-2 md:px-6 py-2 my-4"
                  key={item.product._id}
                >
                  <div className="absolute left-4 md:left-36">
                    <button
                      onClick={() => handleRemoveFromCart(item.product._id)}
                      className="absolute -top-4 left-0 bg-error h-4 w-4 md:h-5 md:w-5 rounded-[50%]  text-white"
                    >
                      <span className=" flex justify-center items-center">
                        <IonIcon icon={close} className="text-sm md:text-lg" />
                      </span>
                    </button>
                  </div>
                  <li
                    className="h-[100%] w-[100%] flex justify-between items-center"
                    key={item.product._id}
                  >
                    <div>
                      <img
                        src={item.product.image}
                        className=" w-16 md:w-[105px] rounded-[8px] md:rounded-[20px]"
                      />
                    </div>
                    <Link to={`/products/${productId}`}>
                      <h5 className="text-xs md:text-base font-serif">
                        <b>{item.product.name}</b>
                      </h5>
                    </Link>

                    <div className="">
                      <div>
                        <h6 className="text-sm md:text-base font-serif">
                          Quantité
                        </h6>
                      </div>
                      <select
                        className="bg-[#cbd5e1] w-12 md:w-28 h-8"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.product._id, e)
                        }
                      >
                        {[...Array(item.product.countInStock).keys()].map(
                          (x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    <div className="">
                      <div>
                        <h6 className="font-serif text-xs md:text-sm">PRIX</h6>
                      </div>
                      <div className="font-serif font-semibold text-base sm:text-lg md:text-xl">
                        $ {item.product.price}
                      </div>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </>
        )}

        {cartItems.length === 0 ? (
          ""
        ) : (
          <>
            <div className="p-screen flex justify-end w-full ml-10 md:ml-72 md:mx-6">
              <div className="flex items-center">
                <h6 className="font-serif text-xs md:text-sm">TOTAL :</h6>
              </div>
              <div className="font-serif font-semibold text-base pl-2 md:pl-3 sm:text-lg md:text-xl">
                $ {totalPrice.toFixed(2)}
              </div>
              {/* <div className="font-serif text-sm md:text-xl">
                TOTAL : <b>${totalPrice.toFixed(2)} </b>
              </div> */}
            </div>
            <div className="md:p-screen flex w-full justify-between my-4 border-t-[1px] border-primary hover:text-primary">
              <div className="my-2 bg-secondary rounded-md flex justify-center focus:bg-[#22c55e]  cursor-pointertransition hover:bg-onPrimary  text-white hover:text-primary">
                <button
                  className="px-1 sm:px-16 py-2 text-sm md:text-base font-serif transition focus:bg-[#22c55e] focus:rounded-md focus:text-onPrimary"
                  onClick={handleContinueShopping}
                >
                  Continuer vos achats
                </button>
              </div>

              <div className="my-2 bg-primary rounded-md flex justify-center focus:bg-[#22c55e]  cursor-pointertransition hover:bg-onPrimary  text-white hover:text-primary">
                <button
                  type="submit"
                  className="px-1 sm:px-16 py-2 text-sm md:text-base font-serif transition focus:bg-[#22c55e] focus:rounded-md focus:text-onPrimary"
                  onClick={handleCheckout}
                >
                  Passer à la caisse
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartScreen;

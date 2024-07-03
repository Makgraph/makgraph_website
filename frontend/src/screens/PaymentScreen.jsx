import React, { useState } from "react";
import Header from "../components/headerComponent/Header";
import { updatePaymentMethod } from "../redux/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PaymentScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const paymentMethod = useSelector((state) => state.cart.paymentMethod);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePaymentMethod(paymentMethod));
    navigate("/placeOrder");
  };

  return (
    <div>
      <Header />
      <div className="p-screen md:mt-20 pt-24">
        <div className="px-auto  md:px-[250px] pb-12 ">
          <div className="rounded-lg border border-primary p-8 shadow-xl ">
            <div className="flex flex-col items-center justify-center pb-4">
              <h5 className="text-onSurface md:flex hidden">
                SÉLECTIONNEZ LE MODE DE PAIEMENT
              </h5>
              {/* MOBILE SCREEN */}
              <h6 className="text-[11px] text-onSurface md:hidden">
                SÉLECTIONNEZ LE MODE DE PAIEMENT
              </h6>
            </div>

            <form>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" for="option1">
                  Choisissez une option:
                </label>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-blue-500"
                      name="Paypal"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={() => dispatch(updatePaymentMethod("paypal"))}
                    />
                    <span className="ml-2">PayPal</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio text-blue-500"
                      name="options"
                      value="option2"
                      id="option2"
                    />
                    <span className="ml-2">Carte de Crédit</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-center">
                {/* <button
                  type="submit"
                  class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Submit
                </button> */}
                <span className="my-2 bg-primary rounded-md flex justify-center focus:bg-[#22c55e]  cursor-pointertransition hover:bg-onPrimary  text-white hover:text-primary">
                  <button
                    type="submit"
                    className="px-16 py-2 transition focus:bg-[#22c55e] focus:rounded-md focus:text-onPrimary"
                    onClick={submitHandler}
                  >
                    {/* Continue */}
                    Enregistrer le mode de paiement
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentScreen;

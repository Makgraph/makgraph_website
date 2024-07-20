import React, { useEffect } from "react";
import Orders from "./Orders";
import { IonIcon } from "@ionic/react";
import { print, calendar, location, person, car } from "ionicons/icons";
import OrdersTable2 from "./OrdersTable2";
import { Link } from "react-router-dom";
import OrdersDetailTable from "./OrdersDetailTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderDetails } from "../../redux/orders/orderDetailsSlice";
import LoadingSpinner from "../Loadingerror/loading";
import Message from "../Loadingerror/errorMessage";
import moment from "moment";

const MainOrderDetail = (props) => {
  const { orderId } = props;
  const dispatch = useDispatch();
  const { orderDetails, loading, error } = useSelector(
    (state) => state.orderDetails
  );

  useEffect(() => {
    dispatch(fetchOrderDetails(orderId));
  }, [dispatch, orderId]);

  return (
    <section className="p-2 sm:p-4 sm:border-l">
      <div className="mb-6">
        <Link to="/orders">
          <button>
            <span className="font-serif font-semibold rounded-sm text-sm sm:text-base text-onPrimary bg-onSurface p-1 sm:p-2 ">
              Back To Orders
            </span>
          </button>
        </Link>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <Message>
          <div className=" m-4 p-4">
            <Message variant="bg-[#fee2e2] text-[#991b1b]">{error}</Message>
          </div>
        </Message>
      ) : (
        <div className="border border-[#d4d6d8] ">
          <div className="">
            <div className="bg-[#22c55e] py-2 sm:py-2 px-4 sm:px-6 sm:gap-20 sm:flex sm:justify-between sm:items-center relative">
              {/* Date & Order ID */}
              <div className="flex flex-col">
                <div className="flex items-center">
                  <IonIcon
                    icon={calendar}
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary"
                  />
                  <p className="text-sm sm:text-base font-serif font-semibold text-white">
                    {moment(orderDetails.createAt).format("llll")}
                  </p>
                </div>

                <p className="text-xs sm:text-xs font-sans text-white">
                  Order ID: {orderDetails._id}
                </p>
              </div>
              <div className="flex justify-between my-1 sm:my-2 ">
                <div className="flex sm:gap-10 border border-[#d4d6d8] items-center">
                  <select className="px-2 py-1 sm:py-2">
                    <option>Change Status</option>
                    <option>Awaiting payment</option>
                    <option>Confirmed</option>
                    <option>Delivered</option>
                  </select>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-primary px-2 h-full flex justify-center items-center ">
                    <IonIcon
                      icon={print}
                      className="h-4 w-4 sm:h-5 sm:w-5 text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Order info */}
          <div className=" pt-4 md:pt-6 md:flex">
            {/* CLIENT */}
            <div className="md:w-1/3 flex py-4">
              <div className="w-1/3">
                <div className="flex bg-onSecondary/40 ml-4 w-10 sm:w-14 h-10 sm:h-14 justify-center items-center rounded-full">
                  <IonIcon
                    icon={person}
                    className="h-4 w-4 sm:h-5 sm:w-5 text-[#216487]"
                  />
                </div>
              </div>
              <div className="w-2/3 flex flex-col">
                <div className="md:text-base text-sm font-serif">
                  <b>Client</b>
                </div>
                <p className="md:text-sm text-xs font-serif">
                  {orderDetails.user.name}
                </p>
                <p className="md:text-sm text-xs font-serif">
                  {
                    <a href={`mailto:${orderDetails.user.email}`}>
                      {orderDetails.user.email}
                    </a>
                  }
                </p>
              </div>
            </div>
            {/* INFO SUR LES COMMANDES */}
            <div className="md:w-1/3 flex py-4">
              <div className="w-1/3">
                <div className="flex bg-onSecondary/40 ml-4 w-10 sm:w-14 h-10 sm:h-14 justify-center items-center rounded-full">
                  <IonIcon
                    icon={car}
                    className="h-4 w-4 sm:h-5 sm:w-5 text-[#216487] "
                  />
                </div>
              </div>
              <div className="w-2/3 mr-4 flex flex-col">
                <div className="md:text-base text-sm font-serif">
                  <b>Informations sur la commande</b>
                </div>
                <div className="md:text-sm text-xs font-serif">
                  Shipping: {orderDetails.shippingAddress.country}
                </div>
                <div className="md:text-sm text-xs font-serif">
                  Mode de paiement: {orderDetails.paymentMethod}
                </div>
              </div>
            </div>
            {/* LIVRAISON */}
            <div className="md:w-1/3 flex py-4">
              <div className="w-1/3">
                <div className="flex bg-onSecondary/40 ml-4 w-10 sm:w-14 h-10 sm:h-14 justify-center items-center rounded-full">
                  <IonIcon
                    icon={location}
                    className="h-4 w-4 sm:h-5 sm:w-5 text-[#216487]"
                  />
                </div>
              </div>
              <div className="w-2/3 mr-4 flex flex-col">
                <div className="md:text-base text-sm font-serif">
                  <strong>Livrer à</strong>
                </div>
                <div className="md:text-sm text-xs font-serif">
                  Adresse: {orderDetails.shippingAddress.city}
                  <br />
                  {orderDetails.shippingAddress.address}
                  <br />
                  {orderDetails.shippingAddress.postalCode}
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto sm:px-4">
            <div>
              <OrdersDetailTable
                orderDetails={orderDetails}
                loading={loading}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainOrderDetail;

import React, { useEffect, useRef } from "react";
import LoadingSpinner from "../loadingError/loading";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  listUserOrders,
  resetOrderList,
} from "../../redux/order/orderListSlice";
import moment from "moment";

const OrderTabs = () => {
  const dispatch = useDispatch();
  const isInitialMount = useRef(true);
  // const { orderList, loading, error } = useSelector((state) => state.orderList);
  const orderList = useSelector((state) => state.orderList.orderList);
  const loading = useSelector((state) => state.orderList.loading);
  const error = useSelector((state) => state.orderList.error);
  const logTimeout = useRef(null); // Référence pour gérer le timeout du log

  useEffect(() => {
    if (!isInitialMount.current) {
      dispatch(listUserOrders());
    } else {
      isInitialMount.current = false;
    }

    return () => {
      dispatch(resetOrderList());
    };
  }, [dispatch]);

  useEffect(() => {
    if (!isInitialMount.current) {
      if (logTimeout.current) {
        clearTimeout(logTimeout.current); // Réinitialiser le timeout s'il y en a déjà un
      }
      // logTimeout.current = setTimeout(() => {
      //   console.log(orderList); // Log après un délai
      // }, 300); // Délai de 300 ms (ajustez selon vos besoins)
    }
  }, [orderList, dispatch]);

  return (
    <div className="overflow-x-auto">
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          {orderList.length === 0 && !loading ? ( // Vérifiez également !loading pour éviter le rendu vide initial
            <div>
              No Orders
              <Link to="/">START SHOPPING</Link>
            </div>
          ) : (
            <table className="min-w-full bg-white border-collapse border border-[#e5e7eb]">
              <thead>
                <tr className="bg-onSecondary/50">
                  <th className="border border-secondary/40 px-4 py-2">ID</th>
                  <th className="border border-primary/40 px-4 py-2">STATUS</th>
                  <th className="border border-primary/40 px-4 py-2">DATE</th>
                  <th className="border border-primary/40 px-4 py-2">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((order) => (
                  <tr
                    key={order._id}
                    className={`${
                      order.isPaid
                        ? "bg-onPrimary font-serif"
                        : "bg-primary/25 font-sans"
                    }`}
                  >
                    <td className="border border-primary/40 px-4 py-2">
                      {order._id}
                    </td>
                    <td className="border border-primary/40 px-4 py-2">
                      {order.isPaid ? <>Payé</> : <>Impayé</>}
                    </td>
                    <td className="border border-primary/40 px-4 py-2">
                      {order.isPaid
                        ? moment(order.paidAt).calendar()
                        : moment(order.createdAt).calendar()}
                    </td>
                    <td className="border border-primary/40 px-4 py-2">
                      {order.totalPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default OrderTabs;

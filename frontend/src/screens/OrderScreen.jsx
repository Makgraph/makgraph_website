// import React, { useEffect, useRef, useState } from "react";
// import Header from "../components/headerComponent/Header";
// import { User, Truck, MapPin } from "phosphor-react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   clearCart,
//   removeFromCart,
//   selectCartItems,
// } from "../redux/Cart/cartSlice";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { fetchOrderDetails } from "../redux/order/orderDetailsSlice";
// import LoadingSpinner from "../components/loadingError/loading.jsx";
// import Message from "../components/loadingError/errorMessage.jsx";
// import axios from "axios";
// import { payOrder, resetOrderPayState } from "../redux/order/orderPaySlice.js";
// import { PayPalButton } from "react-paypal-button-v2";
// import moment from "moment";

// const orderScreen = () => {
//   const [sdkReady, setSdkReady] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isInitialMount = useRef(true); // Référence useRef pour suivre le premier montage
//   const { productId, id } = useParams();
//   const orders = useSelector((state) => state.orders.orders);
//   const orderDetails = useSelector((state) => state.orderDetails.orderDetails);
//   const loading = useSelector((state) => state.orders.loading);
//   const error = useSelector((state) => state.orders.error);
//   const orderPay = useSelector((state) => state.orderPay);
//   const { loading: loadingPay } = useSelector((state) => state.orderPay);
//   const { success: successPay } = useSelector((state) => state.orderPay);
//   const { orderItems, shippingAddress, order } = useSelector(
//     (state) => state.orderDetails
//   );

//   console.log(order);
//   console.log(orderDetails);
//   const addDecimals = (num) => {
//     return (Math.round(num * 100) / 100).toFixed(2);
//   };
//   console.log(orderDetails);
//   const itemsPrice = addDecimals(
//     order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
//   );

//   useEffect(() => {
//     if (isInitialMount.current) {
//       // Ne rien faire sur le premier rendu
//       isInitialMount.current = false;
//     } else {
//       const addPayPalScript = async () => {
//         try {
//           const { data: clientId } = await axios.get("/api/config/paypal");
//           const script = document.createElement("script");
//           script.type = "text/javascript";
//           script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
//           script.async = true;
//           script.onload = () => {
//             setSdkReady(true);
//           };
//           document.body.appendChild(script);
//         } catch (error) {
//           console.error("Erreur lors du chargement du script PayPal :", error);
//           // Gérer l'erreur de manière appropriée (afficher un message à l'utilisateur, etc.)
//         }
//       };

//       if (!orders || successPay) {
//         dispatch(resetOrderPayState());
//         dispatch(fetchOrderDetails(id));
//       } else if (!orders.isPaid) {
//         if (!window.paypal) {
//           addPayPalScript();
//         } else {
//           setSdkReady(true);
//         }
//       }
//     }

//     // Clean up effect
//     return () => {
//       dispatch(clearCart());
//     };
//   }, [dispatch, id, successPay, orders]);

//   console.log(id);
//   const successPaymentHandler = (paymentResult) => {
//     console.log(paymentResult);
//     // dispatch(fetchOrderDetails({ orderId: id }));
//     dispatch(payOrder({ orderId: id, paymentResult }));
//   };

//   console.log(successPay);

//   return (
//     <div>
//       <Header />
//       <div className="mt-20 md:mt-24">
//         {loading ? (
//           <LoadingSpinner />
//         ) : error ? (
//           <Message variant="bg-danger dark:bg-danger-dark text-white">
//             {error}
//           </Message>
//         ) : (
//           <>
//             <div className="p-screen pt-4 md:pt-6 md:flex">
//               {/* CLIENT */}
//               <div className="md:w-1/3 flex bg-secondary/20 py-4">
//                 <div className="w-1/3">
//                   <div className="hidden md:flex bg-onSecondary/40 md:ml-4 w-14 h-14 justify-center items-center rounded-full">
//                     <User size={30} weight="fill" color="#216487" />
//                   </div>
//                   <div className="md:hidden flex bg-onSecondary/40 md:ml-4 ml-6 w-10 h-10 justify-center items-center rounded-full">
//                     <User size={22} weight="fill" color="#216487" />
//                   </div>
//                 </div>
//                 <div className="w-2/3 flex flex-col">
//                   <div className="md:text-base text-sm font-serif">
//                     <b>Client</b>
//                   </div>
//                   <p className="md:text-sm text-xs font-serif">
//                     {order.user.name}
//                   </p>
//                   <p className="md:text-sm text-xs font-serif">
//                     <a href={`mailto:${order.user.email}`}>
//                       {order.user.email}
//                     </a>
//                   </p>
//                 </div>
//               </div>
//               {/* INFO SUR LES COMMANDES */}
//               <div className="md:w-1/3 flex bg-secondary/20 py-4">
//                 <div className="w-1/3">
//                   <div className="hidden md:flex bg-onSecondary/40 md:ml-4 w-14 h-14 justify-center items-center rounded-full">
//                     <Truck size={30} weight="fill" color="#216487" />
//                   </div>
//                   <div className="md:hidden flex bg-onSecondary/40 md:ml-4 ml-6 w-10 h-10 justify-center items-center rounded-full">
//                     <Truck size={22} weight="fill" color="#216487" />
//                   </div>
//                 </div>
//                 <div className="w-2/3 mr-4 flex flex-col">
//                   <div className="md:text-base text-sm font-serif">
//                     <b>Informations sur la commande</b>
//                   </div>
//                   <div className="md:text-sm text-xs font-serif">
//                     Shipping: {order.shippingAddress.country}
//                   </div>
//                   <div className="md:text-sm text-xs font-serif">
//                     Mode de paiement: {order.paymentMethod}
//                   </div>

//                   {order.isPaid ? (
//                     <div className="bg-[#2563eb] mt-1 p-2">
//                       <p className="text-onPrimary md:text-sm text-xs flex justify-center">
//                         Payé {moment(order.paidAt).calendar()}
//                       </p>
//                     </div>
//                   ) : (
//                     <div className="bg-error my-1 p-2">
//                       <p className="text-onPrimary md:text-sm font-serif text-xs flex justify-center">
//                         Impayé
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//               {/* LIVRAISON */}
//               <div className="md:w-1/3 flex bg-secondary/20 py-4">
//                 <div className="w-1/3">
//                   <div className="hidden md:flex bg-onSecondary/40 md:ml-4 w-14 h-14 justify-center items-center rounded-full">
//                     <MapPin size={30} weight="fill" color="#216487" />
//                   </div>
//                   <div className="md:hidden flex bg-onSecondary/40 md:ml-4 ml-6 w-10 h-10 justify-center items-center rounded-full">
//                     <MapPin size={22} weight="fill" color="#216487" />
//                   </div>
//                 </div>
//                 <div className="w-2/3 mr-4 flex flex-col">
//                   <div className="md:text-base text-sm font-serif">
//                     <strong>Livrer à</strong>
//                   </div>
//                   <div className="md:text-sm text-xs font-serif">
//                     Adresse: {order.shippingAddress.city},{" "}
//                     {order.shippingAddress.address},
//                     {order.shippingAddress.postalCode}
//                   </div>
//                   {order.isDelivered ? (
//                     <div className="bg-[#2563eb] mt-1 p-2">
//                       <p className="text-onPrimary md:text-sm text-xs font-serif flex justify-center">
//                         Délivré le {moment(order.deliveredAt).calendar()}
//                       </p>
//                     </div>
//                   ) : (
//                     <div className="bg-error my-1 p-2">
//                       <p className="text-onPrimary font-serif md:text-sm text-xs flex justify-center">
//                         Non livrés
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className="p-screen md:py-6 md:flex">
//               <div className="md:w-3/4">
//                 <div className="md:pr-8">
//                   {order.orderItems.length === 0 ? (
//                     <div className="m-20">
//                       <h1 className="text-[18px] md:text-[32px]">
//                         Votre Panier est vide !
//                       </h1>
//                     </div>
//                   ) : (
//                     <>
//                       <ul className="w-[100%]">
//                         {order.orderItems.map((item, index) => (
//                           <div
//                             className=" w-[100%]  h-[100%] md:h-[100px] shadow-[0_1px_3px_rgba(0,0,0,0.2)] md:rounded-[10px] rounded-[5px] md:px-5 px-2 py-1 md:py-0 my-2"
//                             key={index}
//                           >
//                             <li
//                               className="h-[100%] w-[100%] flex md:justify-between justify-between items-center"
//                               key={item.product._id}
//                             >
//                               <div>
//                                 <img
//                                   src={item.image}
//                                   alt={item.name}
//                                   className="w-[50px] rounded-[5px]"
//                                 />
//                               </div>
//                               <Link to={`/products/${productId}`}>
//                                 <h5 className="md:text-base text-xs ">
//                                   <b>{item.name}</b>
//                                 </h5>
//                               </Link>

//                               <div className="md:text-sm text-[10px] flex flex-col items-center justify-center">
//                                 <div className="font-serif text-[10px]">
//                                   QUANTITÉ
//                                 </div>
//                                 <span className="text-sm font-serif">
//                                   {item.qty}
//                                 </span>
//                               </div>
//                               <div className="md:text-sm text-xs font-serif flex flex-col items-center justify-center">
//                                 <div className="text-[10px] font-serif">
//                                   <h6 className="font-serif">Sous-total</h6>
//                                 </div>
//                                 <div>
//                                   <b>$ {item.qty * item.price}</b>
//                                 </div>
//                               </div>
//                             </li>
//                           </div>
//                         ))}
//                       </ul>
//                     </>
//                   )}
//                 </div>
//               </div>
//               <div className="md:w-1/4 flex flex-col">
//                 <div className="max-w-screen-md">
//                   <table className="min-w-full bg-secondaryContainer shadow-md overflow-hidden">
//                     <thead className="bg-[#94a3b8]"></thead>
//                     <tbody className="divide-y divide-[#94a3b8]">
//                       <tr>
//                         <td className="py-2 px-4 md:text-base text-sm font-serif">
//                           <b>Produits</b>
//                         </td>
//                         <td className="py-2 px-4 md:text-base text-sm font-serif">
//                           $ {itemsPrice}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="py-2 px-4 md:text-base text-sm font-serif">
//                           <b>Shipping</b>
//                         </td>
//                         <td className="py-2 px-4 md:text-base text-sm font-serif">
//                           $ {order.shippingPrice}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="py-2 px-4 md:text-base text-sm font-serif">
//                           <b>Taxe</b>
//                         </td>
//                         <td className="py-2 px-4 md:text-base text-sm font-serif">
//                           $ {order.taxPrice}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="py-2 px-4 md:text-base text-sm font-serif">
//                           <b>Total</b>
//                         </td>
//                         <td className="py-2 px-4 md:text-base text-sm font-serif">
//                           $ {order.totalPrice}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   {!order.isPaid && (
//                     <div className="">
//                       {loadingPay && (
//                         <div className="pt-10">
//                           <LoadingSpinner />
//                         </div>
//                       )}
//                       {!sdkReady ? (
//                         <div className="pt-10">
//                           <LoadingSpinner />
//                         </div>
//                       ) : (
//                         <PayPalButton
//                           amount={order.totalPrice}
//                           onSuccess={successPaymentHandler}
//                         />
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default orderScreen;
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/headerComponent/Header";
import { User, Truck, MapPin } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartItems } from "../redux/Cart/cartSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchOrderDetails } from "../redux/order/orderDetailsSlice";
import LoadingSpinner from "../components/loadingError/loading.jsx";
import Message from "../components/loadingError/errorMessage.jsx";
import axios from "axios";
import { payOrder, resetOrderPayState } from "../redux/order/orderPaySlice.js";
import { PayPalButtons } from "@paypal/react-paypal-js";
import moment from "moment";

const OrderScreen = () => {
  const [sdkReady, setSdkReady] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isInitialMount = useRef(true); // Référence useRef pour suivre le premier montage
  const { productId, id } = useParams();
  const orders = useSelector((state) => state.orders.orders);
  const orderDetails = useSelector((state) => state.orderDetails.orderDetails);
  const loading = useSelector((state) => state.orders.loading);
  const error = useSelector((state) => state.orders.error);
  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;
  const { orderItems, shippingAddress, order } = useSelector(
    (state) => state.orderDetails
  );

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const itemsPrice = addDecimals(
    orders.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  console.log(orders);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const addPayPalScript = async () => {
        try {
          const { data: clientId } = await axios.get("/api/config/paypal");
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
          script.async = true;
          script.onload = () => {
            setSdkReady(true);
          };
          document.body.appendChild(script);
        } catch (error) {
          console.error("Erreur lors du chargement du script PayPal :", error);
        }
      };

      if (!orders || successPay) {
        dispatch(resetOrderPayState());
        dispatch(fetchOrderDetails(id));
      } else if (!orders.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }

    return () => {
      dispatch(clearCart());
    };
  }, [dispatch, id, successPay, orders]);

  const successPaymentHandler = (details) => {
    dispatch(payOrder({ orderId: id, paymentResult: details }));
  };

  return (
    <div>
      <Header />
      <div className="mt-20 md:mt-24">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <Message variant="bg-danger dark:bg-danger-dark text-white">
            {error}
          </Message>
        ) : (
          <>
            <div className="p-screen pt-4 md:pt-6 md:flex">
              {/* CLIENT */}
              <div className="md:w-1/3 flex bg-secondary/20 py-4">
                <div className="w-1/3">
                  <div className="hidden md:flex bg-onSecondary/40 md:ml-4 w-14 h-14 justify-center items-center rounded-full">
                    <User size={30} weight="fill" color="#216487" />
                  </div>
                  <div className="md:hidden flex bg-onSecondary/40 md:ml-4 ml-6 w-10 h-10 justify-center items-center rounded-full">
                    <User size={22} weight="fill" color="#216487" />
                  </div>
                </div>
                <div className="w-2/3 flex flex-col">
                  <div className="md:text-base text-sm font-serif">
                    <b>Client</b>
                  </div>
                  <p className="md:text-sm text-xs font-serif">
                    {orders.orderItem.name}
                  </p>
                  <p className="md:text-sm text-xs font-serif">
                    <a href={`mailto:${orders.orderItem.email}`}>
                      {orders.orderItem.email}
                    </a>
                  </p>
                </div>
              </div>
              {/* INFO SUR LES COMMANDES */}
              <div className="md:w-1/3 flex bg-secondary/20 py-4">
                <div className="w-1/3">
                  <div className="hidden md:flex bg-onSecondary/40 md:ml-4 w-14 h-14 justify-center items-center rounded-full">
                    <Truck size={30} weight="fill" color="#216487" />
                  </div>
                  <div className="md:hidden flex bg-onSecondary/40 md:ml-4 ml-6 w-10 h-10 justify-center items-center rounded-full">
                    <Truck size={22} weight="fill" color="#216487" />
                  </div>
                </div>
                <div className="w-2/3 mr-4 flex flex-col">
                  <div className="md:text-base text-sm font-serif">
                    <b>Informations sur la commande</b>
                  </div>
                  <div className="md:text-sm text-xs font-serif">
                    Shipping: {orders.shippingAddress.country}
                  </div>
                  <div className="md:text-sm text-xs font-serif">
                    Mode de paiement: {orders.paymentMethod}
                  </div>

                  {orders.isPaid ? (
                    <div className="bg-[#2563eb] mt-1 p-2">
                      <p className="text-onPrimary md:text-sm text-xs flex justify-center">
                        Payé {moment(orders.paidAt).calendar()}
                      </p>
                    </div>
                  ) : (
                    <div className="bg-error my-1 p-2">
                      <p className="text-onPrimary md:text-sm font-serif text-xs flex justify-center">
                        Impayé
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {/* LIVRAISON */}
              <div className="md:w-1/3 flex bg-secondary/20 py-4">
                <div className="w-1/3">
                  <div className="hidden md:flex bg-onSecondary/40 md:ml-4 w-14 h-14 justify-center items-center rounded-full">
                    <MapPin size={30} weight="fill" color="#216487" />
                  </div>
                  <div className="md:hidden flex bg-onSecondary/40 md:ml-4 ml-6 w-10 h-10 justify-center items-center rounded-full">
                    <MapPin size={22} weight="fill" color="#216487" />
                  </div>
                </div>
                <div className="w-2/3 mr-4 flex flex-col">
                  <div className="md:text-base text-sm font-serif">
                    <strong>Livrer à</strong>
                  </div>
                  <div className="md:text-sm text-xs font-serif">
                    Adresse: {orders.shippingAddress.city},{" "}
                    {orders.shippingAddress.address},
                    {orders.shippingAddress.postalCode}
                  </div>
                  {orders.isDelivered ? (
                    <div className="bg-[#2563eb] mt-1 p-2">
                      <p className="text-onPrimary md:text-sm text-xs font-serif flex justify-center">
                        Délivré le {moment(orders.deliveredAt).calendar()}
                      </p>
                    </div>
                  ) : (
                    <div className="bg-error my-1 p-2">
                      <p className="text-onPrimary font-serif md:text-sm text-xs flex justify-center">
                        Non livrés
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-screen md:py-6 md:flex">
              <div className="md:w-3/4">
                <div className="md:pr-8">
                  {orders.orderItems.length === 0 ? (
                    <div className="m-20">
                      <h1 className="text-[18px] md:text-[32px]">
                        Votre Panier est vide !
                      </h1>
                    </div>
                  ) : (
                    <>
                      <ul className="w-[100%]">
                        {orders.orderItems.map((item, index) => (
                          <div
                            className="w-[100%] h-[100%] md:h-[100px] shadow-[0_1px_3px_rgba(0,0,0,0.2)] md:rounded-[10px] rounded-[5px] md:px-5 px-2 py-1 md:py-0 my-2"
                            key={index}
                          >
                            <li
                              className="h-[100%] w-[100%] flex md:justify-between justify-between items-center"
                              key={item.product._id}
                            >
                              <div>
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-[50px] rounded-[5px]"
                                />
                              </div>
                              <Link to={`/products/${productId}`}>
                                <h5 className="md:text-base text-xs ">
                                  <b>{item.name}</b>
                                </h5>
                              </Link>

                              <div className="md:text-sm text-[10px] flex flex-col items-center justify-center">
                                <div className="font-serif text-[10px]">
                                  QUANTITÉ
                                </div>
                                <span className="text-sm font-serif">
                                  {item.qty}
                                </span>
                              </div>
                              <div className="md:text-sm text-xs font-serif flex flex-col items-center justify-center">
                                <div className="text-[10px] font-serif">
                                  <h6 className="font-serif">Sous-total</h6>
                                </div>
                                <div>
                                  <b>$ {item.qty * item.price}</b>
                                </div>
                              </div>
                            </li>
                          </div>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
              <div className="md:w-1/4 flex flex-col">
                <div className="max-w-screen-md">
                  <table className="min-w-full bg-secondaryContainer shadow-md overflow-hidden">
                    <thead className="bg-[#94a3b8]"></thead>
                    <tbody className="divide-y divide-[#94a3b8]">
                      <tr>
                        <td className="py-2 px-4 md:text-base text-sm font-serif">
                          <b>Produits</b>
                        </td>
                        <td className="py-2 px-4 md:text-base text-sm font-serif">
                          $ {itemsPrice}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 md:text-base text-sm font-serif">
                          <b>Shipping</b>
                        </td>
                        <td className="py-2 px-4 md:text-base text-sm font-serif">
                          $ {orders.shippingPrice}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 md:text-base text-sm font-serif">
                          <b>Taxe</b>
                        </td>
                        <td className="py-2 px-4 md:text-base text-sm font-serif">
                          $ {orders.taxPrice}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 md:text-base text-sm font-serif">
                          <b>Total</b>
                        </td>
                        <td className="py-2 px-4 md:text-base text-sm font-serif">
                          $ {orders.totalPrice}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {!orders.isPaid && (
                    <div className="">
                      {loadingPay && (
                        <div className="pt-10">
                          <LoadingSpinner />
                        </div>
                      )}
                      {!sdkReady ? (
                        <div className="pt-10">
                          <LoadingSpinner />
                        </div>
                      ) : (
                        <div className="pt-2">
                          <PayPalButtons
                            createOrder={(data, actions) => {
                              return actions.order.create({
                                purchase_units: [
                                  {
                                    amount: {
                                      value: order.totalPrice,
                                    },
                                  },
                                ],
                              });
                            }}
                            onApprove={async (data, actions) => {
                              await actions.order.capture();
                              successPaymentHandler(data);
                            }}
                            onError={(err) => {
                              console.error("PayPal Error:", err);
                              // Vous pouvez ajouter une gestion d'erreur personnalisée ici
                            }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderScreen;

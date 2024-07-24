import React, { useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { eye } from "ionicons/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderDelivered } from "../../redux/orders/orderDeliveredSlice";
import LoadingSpinner from "../Loadingerror/loading";
import moment from "moment";

const OrdersDetailTable = (props) => {
  const dispatch = useDispatch();
  const { orderDetails, loading } = props;

  // Function to calculate total price with decimals
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  console.log(orderDetails);
  // Calculer le prix total des articles uniquement si le chargement n'est pas en cours
  let itemsPrice = 0;
  if (!loading) {
    itemsPrice = addDecimals(
      orderDetails.orderItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      )
    );
  }

  const deliverHandler = () => {
    dispatch(orderDelivered(orderDetails));
  };

  return (
    <div className="overflow-x-auto">
      <div className="md:flex sm:gap-4">
        <div className="md:w-3/4 sm:border border-[#d4d6d8]">
          <div className="bg-white my-3">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="border-b border-black text-[#9a9da1] font-serif text-sm leading-normal">
                  <th className="py-2 px-6 text-left text-black">Product</th>
                  <th className="py-2 px-6 text-left text-black">Unit Price</th>
                  <th className="py-2 px-6 text-left text-black">Quantity</th>
                  <th className="py-2 px-6 text-left text-black">Total</th>
                </tr>
              </thead>
              <tbody className="text-[#4b5563] text-sm font-normal">
                {orderDetails.orderItems.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-primary/15 cursor-pointer border-b border-[#d4d6d8]"
                  >
                    <td className="py-2 px-6 text-left flex">
                      <div>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-6 h-8 rounded-md mr-2"
                        />
                      </div>
                      <div className="flex justify-start items-center">
                        {item.name}
                      </div>
                    </td>
                    <td className="py-2 px-6 text-left">$ {item.price}</td>
                    <td className="py-2 px-6 text-left">{item.qty}</td>
                    <td className="py-2 px-6 text-left">
                      $ {addDecimals(item.price * item.qty)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex md:p-4 ">
            <div className=" flex flex-col ">
              <div className="">
                <table className="min-w-full bg-onPrimary overflow-hidden">
                  <thead className="bg-[#94a3b8]"></thead>
                  <tbody className="divide-y divide-onPrimary">
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
                        $ {orderDetails.shippingPrice}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 md:text-base text-sm font-serif">
                        <b>Total</b>
                      </td>
                      <td className="py-2 px-4 md:text-base text-sm font-serif">
                        $ {orderDetails.totalPrice}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 md:text-base text-sm font-serif">
                        <b>Status</b>
                      </td>
                      <td className="py-2 px-4 md:text-base text-sm font-serif">
                        {orderDetails.isPaid ? (
                          <div className="bg-[#9df7be] text-[#21944b] rounded-lg p-1">
                            Payment done
                          </div>
                        ) : (
                          <div className="bg-danger/30 text-danger rounded-lg p-1">
                            Not Paid
                          </div>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
                ~
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/4">
          <div className="flex justify-center border border-[#d4d6d8] p-2">
            {orderDetails.isDeleivered ? (
              <button>
                <span className="font-serif font-medium rounded-sm text-xs sm:text-base flex flex-col justify-center text-onPrimary bg-onSurface py-2 px-6 ">
                  DELIVERED AT
                  <br />(
                  {moment(orderDetails.isDeleiveredAt).format("Do MMM YY")})
                </span>
              </button>
            ) : (
              <>
                {loading && <LoadingSpinner />}
                <button onClick={deliverHandler}>
                  <span className="font-serif font-medium rounded-sm text-sm sm:text-base text-onPrimary bg-onSurface py-2 px-12 ">
                    Mark as Delivered
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersDetailTable;

// import React from "react";
// import moment from "moment";
// import LoadingSpinner from "../Loadingerror/loading";
// import { useDispatch, useSelector } from "react-redux";
// import { orderDelivered } from "../../redux/orders/orderDeliveredSlice";

// const OrdersDetailTable = (props) => {
//   const { orderId, orderDetails, loading } = props;
//   const dispatch = useDispatch();

//   const {
//     deliveryStatus,
//     loading: loadingOrderDelivered,
//     success: successOrderDelivered,
//   } = useSelector((state) => state.orderDelivered);

//   const handleOrderDelivery = () => {
//     dispatch(orderDelivered({ orderId, orderDetails }));
//   };
//   console.log(orderDetails);
//   // Function to calculate total price with decimals
//   const addDecimals = (num) => {
//     return (Math.round(num * 100) / 100).toFixed(2);
//   };

//   // Ensure orderDetails is defined before accessing properties
//   if (!orderDetails) {
//     return <LoadingSpinner />;
//   }

//   // Calculate total items price only if not loading
//   let itemsPrice = 0;
//   if (!loading) {
//     itemsPrice = addDecimals(
//       orderDetails.orderItems.reduce(
//         (acc, item) => acc + item.price * item.qty,
//         0
//       )
//     );
//   }

//   return (
//     <div className="overflow-x-auto">
//       <div className="md:flex sm:gap-4">
//         <div className="md:w-3/4 sm:border border-[#d4d6d8]">
//           <div className="bg-white my-3">
//             <table className="min-w-max w-full table-auto">
//               <thead>
//                 <tr className="border-b border-black text-[#9a9da1] font-serif text-sm leading-normal">
//                   <th className="py-2 px-6 text-left text-black">Product</th>
//                   <th className="py-2 px-6 text-left text-black">Unit Price</th>
//                   <th className="py-2 px-6 text-left text-black">Quantity</th>
//                   <th className="py-2 px-6 text-left text-black">Total</th>
//                 </tr>
//               </thead>
//               <tbody className="text-[#4b5563] text-sm font-normal">
//                 {orderDetails.orderItems.map((item, index) => (
//                   <tr
//                     key={index}
//                     className="hover:bg-primary/15 cursor-pointer border-b border-[#d4d6d8]"
//                   >
//                     <td className="py-2 px-6 text-left flex">
//                       <div>
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="w-8 h-8 rounded-md mr-2"
//                         />
//                       </div>
//                       <div className="flex justify-start items-center">
//                         {item.name}
//                       </div>
//                     </td>
//                     <td className="py-2 px-6 text-left">$ {item.price}</td>
//                     <td className="py-2 px-6 text-left">{item.qty}</td>
//                     <td className="py-2 px-6 text-left">
//                       $ {addDecimals(item.price * item.qty)}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="flex md:p-4">
//             <div className=" flex flex-col">
//               <div className="">
//                 <table className="min-w-full bg-onPrimary overflow-hidden">
//                   <thead className="bg-[#94a3b8]"></thead>
//                   <tbody className="divide-y divide-onPrimary">
//                     <tr>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         <b>Sous-total</b>
//                       </td>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         ${itemsPrice}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         <b>Frais de livraison :</b>
//                       </td>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         ${orderDetails.shippingPrice}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         <b>Total :</b>
//                       </td>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         $ {orderDetails.totalPrice}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         <b>Statut</b>
//                       </td>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         {orderDetails.isPaid ? (
//                           <div className="bg-[#9df7be] text-[#21944b]  rounded-lg p-1">
//                             Paiement effectué
//                           </div>
//                         ) : (
//                           <div className="bg-danger/30 text-danger  rounded-lg p-1">
//                             Non payé
//                           </div>
//                         )}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         <b>Statut de livraison</b>
//                       </td>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         {orderDetails.isDelivered ? (
//                           <div className="bg-[#9df7be] text-[#21944b]  rounded-lg p-1">
//                             Livré
//                           </div>
//                         ) : (
//                           <div className="bg-danger/30 text-danger  rounded-lg p-1">
//                             Non livré
//                           </div>
//                         )}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="md:w-1/4">
//           <div className="flex justify-center border border-[#d4d6d8] p-2">
//             {orderDetails.isDelivered ? (
//               <button>
//                 <span className="font-serif font-medium rounded-sm text-sm sm:text-base text-onPrimary bg-onSurface py-2 px-12 ">
//                   LIVRÉ LE (
//                   {moment(orderDetails.isDeliveredAt).format("Do MMM YY")})
//                 </span>
//               </button>
//             ) : (
//               <>
//                 {loadingOrderDelivered && <LoadingSpinner />}
//                 <button onClick={handleOrderDelivery}>
//                   <span className="font-serif font-medium rounded-sm text-sm sm:text-base text-onPrimary bg-onSurface py-2 px-12 ">
//                     MARQUER COMME LIVRÉ
//                   </span>
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrdersDetailTable;

// import React, { useState } from "react";
// import moment from "moment";
// import LoadingSpinner from "../Loadingerror/loading";
// import { useDispatch } from "react-redux";
// import { orderDelivered } from "../../redux/orders/orderDeliveredSlice";

// const OrdersDetailTable = (props) => {
//   const { orderId, orderDetails, loading } = props;
//   const dispatch = useDispatch();
//   const [localOrderDetails, setLocalOrderDetails] = useState(orderDetails);
//   console.log(orderId);
//   console.log(orderDetails);
//   const handleOrderDelivery = async () => {
//     try {
//       await dispatch(orderDelivered({ orderId, orderDetails }));

//       // Mise à jour locale de orderDetails
//       setLocalOrderDetails({
//         ...localOrderDetails,
//         isDelivered: true,
//         isDeliveredAt: new Date(), // Exemple : mise à jour de la date de livraison
//         // Vous pouvez mettre à jour d'autres champs si nécessaire
//       });
//     } catch (error) {
//       console.error("Erreur lors de la livraison de la commande :", error);
//     }
//   };

// // Fonction pour calculer le prix total avec décimales
// const addDecimals = (num) => {
//   return (Math.round(num * 100) / 100).toFixed(2);
// };

// // Calculer le prix total des articles uniquement si le chargement n'est pas en cours
// let itemsPrice = 0;
// if (!loading) {
//   itemsPrice = addDecimals(
//     localOrderDetails.orderItems.reduce(
//       (acc, item) => acc + item.price * item.qty,
//       0
//     )
//   );
// }

//   // Rendu du composant
//   return (
//     <div className="overflow-x-auto">
//       <div className="md:flex sm:gap-4">
//         <div className="md:w-3/4 sm:border border-[#d4d6d8]">
//           <div className="bg-white my-3">
//             <table className="min-w-max w-full table-auto">
//               <thead>
//                 <tr className="border-b border-black text-[#9a9da1] font-serif text-sm leading-normal">
//                   <th className="py-2 px-6 text-left text-black">Product</th>
//                   <th className="py-2 px-6 text-left text-black">Unit Price</th>
//                   <th className="py-2 px-6 text-left text-black">Quantity</th>
//                   <th className="py-2 px-6 text-left text-black">Total</th>
//                 </tr>
//               </thead>
//               <tbody className="text-[#4b5563] text-sm font-normal">
//                 {localOrderDetails.orderItems.map((item, index) => (
//                   <tr
//                     key={index}
//                     className="hover:bg-primary/15 cursor-pointer border-b border-[#d4d6d8]"
//                   >
//                     <td className="py-2 px-6 text-left flex">
//                       <div>
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="w-8 h-8 rounded-md mr-2"
//                         />
//                       </div>
//                       <div className="flex justify-start items-center">
//                         {item.name}
//                       </div>
//                     </td>
//                     <td className="py-2 px-6 text-left">$ {item.price}</td>
//                     <td className="py-2 px-6 text-left">{item.qty}</td>
//                     <td className="py-2 px-6 text-left">
//                       $ {addDecimals(item.price * item.qty)}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="flex md:p-4">
//             <div className=" flex flex-col">
//               <div className="">
//                 <table className="min-w-full bg-onPrimary overflow-hidden">
//                   <thead className="bg-[#94a3b8]"></thead>
//                   <tbody className="divide-y divide-onPrimary">
//                     <tr>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         <b>Sous-total</b>
//                       </td>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         ${itemsPrice}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         <b>Frais de livraison :</b>
//                       </td>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         ${localOrderDetails.shippingPrice}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         <b>Total :</b>
//                       </td>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         $ {localOrderDetails.totalPrice}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         <b>Statut</b>
//                       </td>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         {localOrderDetails.isPaid ? (
//                           <div className="bg-[#dcfce7] text-[#16a34a]  rounded-lg p-1">
//                             Paiement effectué
//                           </div>
//                         ) : (
//                           <div className="bg-danger/30 text-danger  rounded-lg p-1">
//                             Non payé
//                           </div>
//                         )}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         <b>Statut de livraison</b>
//                       </td>
//                       <td className="py-2 px-4 md:text-base text-sm font-serif">
//                         {localOrderDetails.isDelivered ? (
//                           <div className="bg-[#dcfce7] text-[#16a34a] rounded-lg p-1">
//                             Livré le{" "}
//                             {moment(localOrderDetails.isDeliveredAt).format(
//                               "Do MMM YY"
//                             )}
//                           </div>
//                         ) : (
//                           <div className="bg-danger/30 text-danger  rounded-lg p-1">
//                             Non livré
//                           </div>
//                         )}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="md:w-1/4">
//           <div className="flex justify-center border border-[#d4d6d8] p-2">
//             {localOrderDetails.isDelivered ? (
//               <button>
//                 <span className="font-serif font-medium rounded-sm text-sm sm:text-base text-onPrimary bg-onSurface py-2 px-12 ">
//                   LIVRÉ
//                 </span>
//               </button>
//             ) : (
//               <button onClick={handleOrderDelivery}>
//                 <span className="font-serif font-medium rounded-sm text-sm sm:text-base text-onPrimary bg-onSurface py-2 px-12 ">
//                   MARQUER COMME LIVRÉ
//                 </span>
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrdersDetailTable;

import React, { useEffect, useRef } from "react";
import Header from "../components/headerComponent/Header";
import { User, Truck, MapPin } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCart,
  selectCartItems,
} from "../redux/Cart/cartSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createOrder } from "../redux/order/orderSlice";
import { fetchOrderDetails } from "../redux/order/orderDetailsSlice";
import LoadingSpinner from "../components/loadingError/loading.jsx";
import Message from "../components/loadingError/errorMessage.jsx";

const PlaceOrderScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isInitialMount = useRef(true); // Référence useRef pour suivre le premier montage
  const cartItems = useSelector(selectCartItems);
  const { productId, id } = useParams();
  const { user, token } = useSelector((state) => state.auth);
  const { shippingAddress, paymentMethod } = useSelector((state) => state.cart);
  const orders = useSelector((state) => state.orders.orders);
  const orderDetails = useSelector((state) => state.orderDetails.orderDetails);
  const loading = useSelector((state) => state.orders.loading);
  const error = useSelector((state) => state.orders.error);
  console.log(orderDetails);
  console.log(orders);

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const itemsPrice = addDecimals(
    orderDetails.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    )
  );

  useEffect(() => {
    if (isInitialMount.current) {
      // Ne rien faire sur le premier rendu
      isInitialMount.current = false;
    } else {
      // Déclencher fetchProducts() après le premier rendu
      dispatch(fetchOrderDetails(id));
      console.log(orderDetails);
    }

    // Clean up effect
    return () => {
      dispatch(clearCart());
    };
  }, [dispatch, id]);

  // const shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 100);

  // const taxPrice = addDecimals(Number((0.15 * itemsPrice).toFixed(2)));

  // const totalPrice = (
  //   Number(itemsPrice) +
  //   Number(taxPrice) +
  //   Number(shippingPrice)
  // ).toFixed(2);

  // const placeOrderHandler = async () => {
  //   // Déclarez la fonction comme asynchrone ici
  //   try {
  //     const orderData = {
  //       cartItems,
  //       shippingAddress,
  //       paymentMethod,
  //       itemsPrice,
  //       shippingPrice,
  //       taxPrice,
  //       totalPrice,
  //     };
  //     const action = await dispatch(createOrder(orderData));
  //     const responseData = action.payload; // Accédez aux données de la réponse
  //     navigate(`/order/${responseData._id}`);
  //     console.log("Réponse de l'API:", responseData);
  //   } catch (error) {
  //     console.error("Erreur lors de la création de la commande:", error);
  //   }
  // };

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
            <div className="p-screen md:pt-6 md:flex">
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
                  <div className="md:text-base text-sm">
                    <b>Client</b>
                  </div>
                  <p className="md:text-sm text-xs">{orderDetails.user.name}</p>
                  <p className="md:text-sm text-xs">
                    <a href={`mailto:${orderDetails.user.email}`}>
                      {orderDetails.user.email}
                    </a>
                  </p>
                </div>
              </div>
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
                  <div className="md:text-base text-sm">
                    <b>Informations sur la commande</b>
                  </div>
                  <div className="md:text-sm text-xs">
                    Shipping: {orderDetails.shippingAddress.country}
                  </div>
                  <div className="md:text-sm text-xs">
                    Mode de paiement: {orderDetails.paymentMethod}
                  </div>

                  {orderDetails.isPaid ? (
                    <div className="bg-[#2563eb] mt-1 p-2">
                      <p className="text-onPrimary md:text-sm text-xs flex justify-center">
                        Payé le {moment(orderDetails.paidAt).calendar()}
                      </p>
                    </div>
                  ) : (
                    <div className="bg-error my-1 p-2">
                      <p className="text-onPrimary md:text-sm text-xs flex justify-center">
                        Impayé
                      </p>
                    </div>
                  )}
                </div>
              </div>
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
                  <div className="md:text-base text-sm">
                    <strong>Livrer à</strong>
                  </div>
                  <div className="md:text-sm text-xs">
                    Adresse: {orderDetails.shippingAddress.city},{" "}
                    {orderDetails.shippingAddress.address},
                    {orderDetails.shippingAddress.postalCode}
                  </div>
                  {orderDetails.isDelivered ? (
                    <div className="bg-[#2563eb] mt-1 p-2">
                      <p className="text-onPrimary md:text-sm text-xs flex justify-center">
                        Délivré le {moment(orderDetails.deliveredAt).calendar()}
                      </p>
                    </div>
                  ) : (
                    <div className="bg-error my-1 p-2">
                      <p className="text-onPrimary md:text-sm text-xs flex justify-center">
                        Non livrés
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-screen md:py-6 md:flex">
              <div className="md:w-3/4">
                <div className="md:px-8">
                  {orderDetails.orderItems.length === 0 ? (
                    <div className="m-20">
                      <h1 className="text-[18px] md:text-[32px]">
                        Votre Panier est vide !
                      </h1>
                    </div>
                  ) : (
                    <>
                      <ul className="w-[100%]">
                        {orderDetails.orderItems.map((item, index) => (
                          <div
                            className=" w-[100%]  h-[100%] md:h-[100px] shadow-[0_1px_3px_rgba(0,0,0,0.2)] md:rounded-[10px] rounded-[5px] md:px-5 px-2 py-1 md:py-0 my-2"
                            key={index}
                          >
                            {/* <div className="absolute md:left-[150px] md:top-40">
                              <button
                                onClick={() =>
                                  handleRemoveFromCart(item.product._id)
                                }
                                className="bg-error h-[18px] w-[18px] md:h-5 md:w-5 rounded-[50%]  "
                              >
                                <span className="text-white text-[10px] md:text-[11px] md:pb-2 flex justify-center items-center">
                                  *
                                </span>
                              </button>
                            </div> */}
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
                                <div className="text-">QUANTITÉ</div>
                                {item.qty}
                              </div>
                              <div className="md:text-sm text-xs flex flex-col items-center justify-center">
                                <div className="text-[10px]">
                                  <h6>Sous-total</h6>
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
                        <td className="py-2 px-4 md:text-base text-sm">
                          <b>Produits</b>
                        </td>
                        <td className="py-2 px-4 md:text-base text-sm">
                          $ {itemsPrice}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 md:text-base text-sm">
                          <b>Shipping</b>
                        </td>
                        <td className="py-2 px-4 md:text-base text-sm">
                          $ {orderDetails.shippingPrice}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 md:text-base text-sm">
                          <b>Taxe</b>
                        </td>
                        <td className="py-2 px-4 md:text-base text-sm">
                          $ {orderDetails.taxPrice}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 md:text-base text-sm">
                          <b>Total</b>
                        </td>
                        <td className="py-2 px-4 md:text-base text-sm">
                          $ {orderDetails.totalPrice}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* {cartItems.length === 0 ? null : (
                  <button
                    type="submit"
                    className="w-full bg-primary/90 text-white py-2 px-4  hover:bg-primary focus:outline-none focus:ring-2 focus:bg-[#22c55e] focus:ring-offset-2"
                    onClick={placeOrderHandler}
                  >
                    Passer la commande
                  </button>
                )} */}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlaceOrderScreen;

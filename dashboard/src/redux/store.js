// store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import productListReducer from "./products/productsSlice.js";
import productsReducer from "./products/productSlice.js";
import productReviewReducer from "./products/productReviewSlice.js";
import cartReducer from "./Cart/cartSlice.js";
import ordersReducer from "./order/orderSlice.js";
import orderDetailsReducer from "./order/orderDetailsSlice.js";
import orderPayReducer from "./order/orderPaySlice.js";
import orderListReducer from "./order/orderListSlice.js";
import { saveState, loadState } from "./localStorage.js";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    productList: productListReducer,
    products: productsReducer,
    productReview: productReviewReducer,
    cart: cartReducer,
    orders: ordersReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderList: orderListReducer,
  },
  preloadedState: persistedState, // Utilise l'état initial chargé depuis localStorage
});

// Abonnez-vous aux changements d'état et sauvegardez dans localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;

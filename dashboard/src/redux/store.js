import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import usersReducer from "./auth/usersSlice.js";
import productsReducer from "./products/productsSlice.js";
import ordersReducer from "./orders/ordersSlice.js";
import orderDetailsReducer from "./orders/orderDetailsSlice.js";
import orderDileveredReducer from "./orders/orderDeliveredSlice.js";

import { saveState, loadState } from "./localStorage.js";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    productsList: productsReducer,
    orders: ordersReducer,
    orderDetails: orderDetailsReducer,
    orderDelivered: orderDileveredReducer,
  },
  preloadedState: persistedState, // Utilise l'état initial chargé depuis localStorage
});

// Abonnez-vous aux changements d'état et sauvegardez dans localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;

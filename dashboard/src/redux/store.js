import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import usersReducer from "./auth/usersSlice.js";
import productsReducer from "./products/productsSlice.js";
import categoriesReducer from "./categories/categoriesSlice.js";
import ordersReducer from "./orders/ordersSlice.js";
import orderDetailsReducer from "./orders/orderDetailsSlice.js";
import orderDileveredReducer from "./orders/orderDeliveredSlice.js";
import productDeleteReducer from "./products/deleteProductSlice.js";
import categoryDeleteReducer from "./categories/deleteCategorieSlice.js";

import { saveState, loadState } from "./localStorage.js";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    productsList: productsReducer,
    categories: categoriesReducer,
    orders: ordersReducer,
    orderDetails: orderDetailsReducer,
    orderDelivered: orderDileveredReducer,
    productDelete: productDeleteReducer,
    categoryDelete: categoryDeleteReducer,
  },
  preloadedState: persistedState, // Utilise l'état initial chargé depuis localStorage
});

// Abonnement aux changements d'état et sauvegarde dans localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;

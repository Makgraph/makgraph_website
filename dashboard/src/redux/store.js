import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import usersReducer from "./auth/usersSlice.js";
import productsReducer from "./products/productsSlice.js";

import { saveState, loadState } from "./localStorage.js";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    productsList: productsReducer,
  },
  preloadedState: persistedState, // Utilise l'état initial chargé depuis localStorage
});

// Abonnez-vous aux changements d'état et sauvegardez dans localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;

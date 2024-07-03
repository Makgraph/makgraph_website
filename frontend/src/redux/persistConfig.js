// src/store/persistConfig.js
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./auth/authSlice.js";
// import userDetailsReducer from "./auth/userDetailsSlice.js";
import productListReducer from "./products/productsSlice.js";
import productsReducer from "./products/productSlice.js";
import cartReducer from "./Cart/cartSlice.js";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  userDetails: userDetailsReducer,
  productList: productListReducer,
  products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// import { persistReducer } from "redux-persist";
// import { combineReducers } from "redux";
// import authReducer from "./auth/authSlice.js";
// // import userDetailsReducer from "./auth/userDetailsSlice.js";
// import productListReducer from "./products/productsSlice.js";
// import productsReducer from "./products/productSlice.js";
// import cartReducer from "./Cart/cartSlice.js";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducer = combineReducers({
//   auth: authReducer,
//   // userDetails: userDetailsReducer,
//   productList: productListReducer,
//   products: productsReducer,
//   cart: cartReducer,
//   // Add other reducers as needed
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default persistedReducer;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
// import userDetailsReducer from "./auth/userDetailsSlice.js";
import productListReducer from "./products/productsSlice.js";
import productsReducer from "./products/productSlice.js";
import cartReducer from "./Cart/cartSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // userDetails: userDetailsReducer,
    productList: productListReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

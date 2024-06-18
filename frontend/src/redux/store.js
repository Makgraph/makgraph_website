import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import productListReducer from "./products/productsSlice.js";
import productsReducer from "./products/productSlice.js";
import productReducer from "./products/productSlice.js";
import cartReducer from "./Cart/cartSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    productList: productListReducer,
    // product: productReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

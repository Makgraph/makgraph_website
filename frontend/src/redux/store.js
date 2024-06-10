import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import productListReducer from "./products/productsSlice.js";

export const store = configureStore({
  reducer: { productList: productListReducer, auth: authReducer },
});

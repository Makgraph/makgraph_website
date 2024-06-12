import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import productListReducer from "./products/productsSlice.js";
// import productDetailsReducer from "./products/productDetailsSlice.js";
import productReducer from "./products/productSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    productList: productListReducer,
    // productDetails: productDetailsReducer,
    product: productReducer,
  },
});

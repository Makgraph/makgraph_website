import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import authReducer from "./auth/authSlice.js";
import productListReducer from "./products/productsSlice.js";
import productsReducer from "./products/productSlice.js";
import cartReducer from "./Cart/cartSlice.js";
import ordersReducer from "./order/orderSlice.js";
import orderDetailsReducer from "./order/orderDetailsSlice.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart", "orderDetails", "orders"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  productList: productListReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  orderDetails: orderDetailsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import authReducer from "./auth/authSlice.js";
import usersReducer from "./auth/usersSlice.js";
import productsReducer from "./products/productsSlice.js";
import ordersReducer from "./orders/ordersSlice.js";
import orderDetailsReducer from "./orders/orderDetailsSlice.js";
import orderDileveredReducer from "./orders/orderDeliveredSlice.js";
import productDeleteReducer from "./products/deleteProductSlice.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "auth",
    "users",
    "products",
    "orders",
    "orderDetails",
    "orderDelivered",
    " productDelete",
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  productsList: productsReducer,
  orders: ordersReducer,
  orderDetails: orderDetailsReducer,
  orderDelivered: orderDileveredReducer,
  productDelete: productDeleteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

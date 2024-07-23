import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import authReducer from "./auth/authSlice.js";
import usersReducer from "./auth/usersSlice.js";
import productsReducer from "./products/productsSlice.js";
import ordersReducer from "./orders/ordersSlice.js";
import orderDetailsReducer from "./orders/orderDetailsSlice.js";
import orderDileveredReducer from "./orders/orderDeliveredSlice.js";

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
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  productsList: productsReducer,
  orders: ordersReducer,
  orderDetails: orderDetailsReducer,
  orderDelivered: orderDileveredReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

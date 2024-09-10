import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import authReducer from "./auth/authSlice.js";
import usersReducer from "./auth/usersSlice.js";
import productsReducer from "./products/productsSlice.js";
import categoriesReducer from "./categories/categoriesSlice.js";
import ordersReducer from "./orders/ordersSlice.js";
import orderDetailsReducer from "./orders/orderDetailsSlice.js";
import orderDileveredReducer from "./orders/orderDeliveredSlice.js";
import productDeleteReducer from "./products/deleteProductSlice.js";
import categoryDeleteReducer from "./categories/deleteCategorieSlice.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "auth",
    "users",
    "products",
    "categories",
    "orders",
    "orderDetails",
    "orderDelivered",
    "productDelete",
    "categoryDelete",
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  productsList: productsReducer,
  categories: categoriesReducer,
  orders: ordersReducer,
  orderDetails: orderDetailsReducer,
  orderDelivered: orderDileveredReducer,
  productDelete: productDeleteReducer,
  categoryDelete: categoryDeleteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

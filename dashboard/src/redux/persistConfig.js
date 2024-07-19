import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import authReducer from "./auth/authSlice.js";
import usersReducer from "./auth/usersSlice.js";
import productsReducer from "./products/productsSlice.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "users", "products"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  productsList: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

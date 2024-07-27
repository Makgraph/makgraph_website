import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Root from "./routes/root";
import ErrorPage from "./screens/ErrorPageScreen.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProductScreen from "./screens/ProductScreen.jsx";
import AddProductScreen from "./screens/AddProductScreen.jsx";
import CategoriesScreen from "./screens/CategoriesScreen.jsx";
import OrderScreen from "./screens/OrderScreen.jsx";
import OrderDetailScreen from "./screens/OrderDetailScreen.jsx";
import UsersScreen from "./screens/UsersScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import ProductEditScreen from "./screens/ProductEditScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/", // Route principale
    element: <PrivateRoute element={<Root />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Accueil",
    element: <PrivateRoute element={<HomeScreen />} />,
  },
  {
    path: "/products",
    element: <PrivateRoute element={<ProductScreen />} />,
  },
  {
    path: "/search/:keyword",
    element: <PrivateRoute element={<ProductScreen />} />,
  },
  {
    path: "/product/:id/edit",
    element: <PrivateRoute element={<ProductEditScreen />} />,
  },
  {
    path: "/addProduct",
    element: <PrivateRoute element={<AddProductScreen />} />,
  },
  {
    path: "/categories",
    element: <PrivateRoute element={<CategoriesScreen />} />,
  },
  {
    path: "/orders",
    element: <PrivateRoute element={<OrderScreen />} />,
  },
  {
    path: "/orderDetail/:id",
    element: <PrivateRoute element={<OrderDetailScreen />} />,
  },
  {
    path: "/users",
    element: <PrivateRoute element={<UsersScreen />} />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
]);

// Rendu de l'application React avec ReactDOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <ToastContainer />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

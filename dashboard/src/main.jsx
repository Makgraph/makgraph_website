// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// main.js
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
import ProuductScreen from "./screens/ProductScreen.jsx";
import AddProductScreen from "./screens/AddProductScreen.jsx";
import CategoriesScreen from "./screens/CategoriesScreen.jsx";
// import OrderDetailScreen from "./screens/OrderDetailScreen.jsx";
import OrderScreen from "./screens/OrderScreen.jsx";
import OrderDetailScreen from "./screens/OrderDetailScreen.jsx";
import UsersScreen from "./screens/UsersScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/", // Route principale
    element: <Root />, // Composant à rendre pour "/"
    errorElement: <ErrorPage />, // Composant d'erreur pour les erreurs sur "/"
  },
  {
    path: "/Accueil",
    element: <HomeScreen />,
  },
  {
    path: "/products",
    element: <ProuductScreen />,
  },
  {
    path: "/addProduct",
    element: <AddProductScreen />,
  },
  {
    path: "/categories",
    element: <CategoriesScreen />,
  },
  {
    path: "/orders",
    element: <OrderScreen />,
  },
  {
    path: "/orderDetail",
    element: <OrderDetailScreen />,
  },
  {
    path: "/users",
    element: <UsersScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
]);

// Rendu de l'application React avec ReactDOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router}>
      <ToastContainer />
    </RouterProvider>
    {/* </Provider> */}
  </React.StrictMode>
);

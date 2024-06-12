import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./screens/ErrorPage.Screen";
import Home from "./screens/HomeScreen.jsx";
import About from "./screens/AboutScreen.jsx";
import Gallery from "./screens/GalleryScreen.jsx";
import Contact from "./screens/ContactScreen.jsx";
import Cart from "./screens/CartScreen.jsx";
// import ShopContextProvider from "./context/ShopContext";
import Login from "./screens/LoginScreen.jsx";
import SignUp from "./components/loginComponent/SignUp.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shop from "./screens/ShopScreen.jsx";
import SingleProduct from "./screens/SingleProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Accueil",
    element: <Home />,
  },
  {
    path: "/Accueil/login",
    element: <Login />,
  },
  {
    path: "/Accueil/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Gallerie",
    element: <Gallery />,
  },
  {
    path: "/shop/cart",
    element: <Cart />,
  },
  {
    path: "/À propos",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/products/:id",
    element: <SingleProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer />
  </Provider>
);

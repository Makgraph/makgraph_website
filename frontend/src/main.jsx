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
import Login from "./screens/LoginScreen.jsx";
import SignUp from "./components/loginComponent/SignUp.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shop from "./screens/ShopScreen.jsx";
import SingleProduct from "./screens/SingleProduct.jsx";
import CartScreen from "./screens/CartScreen.jsx";
import ProfileScreen from "./screens/Profile.Screen.jsx";
import ProfileTabs from "./components/profileComponents/ProfileTabs";
import Orders from "./components/profileComponents/Orders";

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
    path: "/profile",
    element: <ProfileScreen />,
    children: [
      {
        path: "/profile/tabs",
        element: <ProfileTabs />,
      },
      {
        path: "/profile/orders",
        element: <Orders />,
      },
    ],
  },
  // {
  //   path: "/tabs",
  //   element: <ProfileTabs />,
  // },
  // {
  //   path: "/orders",
  //   element: <Orders />,
  // },
  {
    path: "/Gallerie",
    element: <Gallery />,
  },
  {
    path: "/cartScreen/:productId?",
    element: <CartScreen />,
  },
  {
    path: "/cart/:id?",
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
    path: "/products/:productId",
    element: <SingleProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer />
  </Provider>
  // </React.StrictMode>
);

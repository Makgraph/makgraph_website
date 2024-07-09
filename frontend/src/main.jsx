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
import ErrorPage from "./screens/ErrorPage.Screen";
import Home from "./screens/HomeScreen.jsx";
import About from "./screens/AboutScreen.jsx";
import Gallery from "./screens/GalleryScreen.jsx";
import Contact from "./screens/ContactScreen.jsx";
import CartScreen from "./screens/CartScreen.jsx";
import ShopScreen from "./screens/ShopScreen.jsx";
import SingleProduct from "./screens/SingleProduct.jsx";
import Cart from "./screens/CartScreen.jsx";
import ProfileScreen from "./screens/Profile.Screen.jsx";
import OrderScreen from "./screens/OrderScreen.jsx";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen.jsx";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.jsx";
import Login from "./screens/LoginScreen.jsx";
import SignUp from "./components/loginComponent/SignUp.jsx";
import ProfileTabs from "./components/profileComponents/ProfileTabs.jsx";
import OrderTabs from "./components/profileComponents/OrderTabs.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/", // Route principale
    element: <Root />, // Composant à rendre pour "/"
    errorElement: <ErrorPage />, // Composant d'erreur pour les erreurs sur "/"
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
    path: "/profile", // Chemin parent
    element: <PrivateRoute element={<ProfileScreen />} />, // Utilisation de PrivateRoute pour protéger la route /profile
    children: [
      {
        path: "", // Route par défaut relative à /profile
        element: <ProfileTabs />,
      },
      {
        path: "profileTabs", // Chemin relatif pour les onglets du profil
        element: <ProfileTabs />,
      },
      {
        path: "orderTabs", // Chemin relatif pour les onglets de commande
        element: <OrderTabs />,
      },
    ],
  },
  {
    path: "/shipping",
    element: <PrivateRoute element={<ShippingScreen />} />,
  },
  {
    path: "/payment",
    element: <PrivateRoute element={<PaymentScreen />} />,
  },
  {
    path: "/placeOrder",
    element: <PrivateRoute element={<PlaceOrderScreen />} />,
  },
  {
    path: "/order/:id",
    element: <PrivateRoute element={<OrderScreen />} />,
  },
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
    element: <ShopScreen />,
  },
  {
    path: "/shop/:pageNumber",
    element: <ShopScreen />,
  },
  {
    path: "/products/:productId",
    element: <SingleProduct />,
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

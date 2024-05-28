import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home/home.jsx";
import Slideshow from "./routes/home/Slideshow.jsx";
import About from "./routes/About.jsx";
import Gallery from "./routes/Gallery/Gallery.jsx";
import Contact from "./routes/Contact.jsx";
import Shop from "./routes/shop/Shop.jsx";
import Cart from "./routes/shop/Cart.jsx";
import NavBarShop from "./routes/shop/NavBarShop.jsx";
import Product from "./routes/shop/Product.jsx";
import ShopScreen from "./routes/shop/ShopScreen.jsx";
import ShopContextProvider from "./context/ShopContext";
import Mainpage from "./routes/Mainpage.jsx";
import CartItem from "./routes/shop/CartItem.jsx";
import Login from "./routes/Login/Login.jsx";
import SignUp from "./routes/Login/SignUp.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home/1",
    element: <Home />,
  },
  {
    path: "/home/login/1",
    element: <Login />,
  },
  {
    path: "/home/SignUp/1",
    element: <SignUp />,
  },
  {
    path: "/Gallerie/2",
    element: <Gallery />,
  },
  {
    path: "/shop/3",
    element: <Shop />,
  },
  {
    path: "/shop/3/cart",
    element: <Cart />,
  },
  {
    path: "/about/4",
    element: <About />,
  },
  {
    path: "/contact/5",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <ShopContextProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </ShopContextProvider>
    </Provider>
  </React.StrictMode>
);

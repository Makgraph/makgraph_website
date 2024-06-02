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
import ShopContextProvider from "./context/ShopContext";
import Login from "./screens/LoginScreen.jsx";
import SignUp from "./components/loginComponent/SignUp.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shop from "./screens/ShopScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Accueil/1",
    element: <Home />,
  },
  {
    path: "/Accueil/login/1",
    element: <Login />,
  },
  {
    path: "/Accueil/SignUp/1",
    element: <SignUp />,
  },
  {
    path: "/Gallerie/2",
    element: <Gallery />,
  },
  {
    path: "/shop/3/cart",
    element: <Cart />,
  },
  {
    path: "/À propos/4",
    element: <About />,
  },
  {
    path: "/contact/5",
    element: <Contact />,
  },
  {
    path: "/shop/3",
    element: <Shop />,
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

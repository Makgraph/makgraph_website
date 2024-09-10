import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./PrivateRoute.jsx";

// Importation dynamique avec React.lazy
const Root = React.lazy(() => import("./routes/root"));
const ErrorPage = React.lazy(() => import("./screens/ErrorPageScreen.jsx"));
const HomeScreen = React.lazy(() => import("./screens/HomeScreen.jsx"));
const ProductScreen = React.lazy(() => import("./screens/ProductScreen.jsx"));
const AddProductScreen = React.lazy(() =>
  import("./screens/AddProductScreen.jsx")
);
const CategoriesScreen = React.lazy(() =>
  import("./screens/CategoriesScreen.jsx")
);
const OrderScreen = React.lazy(() => import("./screens/OrderScreen.jsx"));
const OrderDetailScreen = React.lazy(() =>
  import("./screens/OrderDetailScreen.jsx")
);
const UsersScreen = React.lazy(() => import("./screens/UsersScreen.jsx"));
const LoginScreen = React.lazy(() => import("./screens/LoginScreen.jsx"));
const ProductEditScreen = React.lazy(() =>
  import("./screens/ProductEditScreen.jsx")
);
const AddCategorieScreen = React.lazy(() =>
  import("./screens/AddCategorieScreen.jsx")
);
const CategorieEditScreen = React.lazy(() =>
  import("./screens/CategorieEditScreen.jsx")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute element={<Root />} />,
    errorElement: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <ErrorPage />
      </React.Suspense>
    ),
  },
  {
    path: "/Accueil",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute element={<HomeScreen />} />
      </React.Suspense>
    ),
  },
  {
    path: "/products",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute element={<ProductScreen />} />
      </React.Suspense>
    ),
    children: [
      {
        path: "search/:keyword",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <ProductScreen />
          </React.Suspense>
        ),
      },
      {
        path: "search/:keyword/page/:pageNumber",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <ProductScreen />
          </React.Suspense>
        ),
      },
      {
        path: "page/:pageNumber",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <ProductScreen />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "/product/:id/edit",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute element={<ProductEditScreen />} />
      </React.Suspense>
    ),
  },
  {
    path: "/addProduct",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute element={<AddProductScreen />} />
      </React.Suspense>
    ),
  },
  {
    path: "/categories",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute element={<CategoriesScreen />} />
      </React.Suspense>
    ),
    children: [
      {
        path: "search/:keyword/page/:pageNumber/category/:category",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <CategoriesScreen />
          </React.Suspense>
        ),
      },
      {
        path: "search/:keyword/category/:category",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <CategoriesScreen />
          </React.Suspense>
        ),
      },
      {
        path: "search/category/:category",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <CategoriesScreen />
          </React.Suspense>
        ),
      },
      {
        path: "search/:keyword/page/:pageNumber",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <CategoriesScreen />
          </React.Suspense>
        ),
      },
      {
        path: "search/:keyword",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <CategoriesScreen />
          </React.Suspense>
        ),
      },
      {
        path: "page/:pageNumber",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <CategoriesScreen />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "/addCategorie",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute element={<AddCategorieScreen />} />
      </React.Suspense>
    ),
  },
  {
    path: "/categorie/:id/edit",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute element={<CategorieEditScreen />} />
      </React.Suspense>
    ),
  },
  {
    path: "/orders",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute element={<OrderScreen />} />
      </React.Suspense>
    ),
  },
  {
    path: "/orderDetail/:id",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute element={<OrderDetailScreen />} />
      </React.Suspense>
    ),
  },
  {
    path: "/users",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute element={<UsersScreen />} />
      </React.Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LoginScreen />
      </React.Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <ToastContainer />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
// import { Provider } from "react-redux";
// import { store } from "./redux/store.js";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Root from "./routes/root";
// import ErrorPage from "./screens/ErrorPageScreen.jsx";
// import HomeScreen from "./screens/HomeScreen.jsx";
// import ProductScreen from "./screens/ProductScreen.jsx";
// import AddProductScreen from "./screens/AddProductScreen.jsx";
// import CategoriesScreen from "./screens/CategoriesScreen.jsx";
// import OrderScreen from "./screens/OrderScreen.jsx";
// import OrderDetailScreen from "./screens/OrderDetailScreen.jsx";
// import UsersScreen from "./screens/UsersScreen.jsx";
// import LoginScreen from "./screens/LoginScreen.jsx";
// import PrivateRoute from "./PrivateRoute.jsx";
// import ProductEditScreen from "./screens/ProductEditScreen.jsx";
// import AddCategorieScreen from "./screens/AddCategorieScreen.jsx";
// import CategorieEditScreen from "./screens/CategorieEditScreen.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PrivateRoute element={<Root />} />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/Accueil",
//     element: <PrivateRoute element={<HomeScreen />} />,
//   },
//   {
//     path: "/products",
//     element: <PrivateRoute element={<ProductScreen />} />,
//     children: [
//       {
//         path: "search/:keyword",
//         element: <ProductScreen />,
//       },
//       {
//         path: "search/:keyword/page/:pageNumber",
//         element: <ProductScreen />,
//       },
//       {
//         path: "page/:pageNumber",
//         element: <ProductScreen />,
//       },
//     ],
//   },
//   {
//     path: "/product/:id/edit",
//     element: <PrivateRoute element={<ProductEditScreen />} />,
//   },
//   {
//     path: "/addProduct",
//     element: <PrivateRoute element={<AddProductScreen />} />,
//   },
//   {
//     path: "/categories",
//     element: <PrivateRoute element={<CategoriesScreen />} />,
//     children: [
//       {
//         path: "search/:keyword/page/:pageNumber/category/:category",
//         element: <CategoriesScreen />,
//       },
//       {
//         path: "search/:keyword/category/:category",
//         element: <CategoriesScreen />,
//       },
//       {
//         path: "search/category/:category",
//         element: <CategoriesScreen />,
//       },
//       {
//         path: "search/:keyword/page/:pageNumber",
//         element: <CategoriesScreen />,
//       },
//       {
//         path: "search/:keyword",
//         element: <CategoriesScreen />,
//       },
//       {
//         path: "page/:pageNumber",
//         element: <CategoriesScreen />,
//       },
//     ],
//   },
//   {
//     path: "/addCategorie",
//     element: <PrivateRoute element={<AddCategorieScreen />} />,
//   },
//   {
//     path: "/categorie/:id/edit",
//     element: <PrivateRoute element={<CategorieEditScreen />} />,
//   },
//   {
//     path: "/orders",
//     element: <PrivateRoute element={<OrderScreen />} />,
//   },
//   {
//     path: "/orderDetail/:id",
//     element: <PrivateRoute element={<OrderDetailScreen />} />,
//   },
//   {
//     path: "/users",
//     element: <PrivateRoute element={<UsersScreen />} />,
//   },
//   {
//     path: "/login",
//     element: <LoginScreen />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router}>
//         <ToastContainer />
//       </RouterProvider>
//     </Provider>
//   </React.StrictMode>
// );

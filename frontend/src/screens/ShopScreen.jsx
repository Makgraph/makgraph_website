import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProductList,
} from "../redux/products/productsSlice";
import { useLocation } from "react-router-dom";
import NavBarShop from "../components/shopComponent/NavBarShop.jsx";
import ShopItems from "../components/shopComponent/ShopItems.jsx";
import Header from "../components/headerComponent/Header.jsx";
import Footer from "../components/Footer.jsx";

const ShopScreen = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageNumber = searchParams.get("pageNumber") || 1;

  useEffect(() => {
    dispatch(fetchProducts(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <div>
      <Header />
      <div className="pt-20 md:pt-24">
        <NavBarShop />
        <ShopItems />
        <Footer />
      </div>
    </div>
  );
};

export default ShopScreen;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchProducts,
//   selectProductList,
// } from "../redux/products/productsSlice";
// import { useLocation, useNavigate } from "react-router-dom";
// import NavBarShop from "../components/shopComponent/NavBarShop.jsx";
// import ShopItems from "../components/shopComponent/ShopItems.jsx";
// import Header from "../components/headerComponent/Header.jsx";
// import Footer from "../components/Footer.jsx";

// const ShopScreen = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const pageNumber = searchParams.get("pageNumber") || 1;

//   const { products, loading, error, page, pages } =
//     useSelector(selectProductList);

//   useEffect(() => {
//     dispatch(fetchProducts(pageNumber));
//   }, [dispatch, pageNumber]);

//   const handlePageChange = (newPage) => {
//     navigate(`/shop?pageNumber=${newPage}`);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="pt-20 md:pt-24">
//         <NavBarShop />
//         <ShopItems />
//         {/* Pagination UI */}
//         <div className="flex justify-center mt-4">
//           {Array.from({ length: pages }, (_, index) => (
//             <button
//               key={index + 1}
//               className={`mx-1 px-3 py-1 rounded-md ${
//                 index + 1 === parseInt(pageNumber)
//                   ? "bg-primary text-white"
//                   : "bg-gray-200"
//               }`}
//               onClick={() => handlePageChange(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default ShopScreen;

// import React from "react";
// import NavBarShop from "../components/shopComponent/NavBarShop.jsx";
// import ShopItems from "../components/shopComponent/ShopItems.jsx";
// import Header from "../components/headerComponent/Header.jsx";
// import Footer from "../components/Footer.jsx";

// const ShopScreen = () => {
//   return (
//     <div>
//       <Header />
//       <div className="pt-20 md:pt-24">
//         <NavBarShop />
//         <ShopItems />
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default ShopScreen;

import React from "react";
import NavBarShop from "../components/shopComponent/NavBarShop.jsx";
import ShopItems from "../components/shopComponent/ShopItems.jsx";
import Cart from "./CartScreen.jsx";
import Header from "../components/headerComponent/Header.jsx";
import Footer from "../components/Footer.jsx";

const ShopScreen = () => {
  return (
    <div>
      <Header />
      <div className="pt-20 md:pt-24">
        <NavBarShop />
        <ShopItems />
        <Footer />
      </div>
    </div>

    // <div>
    //   <ShopContextProvider>
    //     <Router>
    //       <NavBarShop data={PRODUCTS} />
    //       <Routes>
    //         <Route path="/" element={<ShopScreen />} />
    //         <Route path="/cart" element={<Cart />} />
    //       </Routes>
    //     </Router>
    //   </ShopContextProvider>
    // </div>
  );
  // <section>
  //   <div className="p-screen " id="shop">
  //     <header className="pt-5 flex justify-center items-center ">
  //       <h1>Shop</h1>
  //     </header>

  //     <div className="mt-8">
  //       <p className="">
  //         Showing <span> 4 </span> of 40
  //       </p>
  //     </div>

  //     <ul className="mt-4 grid gap-4 grid-cols-2 lg:grid-cols-4">
  //       <li>
  //         <a href="#" className="group block overflow-hidden">
  //           <img
  //             className="h-[350px] w-full sm:w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
  //             src={blackTshirt}
  //             alt="slide_image"
  //           />
  //           <div className="relative bg-secondaryContainer pt-3">
  //             <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
  //               Basic Tee
  //             </h3>

  //             <p className="mt-2">
  //               <span className="sr-only"> Regular Price </span>

  //               <span className="tracking-wider text-gray-900">
  //                 {" "}
  //                 $24.00 GBP{" "}
  //               </span>
  //             </p>
  //           </div>
  //         </a>
  //       </li>
  //       <li>
  //         <a href="#" className="group block overflow-hidden">
  //           <img
  //             className="h-[350px] w-full sm:w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
  //             src={whiteTshirt}
  //             alt="slide_image"
  //           />
  //           <div className="relative bg-secondaryContainer pt-3">
  //             <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
  //               Basic Tee
  //             </h3>

  //             <p className="mt-2">
  //               <span className="sr-only"> Regular Price </span>

  //               <span className="tracking-wider text-gray-900">
  //                 {" "}
  //                 $24.00 GBP{" "}
  //               </span>
  //             </p>
  //           </div>
  //         </a>
  //       </li>
  //       <li>
  //         <a href="#" className="group block overflow-hidden">
  //           <img
  //             className="h-[350px] w-full sm:w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
  //             src={blueTshirt}
  //             alt="slide_image"
  //           />
  //           <div className="relative bg-secondaryContainer pt-3">
  //             <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
  //               Basic Tee
  //             </h3>

  //             <p className="mt-2">
  //               <span className="sr-only"> Regular Price </span>

  //               <span className="tracking-wider text-gray-900">
  //                 {" "}
  //                 $24.00 GBP{" "}
  //               </span>
  //             </p>
  //           </div>
  //         </a>
  //       </li>
  //       <li>
  //         <a href="#" className="group block overflow-hidden">
  //           <img
  //             className="h-[350px] w-full sm:w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
  //             src={whiteTshirt3}
  //             alt="slide_image"
  //           />
  //           <div className="relative bg-secondaryContainer pt-3">
  //             <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
  //               Basic Tee
  //             </h3>

  //             <p className="mt-2">
  //               <span className="sr-only"> Regular Price </span>

  //               <span className="tracking-wider text-gray-900">
  //                 {" "}
  //                 $24.00 GBP{" "}
  //               </span>
  //             </p>
  //           </div>
  //         </a>
  //       </li>
  //     </ul>
  //     <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
  //       <li>
  //         <a
  //           href="#"
  //           className="inline-flex size-8 items-center justify-center rounded border border-gray-100"
  //         >
  //           <span className="sr-only">Prev Page</span>
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             className="h-3 w-3"
  //             viewBox="0 0 20 20"
  //             fill="currentColor"
  //           >
  //             <path
  //               fillRule="evenodd"
  //               d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
  //               clipRule="evenodd"
  //             />
  //           </svg>
  //         </a>
  //       </li>

  //       <li>
  //         <a
  //           href="#"
  //           className="block size-8 rounded border border-gray-100 text-center leading-8"
  //         >
  //           1
  //         </a>
  //       </li>

  //       <li className="block size-8 rounded border-black bg-black text-center leading-8 text-white">
  //         2
  //       </li>

  //       <li>
  //         <a
  //           href="#"
  //           className="block size-8 rounded border border-gray-100 text-center leading-8"
  //         >
  //           3
  //         </a>
  //       </li>

  //       <li>
  //         <a
  //           href="#"
  //           className="block size-8 rounded border border-gray-100 text-center leading-8"
  //         >
  //           4
  //         </a>
  //       </li>

  //       <li>
  //         <a
  //           href="#"
  //           className="inline-flex size-8 items-center justify-center rounded border border-gray-100"
  //         >
  //           <span className="sr-only">Next Page</span>
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             className="h-3 w-3"
  //             viewBox="0 0 20 20"
  //             fill="currentColor"
  //           >
  //             <path
  //               fillRule="evenodd"
  //               d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
  //               clipRule="evenodd"
  //             />
  //           </svg>
  //         </a>
  //       </li>
  //     </ol>
  //   </div>
  // </section>
};

export default ShopScreen;

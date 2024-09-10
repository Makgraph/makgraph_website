import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { ShoppingCart, UserCircle } from "phosphor-react";
import { selectCartTotalItems } from "../../redux/Cart/cartSlice";
import Dropdown from "../dropdownMenu/dropdown"; // Assurez-vous que ce chemin est correct
import SecondHeader from "./SecondHeader"; // Assurez-vous que ce chemin est correct
import { navLinks } from "../../constants/index"; // Assurez-vous que ce chemin est correct

export default function Header(props) {
  // const { keyword: initialKeyword, pageNumber: initialPageNumber } = props;
  const [open, setOpen] = useState(false);
  const totalQuantity = useSelector(selectCartTotalItems);
  const { user } = useSelector((state) => state.auth); // Assurez-vous que ce chemin est correct
  const [keyword, setKeyword] = useState(""); // Ajoutez cet état pour keyword
  const [pageNumber, setPageNumber] = useState(1); // Ajoutez cet état pour pageNumber
  return (
    <div>
      <div className="z-10 fixed top-0 left-0 w-full">
        <div className="flex justify-center items-center md:justify-between bg-surfaceContainer py-2 md:px-6 lg:px-[156px] xl:px-[200px] sm:px-8 px-7">
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden flex text-3xl absolute left-6 top-6 cursor-pointer"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <div>
            <Link to="/">
              <img
                className="ml-32 sm:ml-10 w-16 h-12 sm:w-20 sm:h-14 md:ml-0 md:flex md:w-40 md:h-20"
                src="/assets/logo_Makgraph.png"
                alt="Logo"
              />
              {/* <img
                className="sm:hidden w-14 h-10 absolute top-5 left-32"
                src="/assets/logo_Makgraph.png"
                alt="Logo"
              /> */}
            </Link>
          </div>

          {/* MOBILE HEADER */}
          <div className="md:hidden absolute right-6 top-6">
            <div className="flex md:gap-3">
              {user ? (
                <Dropdown />
              ) : (
                <NavLink to="/Accueil/login">
                  <div className="px-2">
                    <UserCircle size={30} />
                  </div>
                </NavLink>
              )}
              <Link to="/cartScreen">
                <div className="relative">
                  <div className="bg-error absolute h-4 w-4 md:h-4 md:w-4 rounded-[50%] -right-1 -top-[5px] md:-right-2 md:-top-[6px]">
                    <span className="text-white font-sans text-[10px] md:text-[11px] md:pb-2 flex justify-center items-center">
                      {totalQuantity}
                    </span>
                  </div>
                  <ShoppingCart size={28} />
                </div>
              </Link>
            </div>
          </div>

          <div className="sm:flex w-full flex-col justify-center items-center">
            <SecondHeader
              keyword={keyword}
              setKeyword={setKeyword}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />

            <ul
              className={`md:flex md:items-center md:py-2 pb-12 absolute bg-surfaceContainer md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:px-0 pl-6 transition-all md:transition-none duration-500 ease-in ${
                open ? "top-[60px] opacity-100" : "top-[-490px]"
              } md:opacity-100 opacity-0`}
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="w-full md:w-[62px] text-[13px] font-serif h-5 justify-center items-center flex md:my-0 my-7 md:bg-surfaceContainer hover:bg-primary/10 duration-300"
                >
                  <NavLink
                    to={`/${link.title}`}
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-6 items-center md:flex hidden gap-2">
            <div>
              {user ? (
                <Dropdown />
              ) : (
                <Link to="/Accueil/login">
                  <div className="relative flex w-32 bg-onSecondaryContainer/5 p-1">
                    <UserCircle size={28} />
                    <button className="focus:bg-secondaryContainer">
                      <span className="text-[14px] font-serif px-transition hover:text-primary duration-300">
                        Se Connecter
                      </span>
                    </button>
                  </div>
                </Link>
              )}
            </div>
            <NavLink
              to="/cartScreen"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              <div className="relative flex bg-[#d3e2f7] hover:bg-[#b4d1f9] p-1">
                <ShoppingCart size={24} />
                <button className="focus:bg-secondaryContainer">
                  <h5 className="text-[14px] font-serif text-primary font-normal px-1 hover:bg-[#b4d1f9] duration-300">
                    Panier
                  </h5>
                </button>
                <div className="bg-error mt-1 h-4 w-4 md:h-4 md:w-4 rounded-[50%]">
                  <span className="text-white font-sans text-[10px] md:text-[11px] flex justify-center items-center">
                    {totalQuantity}
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import logoMakgraph from "/assets/logo_Makgraph.png";
// import { ShoppingCart, UserCircle } from "phosphor-react";
// import { NavLink, Link } from "react-router-dom";
// import { navLinks } from "../../constants/index";
// import { useSelector } from "react-redux";
// import { selectCartItems } from "../../redux/Cart/cartSlice";
// import Dropdown from "../dropdownMenu/dropdown";
// import SecondHeader from "./SecondHeader";
// import { useEffect } from "react";

// export default function Header(props) {
//   const { keyword: initialKeyword, pageNumber: initialPageNumber } = props;
//   const [open, setOpen] = useState(false);
//   const cartItems = useSelector(selectCartItems);
//   const { user } = useSelector((state) => state.auth);

//   // useEffect(() => {
//   //   if (!isInitialMount.current) {
//   //     // Fetch products when `pageNumber` changes
//   //     dispatch(fetchProducts({ keyword, pageNumber }));
//   //   } else {
//   //     isInitialMount.current = false;
//   //   }

//   //   return () => {
//   //     // Clear products when component unmounts or before fetching new products
//   //     dispatch(clearProducts());
//   //   };
//   // }, [dispatch, keyword, pageNumber]);

//   // État local pour gérer le mot-clé de recherche
//   const [keyword, setKeyword] = useState(initialKeyword || "");
//   const [pageNumber, setPageNumber] = useState(initialPageNumber || "");

//   return (
//     <div>
//       <div className=" z-10 fixed top-0 left-0 w-full">
//         <div className="flex justify-center items-center md:justify-between bg-surfaceContainer py-2 md:px-6 lg:px-[156px] xl:px-[200px] sm:px-8 px-7">
//           <div
//             onClick={() => setOpen(!open)}
//             className="md:hidden flex text-3xl absolute left-6 top-6 cursor-pointer"
//           >
//             <ion-icon name={open ? "close" : "menu"}></ion-icon>
//           </div>

//           <div>
//             <Link to="/">
//               <img
//                 className="flex sm:hidden w-20 h-14 md:flex md:w-40 md:h-20"
//                 src={logoMakgraph}
//               />
//             </Link>
//           </div>
//           {/* MOBILE HEADER */}
//           <div className="md:hidden absolute right-6 top-6">
//             <div className="flex md:gap-3">
//               {user ? (
//                 <div className="">
//                   <div className="flex">
//                     <Dropdown />
//                   </div>
//                 </div>
//               ) : (
//                 <NavLink to={`/Accueil/login`}>
//                   <div className="px-2">
//                     <UserCircle size={30} />
//                   </div>
//                 </NavLink>
//               )}
//               <Link to="/cartScreen">
//                 <div className="relative">
//                   <div className="bg-error absolute h-4 w-4 md:h-4 md:w-4 rounded-[50%] -right-1 -top-[5px] md:-right-2 md:-top-[6px]">
//                     <span className="text-white font-sans text-[10px] md:text-[11px] md:pb-2 flex justify-center items-center">
//                       {cartItems.length}
//                     </span>
//                   </div>

//                   <ShoppingCart size={28} />
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className=" flex w-full flex-col justify-center items-center">
//             <SecondHeader
//               keyword={keyword}
//               setKeyword={setKeyword}
//               pageNumber={pageNumber}
//               setPageNumber={setPageNumber}
//             />

//             <ul
//               className={`md:flex md:items-center md:py-2 pb-12 absolute bg-surfaceContainer md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:px-0 pl-6 transition-all md:transition-none duration-500 ease-in ${
//                 open ? "top-[81px] opacity-100" : "top-[-490px]"
//               } md:opacity-100 opacity-0`}
//             >
//               {navLinks.map((navLinks) => (
//                 <li
//                   key={navLinks.id}
//                   className="w-full md:w-[62px] text-[13px] font-serif h-5 justify-center items-center flex md:my-0 my-7 md:bg-surfaceContainer hover:bg-primary/10 duration-300"
//                 >
//                   <NavLink
//                     to={`/${navLinks.title}`}
//                     className={({ isActive }) => {
//                       return isActive ? " text-primary" : "";
//                     }}
//                   >
//                     {navLinks.title}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="h-6 items-center md:flex hidden gap-2">
//             <div>
//               {user ? (
//                 <div className="flex justify-center items-center w-32 h-screen">
//                   <Dropdown />
//                 </div>
//               ) : (
//                 <Link to="/Accueil/login">
//                   <div
//                     className={({ isActive }) => {
//                       return isActive ? " text-primary" : "";
//                     }}
//                   >
//                     <div className="relative flex w-32 bg-onSecondaryContainer/5 p-1">
//                       <UserCircle size={28} />
//                       <button className="focus:bg-secondaryContainer">
//                         <span className="text-[14px] font-serif px-transition hover:text-primary duration-300">
//                           Se Connecter
//                         </span>
//                       </button>
//                     </div>
//                   </div>
//                 </Link>
//               )}
//             </div>
//             <NavLink
//               to="/cartScreen"
//               className={({ isActive }) => {
//                 return isActive ? " text-primary" : "";
//               }}
//             >
//               <div className="relative flex bg-[#d3e2f7] hover:bg-[#b4d1f9] p-1">
//                 <ShoppingCart size={24} />
//                 <button className="focus:bg-secondaryContainer">
//                   <h5 className="text-[14px] font-serif text-primary font-normal px-1 hover:bg-[#b4d1f9] duration-300">
//                     Panier
//                   </h5>
//                 </button>
//                 <div className="bg-error mt-1 h-4 w-4 md:h-4 md:w-4 rounded-[50%] ">
//                   <span className="text-white font-sans text-[10px] md:text-[11px]  flex justify-center items-center">
//                     {cartItems.length}
//                   </span>
//                 </div>
//               </div>
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

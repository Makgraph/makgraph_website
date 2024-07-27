// import React from "react";
// import { Link } from "react-router-dom";

// const Pagination = (props) => {
//   const { page, pages, keyword = "" } = props;
//   return (
//     pages > 1 && (
//       <nav className="p-screen flex justify-center">
//         <ul className="flex py-8">
//           {[...Array(pages).keys()].map((x) => (
//             <li
//               key={x + 1}
//               className={`bg-onPrimary hover:bg-primary border-primary border-[1px] font-serif font-semibold hover:text-white cursor-pointer w-12 h-8 flex justify-center items-center ${
//                 x + 1 === page ? "bg-primary text-white" : ""
//               }`}
//             >
//               <Link
//                 to={
//                   keyword
//                     ? `/search/${keyword}/page/${x + 1}`
//                     : `/page/${x + 1}`
//                 }
//                 className="hover:text-white"
//               >
//                 {x + 1}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     )
//   );
// };

// export default Pagination;
import React from "react";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  const { page, pages, keyword = "" } = props;

  // Vérifiez si la page est la première ou la dernière pour désactiver les boutons
  const isFirstPage = page === 1;
  const isLastPage = page === pages;

  return (
    pages > 1 && (
      <nav className="flex  justify-center ">
        <ul className="flex items-center   py-8">
          {/* Bouton Précédent */}
          <li
            className={`cursor-pointer w-full h-8 flex justify-center items-center border-primary border-[1px] ${
              isFirstPage
                ? "bg-[#e5e7eb] text-[#6b7280] cursor-not-allowed"
                : "bg-onPrimary hover:bg-primary"
            }`}
          >
            <Link
              to={
                keyword
                  ? `/search/${keyword}/page/${page - 1}`
                  : `/page/${page - 1}`
              }
              className={`w-full h-full flex items-center justify-center ${
                isFirstPage ? "cursor-not-allowed" : "hover:text-white"
              }`}
            >
              Précédent
            </Link>
          </li>

          {/* Numéros de Page */}
          {[...Array(pages).keys()].map((x) => (
            <li
              key={x + 1}
              className={`bg-onPrimary hover:bg-primary border-primary border-[1px] font-serif font-semibold hover:text-white cursor-pointer w-24 h-8 flex justify-center items-center ${
                x + 1 === page ? "bg-primary text-white" : ""
              }`}
            >
              <Link
                to={
                  keyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/page/${x + 1}`
                }
                className="w-full h-full flex items-center justify-center hover:text-white"
              >
                {x + 1}
              </Link>
            </li>
          ))}

          {/* Bouton Suivant */}
          <li
            className={`cursor-pointer w-full h-8 flex justify-center items-center border-primary border-[1px] ${
              isLastPage
                ? "bg-[#e5e7eb] text-[#6b7280] cursor-not-allowed"
                : "bg-onPrimary hover:bg-primary"
            }`}
          >
            <Link
              to={
                keyword
                  ? `/search/${keyword}/page/${page + 1}`
                  : `/page/${page + 1}`
              }
              className={`w-full h-full flex items-center justify-center ${
                isLastPage ? "cursor-not-allowed" : "hover:text-white"
              }`}
            >
              Suivant
            </Link>
          </li>
        </ul>
      </nav>
    )
  );
};

export default Pagination;

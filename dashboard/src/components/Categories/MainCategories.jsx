import React, { useEffect, useState } from "react";
import CreateCategory from "./CreateCategory";
import CategoriesTable from "./CategoriesTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/categories/categoriesSlice";
import { Link } from "react-router-dom";
import Categorie from "./Categorie";
import LoadingSpinner from "../Loadingerror/loading";
import Message from "../Loadingerror/errorMessage";
import { resetDeleteSuccess } from "../../redux/categories/deleteCategorieSlice";
import SecondHeaderCategory from "./SecondHeaderCategory";
import PaginationCategory from "./PaginationCategory.jsx";

const MainCategories = (props) => {
  const {
    keyword: initialKeyword,
    pageNumber: initialPageNumber,
    category: initialCategory,
  } = props;
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState(initialKeyword || "");
  const [category, setCategory] = useState(initialCategory || "");

  const { categories, loading, error, page, pages } = useSelector(
    (state) => state.categories
  );

  const { error: errorDelete, success: successDelete } = useSelector(
    (state) => state.categoryDelete
  );

  useEffect(() => {
    dispatch(
      fetchCategories({ keyword, pageNumber: initialPageNumber, category })
    );
  }, [dispatch, keyword, initialPageNumber, category]);

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(fetchCategories({ keyword, pageNumber: page - 1, category }));
    }
  };

  const handleNextPage = () => {
    if (page < pages) {
      dispatch(fetchCategories({ keyword, pageNumber: page + 1, category }));
    }
  };

  useEffect(() => {
    if (successDelete) {
      dispatch(resetDeleteSuccess());
    }
  }, [successDelete, dispatch]);

  return (
    <section className="sm:border-x-[1px] p-2 sm:p-4 border-b-secondary sm:flex sm:flex-col sm:py-4">
      <div className="flex justify-between my-4">
        <p className="text-lg sm:text-2xl font-serif font-semibold">
          Categories
        </p>
        <Link to="/addCategorie">
          <button>
            <span className="font-serif font-semibold rounded-sm text-sm sm:text-base text-onPrimary bg-[#22c55e] hover:bg-[#30a95c] p-1 sm:p-2 ">
              Create New
            </span>
          </button>
        </Link>
      </div>

      <div>
        <SecondHeaderCategory
          keyword={keyword}
          setKeyword={setKeyword}
          category={category}
          setCategory={setCategory}
        />
      </div>
      {errorDelete && (
        <Message>
          <div className=" m-4 p-4">
            <Message variant="bg-[#fee2e2] text-[#991b1b]">
              {errorDelete}
            </Message>
          </div>
        </Message>
      )}
      <div className="w-full justify-between sm:gap-6 md:gap-8 sm:flex">
        {loading ? (
          <div className="flex justify-center items-center min-h-[259.67px]">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <Message>
            <div className=" m-4 p-4">
              <Message variant="bg-[#fee2e2] text-[#991b1b]">{error}</Message>
            </div>
          </Message>
        ) : (
          <div className="gap-10 sm:mt-4 items-center justify-center grid md:grid-cols-4 grid-cols-2 min-h-[259.67px]">
            {categories.map((categorie) => (
              <Categorie categorie={categorie} key={categorie._id} />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center sm:justify-end">
        <PaginationCategory
          pages={pages}
          page={page}
          keyword={keyword ? keyword : ""}
          category={category}
        />
      </div>
    </section>
  );
};

export default MainCategories;

// import React, { useEffect, useState } from "react";
// import CreateCategory from "./CreateCategory";
// import CategoriesTable from "./CategoriesTable";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCategories } from "../../redux/categories/categoriesSlice";
// import { Link } from "react-router-dom";
// // import SecondHeaderCategory from "../Categoriess/SecondHeaderCategory";
// import Categorie from "./Categorie";
// import LoadingSpinner from "../Loadingerror/loading";
// import Message from "../Loadingerror/errorMessage";
// import { resetDeleteSuccess } from "../../redux/categories/deleteCategorieSlice";
// import SecondHeaderCategory from "./SecondHeaderCategory";
// import PaginationCategory from "./PaginationCategory.jsx";

// const MainCategories = (props) => {
//   const { keyword: initialKeyword, pageNumber } = props;
//   const dispatch = useDispatch();

//   // État local pour gérer le mot-clé de recherche
//   const [keyword, setKeyword] = useState(initialKeyword || "");

//   const { categories, loading, error, page, pages } = useSelector(
//     (state) => state.categories
//   );

//   const { error: errorDelete, success: successDelete } = useSelector(
//     (state) => state.categoryDelete
//   );

//   useEffect(() => {
//     dispatch(fetchCategories({ keyword, pageNumber }));
//   }, [dispatch, keyword, pageNumber]);

//   // Fonctions pour naviguer entre les pages
//   const handlePrevPage = () => {
//     if (page > 1) {
//       dispatch(fetchCategories({ keyword, pageNumber: page - 1 }));
//     }
//   };

//   const handleNextPage = () => {
//     if (page < pages) {
//       dispatch(fetchCategories({ keyword, pageNumber: page + 1 }));
//     }
//   };

//   // Réinitialisation successDelete après traitement
//   useEffect(() => {
//     if (successDelete) {
//       dispatch(resetDeleteSuccess());
//     }
//   }, [successDelete, dispatch]);

//   return (
//     <section className="sm:border-x-[1px] p-2 sm:p-4 border-b-secondary sm:flex sm:flex-col sm:py-4">
//       <div className="flex justify-between my-4">
//         <p className="text-lg sm:text-2xl font-serif font-semibold">
//           Categories
//         </p>
//         <Link to="/addCategorie">
//           <button>
//             <span className="font-serif font-semibold rounded-sm text-sm sm:text-base text-onPrimary bg-[#22c55e] hover:bg-[#30a95c] p-1 sm:p-2 ">
//               Create New
//             </span>
//           </button>
//         </Link>
//       </div>

//       <div>
//         <SecondHeaderCategory keyword={keyword} setKeyword={setKeyword} />
//       </div>
//       {errorDelete && (
//         <Message>
//           <div className=" m-4 p-4">
//             <Message variant="bg-[#fee2e2] text-[#991b1b]">
//               {errorDelete}
//             </Message>
//           </div>
//         </Message>
//       )}
//       <div className="w-full justify-between sm:gap-6 md:gap-8 sm:flex">
//         {loading ? (
//           <div className="flex justify-center items-center">
//             <LoadingSpinner />
//           </div>
//         ) : error ? (
//           <Message>
//             <div className=" m-4 p-4">
//               <Message variant="bg-[#fee2e2] text-[#991b1b]">{error}</Message>
//             </div>
//           </Message>
//         ) : (
//           <>
//             <div className="gap-10 sm:mt-4 items-center justify-center grid md:grid-cols-4 grid-cols-2">
//               {/* Products */}
//               {categories.map((categorie) => (
//                 <Categorie categorie={categorie} key={categorie._id} />
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//       <div className="flex justify-center  sm:justify-end ">
//         <PaginationCategory
//           pages={pages}
//           page={page}
//           keyword={keyword ? keyword : ""}
//         />
//       </div>
//       {/* <div className="border border-[#d1d5db]"> */}
//       <div>
//         <div className="sm:flex ">
//           {/* Create Category */}
//           <div className="sm:w-1/3">{/* <CreateCategory /> */}</div>
//           {/* Categories Table */}
//           <div className="sm:w-2/3">
//             {/* <CategoriesTable
//                 categories={categories}
//                 loading={loading}
//                 error={error}
//               /> */}
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//     </section>
//   );
// };

// export default MainCategories;

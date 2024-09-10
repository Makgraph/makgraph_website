import React, { useEffect, useState } from "react";
import Header from "../components/headerComponent/Header";
import Footer from "../components/Footer";
import {
  clearCategories,
  fetchCategories,
} from "../redux/categories/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Message from "../components/loadingError/errorMessage";
import LoadingSpinner from "../components/loadingError/loading";
import PaginationGalery from "../components/galleryComponent/PaginationGalery";
import Categorie from "../components/galleryComponent/Categorie";
import SecondHeaderGallery from "../components/galleryComponent/SecondHeaderGallery";

const GalleryScreen = () => {
  const {
    keyword: initialKeyword,
    pageNumber: initialPageNumber,
    category: initialCategory,
  } = useParams();
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState(initialKeyword || "");
  const [category, setCategory] = useState(initialCategory || "");
  const pageNumber = Number(initialPageNumber) || 1;

  const { categories, loading, error, page, pages } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(
      fetchCategories({ keyword, pageNumber: initialPageNumber, category })
    );
  }, [dispatch, keyword, initialPageNumber, category]);

  useEffect(() => {
    dispatch(fetchCategories({ keyword, pageNumber, category }));
    return () => {
      dispatch(clearCategories());
    };
  }, [dispatch, keyword, pageNumber, category]);

  return (
    <div>
      <Header />
      <div className="p-screen pt-16 sm:pt-20 md:pt-28">
        <div className="w-[100%] flex justify-center items-center py-2 md:py-4">
          <div className="flex justify-center">
            <h2 className="text-[20px] font-serif font-medium md:text-[28px]">
              Galerie
            </h2>
          </div>
        </div>
        {error ? (
          <Message variant="bg-danger dark:bg-danger-dark text-white">
            {error}
          </Message>
        ) : (
          <div>
            <SecondHeaderGallery
              keyword={keyword}
              setKeyword={setKeyword}
              category={category}
              setCategory={setCategory}
            />
          </div>
        )}

        <div className="relative">
          {loading && (
            <div className=" min-h-[249.83px] flex justify-center items-center opacity-75 ">
              <LoadingSpinner />
            </div>
          )}
          <div className={loading ? "opacity-50" : ""}>
            <div className="pt-4">
              <div className="justify-items-center items-center grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {categories.map((categorie) => (
                  <Categorie categorie={categorie} key={categorie._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center min-h-[96px] ">
          <PaginationGalery pages={pages} page={page} category={category} />
        </div>
      </div>
      <div className="">
        {/* <div className=""> */}
        <Footer />
      </div>
    </div>
  );
};

export default GalleryScreen;

// import React, { useEffect, useState } from "react";
// import Header from "../components/headerComponent/Header";
// import Footer from "../components/Footer";
// import {
//   clearCategories,
//   fetchCategories,
// } from "../redux/categories/categoriesSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import Message from "../components/loadingError/errorMessage";
// import LoadingSpinner from "../components/loadingError/loading";
// import PaginationGalery from "../components/galleryComponent/PaginationGalery";
// import Categorie from "../components/galleryComponent/Categorie";
// import SecondHeaderGallery from "../components/galleryComponent/SecondHeaderGallery";

// const GalleryScreen = () => {
//   const {
//     keyword: initialKeyword,
//     pageNumber: initialPageNumber,
//     category: initialCategory,
//   } = useParams();
//   const dispatch = useDispatch();

//   const [keyword, setKeyword] = useState(initialKeyword || "");
//   const [category, setCategory] = useState(initialCategory || "");
//   const pageNumber = Number(initialPageNumber) || 1;

//   const { categories, loading, error, page, pages } = useSelector(
//     (state) => state.categories
//   );

//   useEffect(() => {
//     dispatch(
//       fetchCategories({ keyword, pageNumber: initialPageNumber, category })
//     );
//   }, [dispatch, keyword, initialPageNumber, category]);

//   const handlePrevPage = () => {
//     if (page > 1) {
//       dispatch(fetchCategories({ keyword, pageNumber: page - 1, category }));
//     }
//   };

//   const handleNextPage = () => {
//     if (page < pages) {
//       dispatch(fetchCategories({ keyword, pageNumber: page + 1, category }));
//     }
//   };

//   useEffect(() => {
//     // Fetch categories when component mounts or keyword, category, or pageNumber changes
//     dispatch(fetchCategories({ keyword, pageNumber, category }));

//     // Clear categories on component unmount
//     return () => {
//       dispatch(clearCategories());
//     };
//   }, [dispatch, keyword, pageNumber, category]);

//   if (error) {
//     return (
//       <Message variant="bg-danger dark:bg-danger-dark text-white">
//         {error}
//       </Message>
//     );
//   }

//   return (
//     <div>
//       <Header />
//       <div className="p-screen pt-20 md:pt-28">
//         <div className="w-[100%]  flex justify-center items-center py-2 md:py-5">
//           <div className="flex justify-center">
//             <h2 className="text-[20px]  font-serif font-medium md:text-[28px]">
//               Ma Galerie
//             </h2>
//           </div>
//         </div>
//         <div>
//           <SecondHeaderGallery
//             keyword={keyword}
//             setKeyword={setKeyword}
//             category={category}
//             setCategory={setCategory}
//           />
//         </div>
//         {loading ? (
//           <div className="flex p-20 justify-center items-center">
//             <LoadingSpinner />
//           </div>
//         ) : (
//           <div className="pt-4">
//             <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-12">
//               {categories.map((categorie) => (
//                 <Categorie categorie={categorie} key={categorie._id} />
//               ))}
//             </div>
//           </div>
//         )}
//         <PaginationGalery
//           pages={pages}
//           page={page}
//           keyword={keyword ? keyword : ""}
//           category={category}
//         />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default GalleryScreen;

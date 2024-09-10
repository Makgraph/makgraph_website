import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Message from "../Loadingerror/errorMessage";
import LoadingSpinner from "../Loadingerror/loading";
import { editCategory } from "../../redux/categories/categoriesSlice";

const MainEditAddCategory = (props) => {
  const { categoryId } = props;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();
  const { loading, error, categories } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    // Récupérer la catégorie existante à partir du state Redux
    const categoryToUpdate = categories.find((cat) => cat._id === categoryId);
    if (categoryToUpdate) {
      setTitle(categoryToUpdate.title);
      setCategory(categoryToUpdate.category);
      setUrl(categoryToUpdate.url);
      setDescription(categoryToUpdate.description);
    }
  }, [categories, categoryId]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      editCategory({
        categoryId,
        updatedCategoryData: {
          title: title || undefined,
          category: category || undefined,
          url: url || undefined,
          description: description || undefined,
        },
      })
    );
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   // Préparer les données de formulaire
  //   const updatedCategoryData = {
  //     title: title || undefined,
  //     category: category || undefined,
  //     url: url || undefined,
  //     description: description || undefined,
  //   };
  //   // Ajouter le fichier si présent
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append("title", title);
  //     formData.append("category", category);
  //     formData.append("url", url);
  //     formData.append("description", description);
  //     formData.append("file", file);
  //     dispatch(
  //       editCategory({
  //         categoryId,
  //         updatedCategoryData: formData,
  //       })
  //     );
  //   } else {
  //     dispatch(
  //       editCategory({
  //         categoryId,
  //         updatedCategoryData,
  //       })
  //     );
  //   }
  // };

  return (
    <section className="p-2 sm:p-4 border-l">
      <form onSubmit={submitHandler}>
        <div className="sm:flex justify-between items-center">
          <Link
            to="/categories"
            className="text-sm sm:text-base text-onPrimary font-serif bg-danger rounded-sm p-1 sm:p-2"
          >
            Go to categories
          </Link>
          <p className="py-2 sm:py-0 text-sm sm:text-xl font-semibold font-serif text-onSurface">
            Update Category
          </p>
          <div>
            <button
              type="submit"
              className="text-sm sm:text-base text-onPrimary font-serif bg-[#22c55e] hover:bg-[#30a95c] focus:shadow-md rounded-sm p-1 sm:p-2"
            >
              Publish now
            </button>
          </div>
        </div>
        {error && (
          <Message>
            <div className="m-4 p-4">
              <Message variant="bg-[#fee2e2] text-[#991b1b]">{error}</Message>
            </div>
          </Message>
        )}
        {loading && <LoadingSpinner />}
        <div className="border border-[#d1d5db] shadow-lg w-full md:w-[60%] my-2 sm:my-4">
          <div className="p-2 flex flex-col gap-2 sm:gap-4 sm:py-6 sm:px-4">
            <div>
              <label
                htmlFor="category_title"
                className="font-serif text-sm sm:text-base"
              >
                Category title
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2 outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                id="category_title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="category_category"
                className="font-serif text-sm sm:text-base"
              >
                Category
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2 outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                id="category_category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="category_url"
                className="font-serif text-sm sm:text-base"
              >
                URL
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2 outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                id="category_url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="category_description"
                className="font-serif text-sm sm:text-base"
              >
                Description
              </label>
              <textarea
                placeholder="Type here"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2 outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                rows="7"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="category_image"
                className="font-serif text-sm sm:text-base"
              >
                Images
              </label>
              <input
                type="text"
                placeholder="Enter Image URL"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2 outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <input
                type="file"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2 outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default MainEditAddCategory;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import Message from "../Loadingerror/errorMessage";
// import LoadingSpinner from "../Loadingerror/loading";
// import { editCategory } from "../../redux/categories/categoriesSlice";

// const MainEditAddCategorie = (props) => {
//   const { categoryId } = props;

//   // États pour les champs du formulaire
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [url, setUrl] = useState("");
//   const [description, setDescription] = useState("");
//   const [file, setFile] = useState(null);

//   const dispatch = useDispatch();
//   const { categories, loading, error } = useSelector(
//     (state) => state.categories
//   );

//   useEffect(() => {
//     // Récupérer l'élément existant à partir du state Redux
//     const elementToUpdate = categories.find(
//       (categorie) => categorie._id === categoryId
//     );
//     if (elementToUpdate) {
//       setTitle(elementToUpdate.title);
//       setCategory(elementToUpdate.category);
//       setUrl(elementToUpdate.url);
//       setDescription(elementToUpdate.description);
//     }
//   }, [categories, categoryId]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(
//       editCategory({
//         categoryId,
//         updatedCategoryData: {
//           title: title || undefined,
//           category: category || undefined,
//           url: url || undefined,
//           description: description || undefined,
//         },
//       })
//     );
//   };

//   return (
//     <section className="p-2 sm:p-4 border-l">
//       <form onSubmit={submitHandler}>
//         <div className=" sm:flex justify-between items-center ">
//           <Link
//             to="/categories"
//             className="text-sm sm:text-base text-onPrimary font-serif bg-danger rounded-sm p-1 sm:p-2"
//           >
//             Go to Categories
//           </Link>
//           <p className="py-2 sm:py-0 text-sm sm:text-xl font-semibold font-serif text-onSurface">
//             Update Category
//           </p>

//           <div>
//             <button
//               type="submit"
//               className="text-sm sm:text-base text-onPrimary font-serif bg-[#22c55e] hover:bg-[#30a95c] focus:shadow-md rounded-sm p-1 sm:p-2"
//             >
//               Publish now
//             </button>
//           </div>
//         </div>
//         {error && (
//           <Message>
//             <div className=" m-4 p-4">
//               <Message variant="bg-[#fee2e2] text-[#991b1b]">{error}</Message>
//             </div>
//           </Message>
//         )}
//         {loading && <LoadingSpinner />}
//         <div className="border border-[#d1d5db] shadow-lg w-full md:w-[60%] my-2 sm:my-4">
//           <div className="p-2 flex flex-col gap-2 sm:gap-4 sm:py-6 sm:px-4">
//             <div>
//               <label
//                 htmlFor="item_title"
//                 className="font-serif text-sm sm:text-base"
//               >
//                 Title
//               </label>
//               <input
//                 type="text"
//                 placeholder="Type here"
//                 className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
//                 id="item_title"
//                 required
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="item_category"
//                 className="font-serif text-sm sm:text-base"
//               >
//                 category
//               </label>
//               <input
//                 type="text"
//                 placeholder="Type here"
//                 className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
//                 id="item_category"
//                 required
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="category_title"
//                 className="font-serif text-sm sm:text-base"
//               >
//                 Description
//               </label>
//               <textarea
//                 placeholder="Type here"
//                 className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
//                 rows="7"
//                 required
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               ></textarea>
//             </div>
//             <div className="flex flex-col gap-2">
//               <label
//                 htmlFor="item_url"
//                 className="font-serif text-sm sm:text-base"
//               >
//                 Url
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Image URL"
//                 className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
//                 id="item_url"
//                 value={url}
//                 onChange={(e) => setUrl(e.target.value)}
//               />
//               <input
//                 type="file"
//                 className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
//               />
//             </div>
//           </div>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default MainEditAddCategorie;

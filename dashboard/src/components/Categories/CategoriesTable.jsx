import React from "react";
import { IonIcon } from "@ionic/react";
import { trash } from "ionicons/icons";
import LoadingSpinner from "../Loadingerror/loading";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../redux/categories/deleteCategorieSlice";

const CategoriesTable = ({ categories, loading, error }) => {
  const dispatch = useDispatch();

  const handleDelete = (categoryId) => {
    if (
      window.confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?")
    ) {
      dispatch(deleteCategory(categoryId));
    }
  };

  return (
    <div className="my-2 sm:my-4 px-2 sm:px-4 overflow-x-auto">
      <div className="mx-auto mt-4">
        {loading ? (
          <div className="flex justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <div className="m-4 p-4 bg-[#fee2e2] text-[#991b1b] rounded">
            {error}
          </div>
        ) : (
          <div className="bg-white rounded my-3">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-[#e5e7eb] text-[#4b5563] font-serif text-sm leading-normal border-b">
                  <th className="py-2 px-6 text-left">ID</th>
                  <th className="py-2 px-6 text-left">Titre</th>
                  <th className="py-2 px-6 text-left">Description</th>
                  <th className="py-2 px-6 text-left">Categorie</th>
                  <th className="py-2 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="text-[#4b5563] text-sm font-serif">
                {categories.map((categorie) => (
                  <tr key={categorie._id} className="border-b border-[#d1d5db]">
                    <td className="py-2 px-6 text-left">{categorie._id}</td>
                    <td className="py-2 px-6 text-left">{categorie.title}</td>
                    <td className="py-2 px-6 text-left">
                      {categorie.description}
                    </td>
                    <td className="py-2 px-6 text-left">
                      {categorie.category}
                    </td>
                    <td className="py-2 px-6 text-left">
                      <button
                        className="text-danger hover:text-danger/85"
                        onClick={() => handleDelete(categorie._id)}
                      >
                        <IonIcon icon={trash} className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesTable;

// import React from "react";
// import { useDispatch } from "react-redux";
// import { IonIcon } from "@ionic/react";
// import { trash } from "ionicons/icons"; // Importation de l'icône de poubelle
// import LoadingSpinner from "../Loadingerror/loading";
// import { deleteCategory } from "../../redux/categories/categoriesSlice";

// const CategoriesTable = ({ categories, loading, error }) => {
//   const dispatch = useDispatch();

//   // Fonction pour gérer la suppression d'une catégorie
//   const handleDelete = (id) => {
//     if (
//       window.confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?")
//     ) {
//       dispatch(deleteCategory(id));
//     }
//   };

//   return (
//     <div className="my-2 sm:my-4 px-2 sm:px-4 overflow-x-auto">
//       <div className="mx-auto mt-4">
//         {loading ? (
//           <div className="flex justify-center items-center">
//             <LoadingSpinner />
//           </div>
//         ) : error ? (
//           <div className="m-4 p-4 bg-[#fee2e2] text-[#991b1b] rounded">
//             {error}
//           </div>
//         ) : (
//           <div className="bg-white rounded my-3">
//             <table className="min-w-max w-full table-auto">
//               <thead>
//                 <tr className="bg-[#e5e7eb] text-[#4b5563] font-serif text-sm leading-normal border-b">
//                   <th className="py-2 px-6 text-left">ID</th>
//                   <th className="py-2 px-6 text-left">Titre</th>
//                   <th className="py-2 px-6 text-left">Description</th>
//                   <th className="py-2 px-6 text-left">Categorie</th>
//                   <th className="py-2 px-6 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="text-[#4b5563] text-sm font-serif">
//                 {categories.map((categorie) => (
//                   <tr key={categorie._id} className="border-b border-[#d1d5db]">
//                     <td className="py-2 px-6 text-left">{categorie._id}</td>
//                     <td className="py-2 px-6 text-left">{categorie.title}</td>
//                     <td className="py-2 px-6 text-left">
//                       {categorie.description}
//                     </td>
//                     <td className="py-2 px-6 text-left">
//                       {categorie.category}
//                     </td>
//                     <td className="py-2 px-6 text-left">
//                       <button
//                         onClick={() => handleDelete(categorie._id)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <IonIcon icon={trash} className="h-4 w-4" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoriesTable;

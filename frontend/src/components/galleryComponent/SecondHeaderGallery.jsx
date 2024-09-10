import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons";
import { useNavigate } from "react-router-dom";

const SecondHeaderGallery = ({ category, setCategory }) => {
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setCategory(newCategory);

    // Build the URL correctly
    const url =
      newCategory === "All Categories"
        ? `/galerie`
        : `/galerie/category/${encodeURIComponent(newCategory)}`;

    navigate(url);
  };

  return (
    <div className="bg-white border border-[#d4d6d8] py-2 sm:py-2 px-4 sm:px-2 sm:gap-4 md:gap-20 sm:flex sm:justify-between sm:items-center relative">
      <div className="flex gap-3 sm:gap-4 items-center">
        {/* Categories Select */}
        <div className="relative flex items-center">
          <label htmlFor="category-select" className="sr-only">
            Select Category
          </label>
          <select
            id="category-select"
            value={category}
            onChange={handleCategoryChange}
            className="bg-white border border-[#d1d5db] font-serif rounded-sm py-2 px-4 text-sm sm:text-base outline-none focus:border-primary focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
          >
            <option value="All Categories" className="font-serif">
              All Categories
            </option>
            <option value="image" className="font-serif">
              Image
            </option>
            <option value="video" className="font-serif">
              Video
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SecondHeaderGallery;

// import { useState } from "react";
// import { IonIcon } from "@ionic/react";
// import { searchOutline, chevronDownOutline } from "ionicons/icons";
// import { useNavigate } from "react-router-dom";

// const SecondHeaderGallery = ({
//   keyword,
//   setKeyword,
//   category,
//   setCategory,
// }) => {
//   const navigate = useNavigate();
//   // const [dropdownOpen, setDropdownOpen] = useState(false);

//   // const toggleDropdown = () => {
//   //   setDropdownOpen(!dropdownOpen);
//   // };
//   const handleCategoryChange = (event) => {
//     const newCategory = event.target.value;
//     setCategory(newCategory);
//     // const handleCategorySelect = (newCategory) => {
//     //   setCategory(newCategory); // Update the category in the parent component
//     //   setDropdownOpen(false);

//     // Build the URL correctly
//     const url = keyword.trim()
//       ? `/galerie/search/${encodeURIComponent(
//           keyword
//         )}/category/${encodeURIComponent(
//           newCategory === "All Categories" ? "" : newCategory
//         )}`
//       : `/galerie/search/category/${encodeURIComponent(
//           newCategory === "All Categories" ? "" : newCategory
//         )}`;

//     navigate(url);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     // Build the URL correctly
//     const url = keyword.trim()
//       ? `/galerie/search/${encodeURIComponent(
//           keyword
//         )}/category/${encodeURIComponent(
//           category === "All Categories" ? "" : category
//         )}`
//       : `/galerie/search/category/${encodeURIComponent(
//           category === "All Categories" ? "" : category
//         )}`;

//     navigate(url);
//   };

//   return (
//     <div className="bg-white border border-[#d4d6d8] py-2 sm:py-2 px-4 sm:px-2 sm:gap-4 md:gap-20 sm:flex sm:justify-between sm:items-center relative">
//       {/* Search Bar */}
//       <form onSubmit={submitHandler} className="flex items-center">
//         <div className="relative flex-1">
//           {/* Icon */}
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <IonIcon icon={searchOutline} className="text-[#4b5563]" />
//           </div>
//           {/* Input Field */}
//           <input
//             type="text"
//             placeholder="Rechercher..."
//             className="bg-[#e5e7eb] w-full text-sm sm:text-base text-[#1f2937] rounded-sm py-2 pl-10 md:pr-4 outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
//             onChange={(e) => setKeyword(e.target.value)}
//             value={keyword}
//             aria-label="Rechercher un titre"
//           />
//         </div>
//         {/* Styled Search Button */}
//         <button
//           type="submit"
//           className="ml-0 px-4 py-2 bg-primary text-white font-semibold rounded-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
//         >
//           Search
//         </button>
//       </form>

//       <div className="flex gap-3 sm:gap-4 items-center">
//         {/* Categories Select */}
//         <div className="relative flex items-center ">
//           <label htmlFor="category-select" className=" sr-only">
//             Select Category
//           </label>
//           <select
//             id="category-select"
//             value={category}
//             onChange={handleCategoryChange}
//             className="bg-white border border-[#d1d5db] font-serif rounded-sm py-2 px-4 text-sm sm:text-base outline-none focus:border-primary focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
//           >
//             <option value="All Categories" className="font-serif">
//               All Categories
//             </option>
//             <option value="image" className="font-serif ">
//               Image
//             </option>
//             <option value="video" className="font-serif ">
//               Video
//             </option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecondHeaderGallery;

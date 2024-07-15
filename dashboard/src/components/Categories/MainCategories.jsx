import React from "react";
import CreateCategory from "./CreateCategory";
import CategoriesTable from "./CategoriesTable";

const MainCategories = () => {
  return (
    <section className="p-2 sm:p-4 sm:border-l">
      <div>
        <p className="text-lg sm:text-2xl font-serif font-semibold">
          Categories
        </p>
      </div>

      <div className="border border-[#d1d5db]">
        <div>
          <div className="sm:flex ">
            {/* Create Category */}
            <div className="sm:w-1/3">
              <CreateCategory />
            </div>
            {/* Categories Table */}
            <div className="sm:w-2/3">
              <CategoriesTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCategories;

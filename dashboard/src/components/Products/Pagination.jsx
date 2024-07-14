import React from "react";

const Pagination = () => {
  return (
    <nav className=" ">
      <div className="flex py-8 hover:text-onPrimary">
        <div className="bg-onPrimary text-sm sm:text-base  text-onSurface hover:bg-primary  border-primary border-[1px] font-serif font-semibold hover:text-white cursor-pointer w-auto min-w-12 p-1 h-8 flex justify-center items-center">
          Précédent
        </div>
        <div className="bg-primary text-sm sm:text-base  text-onPrimary hover:bg-primary  border-primary border-[1px] font-serif font-semibold hover:text-white cursor-pointer w-auto min-w-12 p-1 h-8 flex justify-center items-center">
          1
        </div>
        <div className="bg-onPrimary text-sm sm:text-base  text-onSurface hover:bg-primary  border-primary border-[1px] font-serif font-semibold hover:text-white cursor-pointer w-auto min-w-12 p-1 h-8 flex justify-center items-center">
          2
        </div>
        <div className="bg-onPrimary text-sm sm:text-base  text-onSurface hover:bg-primary  border-primary border-[1px] font-serif font-semibold hover:text-white cursor-pointer w-auto min-w-12 p-1 h-8 flex justify-center items-center">
          3
        </div>
        <div className="bg-onPrimary text-sm sm:text-base  text-onSurface hover:bg-primary  border-primary border-[1px] font-serif font-semibold hover:text-white cursor-pointer w-auto min-w-12 p-1 h-8 flex justify-center items-center">
          Suivant
        </div>
      </div>
    </nav>
  );
};

export default Pagination;

import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <nav className="p-screen flex justify-center">
      <ul className="flex py-8">
        <li className="bg-onPrimary hover:bg-primary border-primary border-[1px] hover:text-white cursor-pointer w-12 h-8 flex justify-center items-center">
          <Link to={"#"} className="hover:text-white">
            1
          </Link>
        </li>
        <li className="bg-onPrimary hover:bg-primary border-primary border-[1px] hover:text-white cursor-pointer w-12 h-8 flex justify-center items-center">
          <Link to={"#"} className="hover:text-white">
            2
          </Link>
        </li>
        <li className="bg-onPrimary hover:bg-primary border-primary border-[1px] hover:text-white cursor-pointer w-12 h-8 flex justify-center items-center">
          <Link to={"#"} className="hover:text-white">
            3
          </Link>
        </li>
        <li className="bg-onPrimary hover:bg-primary border-primary border-[1px] hover:text-white cursor-pointer w-12 h-8 flex justify-center items-center">
          <Link to={"#"} className="hover:text-white">
            4
          </Link>
        </li>
        <li className="bg-onPrimary hover:bg-primary border-primary border-[1px] hover:text-white cursor-pointer w-12 h-8 flex justify-center items-center">
          <Link to={"#"} className="hover:text-white">
            5
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ pages, page, basePath }) => {
  return (
    <nav className="p-screen flex justify-center">
      <ul className="flex py-8">
        {[...Array(pages).keys()].map((x) => (
          <Link
            to={`${basePath}?pageNumber=${x + 1}`}
            className="hover:text-white"
          >
            <li
              key={x + 1}
              className={`bg-onPrimary hover:bg-primary border-primary border-[1px] font-serif font-semibold hover:text-white cursor-pointer w-12 h-8 flex justify-center items-center ${
                x + 1 === page ? "bg-primary text-white" : ""
              }`}
            >
              {x + 1}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

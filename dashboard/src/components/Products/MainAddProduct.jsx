import React from "react";
import { Link } from "react-router-dom";

const MainAddProduct = () => {
  return (
    <section className="p-2 sm:p-4 border-l">
      <form>
        <div className=" sm:flex justify-between items-center ">
          <Link
            to="/products"
            className="text-sm sm:text-base text-onPrimary font-serif bg-danger rounded-sm p-1 sm:p-2"
          >
            Go to products
          </Link>
          <p className="py-2 sm:py-0 text-sm sm:text-xl font-semibold font-serif text-onSurface">
            Add product
          </p>

          <div>
            <button
              type="submit"
              className="text-sm sm:text-base text-onPrimary font-serif bg-[#22c55e] rounded-sm p-1 sm:p-2"
            >
              Publish now
            </button>
          </div>
        </div>

        <div className="border border-[#d1d5db] shadow-lg w-full md:w-[60%] my-2 sm:my-4">
          <div className="p-2 flex flex-col gap-2 sm:gap-4 sm:py-6 sm:px-4">
            <div>
              <label
                htmlFor="product_title"
                className="font-serif text-sm sm:text-base"
              >
                Product title
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                id="product_title"
                required
              />
            </div>
            <div>
              <label
                htmlFor="product_price"
                className="font-serif text-sm sm:text-base"
              >
                Price
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                id="product_price"
                required
              />
            </div>
            <div>
              <label
                htmlFor="product_title"
                className="font-serif text-sm sm:text-base"
              >
                Count In Stock
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                id="product_price"
                required
              />
            </div>
            <div>
              <label
                htmlFor="product_title"
                className="font-serif text-sm sm:text-base"
              >
                Description
              </label>
              <textarea
                placeholder="Type here"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                rows="7"
                required
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="product_title"
                className="font-serif text-sm sm:text-base"
              >
                Images
              </label>
              <input
                type="text"
                placeholder="Inter Image URL"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
              />
              <input
                type="file"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default MainAddProduct;

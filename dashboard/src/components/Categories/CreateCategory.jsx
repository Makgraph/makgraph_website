import React from "react";

const CreateCategory = () => {
  return (
    <section>
      <form>
        <div className=" w-full my-2 sm:my-4">
          <div className="p-2 flex flex-col gap-2 sm:gap-4 sm:py-6 sm:px-4">
            <div>
              <label
                htmlFor="product_name"
                className="font-serif text-sm sm:text-base"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                id="product_name"
                required
              />
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
            <div>
              <label className="font-serif text-sm sm:text-base">
                Description
              </label>
              <textarea
                placeholder="Type here"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                rows="4"
              ></textarea>
              <div className="pt-1 sm:pt-3">
                <button
                  type="submit"
                  className="w-full text-sm sm:text-base text-onPrimary font-serif bg-[#22c55e] rounded-sm p-1 sm:p-2"
                >
                  Create Category
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreateCategory;

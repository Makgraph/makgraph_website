import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Message from "../Loadingerror/errorMessage";
import LoadingSpinner from "../Loadingerror/loading";
import { createCategory } from "../../redux/categories/categoriesSlice";

const MainAddCategorie = () => {
  const dispatch = useDispatch();

  // États pour les champs du formulaire
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  // const { loading, error } = useSelector((state) => state.productsList);
  const { loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    if (!loading && !error) {
      toast.success("ÉLément ajouté avec succès");
      setTitle("");
      setCategory("");
      setUrl("");
      setDescription("");
      setFile(null);
    }
  }, [loading, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createCategory({
        title,
        category,
        url,
        description,
        file,
      })
    );
  };

  return (
    <section className="p-2 sm:p-4 border-l">
      <form onSubmit={handleSubmit}>
        <div className=" sm:flex justify-between items-center ">
          <Link
            to="/addCategories"
            className="text-sm sm:text-base text-onPrimary font-serif bg-danger rounded-sm p-1 sm:p-2"
          >
            Go to categories
          </Link>
          <p className="py-2 sm:py-0 text-sm sm:text-xl font-semibold font-serif text-onSurface">
            Add élément
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
            <div className=" m-4 p-4">
              <Message variant="bg-[#fee2e2] text-[#991b1b]">{error}</Message>
            </div>
          </Message>
        )}
        {loading && <LoadingSpinner />}
        <div className="border border-[#d1d5db] shadow-lg w-full md:w-[60%] my-2 sm:my-4">
          <div className="p-2 flex flex-col gap-2 sm:gap-4 sm:py-6 sm:px-4">
            <div>
              <label
                htmlFor="item_title"
                className="font-serif text-sm sm:text-base"
              >
                Titre
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2 outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                id="item_title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="item_category"
                className="font-serif text-sm sm:text-base"
              >
                Categorie
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2 outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                id="item_category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="item_url"
                className="font-serif text-sm sm:text-base"
              >
                Url
              </label>
              <input
                type="text"
                placeholder="Enter Url"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2 outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                id="item_url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <input
                type="file"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2 outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div>
              <label className="font-serif text-sm sm:text-base">
                Description
              </label>
              <textarea
                placeholder="Type here"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2 outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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

export default MainAddCategorie;

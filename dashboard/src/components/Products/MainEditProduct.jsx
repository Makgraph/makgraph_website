// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import Message from "../Loadingerror/errorMessage";
// import LoadingSpinner from "../Loadingerror/loading";
// import { createProduct } from "../../redux/products/productsSlice";

// const MainEditAddProduct = (props) => {
//   const { productId } = props;

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState(0);
//   const [image, setImage] = useState("");
//   const [countInStock, setCountInStock] = useState(0);
//   const [description, setDescription] = useState("");

//   const dispatch = useDispatch();

//   const { loading, error } = useSelector((state) => state.productsList);

//   useEffect(() => {
//     if (!loading && !error) {
//       toast.success("Produit ajouté avec succès");
//       setName("");
//       setPrice(0);
//       setImage("");
//       setCountInStock(0);
//       setDescription("");
//     }
//   }, [loading, error]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(
//       createProduct({
//         name,
//         price,
//         image,
//         countInStock,
//         description,
//       })
//     );
//   };

//   return (
//     <section className="p-2 sm:p-4 border-l">
//       <form onSubmit={submitHandler}>
//         <div className=" sm:flex justify-between items-center ">
//           <Link
//             to="/products"
//             className="text-sm sm:text-base text-onPrimary font-serif bg-danger rounded-sm p-1 sm:p-2"
//           >
//             Go to products
//           </Link>
//           <p className="py-2 sm:py-0 text-sm sm:text-xl font-semibold font-serif text-onSurface">
//             Update Product
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
//                 htmlFor="product_title"
//                 className="font-serif text-sm sm:text-base"
//               >
//                 Product title
//               </label>
//               <input
//                 type="text"
//                 placeholder="Type here"
//                 className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
//                 id="product_title"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="product_price"
//                 className="font-serif text-sm sm:text-base"
//               >
//                 Price
//               </label>
//               <input
//                 type="number"
//                 placeholder="Type here"
//                 className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
//                 id="product_price"
//                 required
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="product_title"
//                 className="font-serif text-sm sm:text-base"
//               >
//                 Count In Stock
//               </label>
//               <input
//                 type="number"
//                 placeholder="Type here"
//                 className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
//                 id="product_price"
//                 required
//                 value={countInStock}
//                 onChange={(e) => setCountInStock(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="product_title"
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
//                 htmlFor="product_title"
//                 className="font-serif text-sm sm:text-base"
//               >
//                 Images
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Image URL"
//                 className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
//                 value={image}
//                 onChange={(e) => setImage(e.target.value)}
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

// export default MainEditAddProduct;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Message from "../Loadingerror/errorMessage";
import LoadingSpinner from "../Loadingerror/loading";
import { editProduct } from "../../redux/products/productsSlice";

const MainEditAddProduct = (props) => {
  const { productId } = props;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productsList
  );

  useEffect(() => {
    // Récupérer le produit existant à partir du state Redux
    const productToUpdate = products.find(
      (product) => product._id === productId
    );
    if (productToUpdate) {
      setName(productToUpdate.name);
      setPrice(productToUpdate.price);
      setImage(productToUpdate.image);
      setCountInStock(productToUpdate.countInStock);
      setDescription(productToUpdate.description);
    }
  }, [products, productId]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      editProduct({
        productId,
        updatedProductData: {
          name: name || undefined,
          price: price || undefined,
          image: image || undefined,
          countInStock: countInStock || undefined,
          description: description || undefined,
        },
      })
    );
  };

  return (
    <section className="p-2 sm:p-4 border-l">
      <form onSubmit={submitHandler}>
        <div className=" sm:flex justify-between items-center ">
          <Link
            to="/products"
            className="text-sm sm:text-base text-onPrimary font-serif bg-danger rounded-sm p-1 sm:p-2"
          >
            Go to products
          </Link>
          <p className="py-2 sm:py-0 text-sm sm:text-xl font-semibold font-serif text-onSurface">
            Update Product
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                placeholder="Enter Image URL"
                className="bg-[#f4f4f6] w-full text-sm sm:text-base text-[#1f2937] rounded-sm sm:py-1 pl-1 sm:pl-2  outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
                value={image}
                onChange={(e) => setImage(e.target.value)}
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

export default MainEditAddProduct;

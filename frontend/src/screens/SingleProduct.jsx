import React, { useEffect } from "react";
import Header from "../components/headerComponent/Header";
import products from "../data/products";
import { useParams } from "react-router-dom";
import Rating from "../components/shopComponent/Rating";
import { useDispatch, useSelector } from "react-redux";
// import { fetchSingleProduct } from "../redux/products/productDetailsSlice.js";
import { fetchProductDetails } from "../redux/products/productSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const product = products.find((p) => p.id === id);
  // const productDetails = useSelector((state) => state.productDetails);
  // const {loading, error, product} = productDetails
  const product = useSelector((state) => state.product.product);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  // const product = {};
  return (
    <>
      <Header />
      <div className="p-screen mt-24">
        <div className="flex flex-col gap-2 md:gap-4 pt-8 pb-16">
          <div className="md:gap-8 grid grid-cols-1 md:my-4 md:grid-cols-2 ">
            <div className="flex justify-center items-center bg-[#cbd5e1] p-6 md:p-8 h-auto">
              <img
                src={product.image}
                className="flex justify-center w-[60%] h-auto items-center rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4">
              <b>{product.name}</b>
              <p>{product.description}</p>
              <div>
                <div className="flex  justify-between p-2 border-[1px] border-primary w-[70%]">
                  <div className="">
                    <h6 className="text-[14px]">Prix</h6>
                  </div>
                  <span className="flex item-end">
                    <b className="text-[14px]">${product.price}</b>
                  </span>
                </div>
                <div className="flex border-y-0 justify-between p-2 border-[1px] border-primary w-[70%]">
                  <div className="">
                    <h6 className="text-[14px]">Statut</h6>
                  </div>

                  {product.countInStock > 0 ? (
                    <b className="text-[14px]">En Stock</b>
                  ) : (
                    <b>Non disponible</b>
                  )}
                </div>
                <div className="flex  justify-between p-2 border-[1px] border-primary w-[70%]">
                  <div>
                    <h6 className="text-[14px]">Commentaires</h6>{" "}
                  </div>
                  <span className="flex item-end">
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} commentaires`}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 md:my-6 ">
            <div className="">
              <h5 className="mb-4">COMMENTAIRES</h5>

              <div className="bg-tertiary p-3 ">Pas de commentaire</div>
              <div className="my-6 p-2 bg-[#cbd5e1]">
                <div className="px-2 py-4">
                  Admin Milien <br />
                  time
                </div>

                <div className="bg-tertiary px-3 pb-10 ">
                  Lorem ipsum dolor sit amet consectetur. Amet nec dolor est
                  sem.
                </div>
              </div>
            </div>
            <div>
              <h5 className="mb-4">ÉCRIRE UN AVIS CLIENT</h5>
              <form>
                <div className="">
                  <strong>Notation</strong>
                  <select className="bg-[#cbd5e1] w-full p-2 mb-3 rounded">
                    <option value="">Selectionner...</option>
                    <option value="1">1 - Faible</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 -Bon</option>
                    <option value="4">4 - Très Bon</option>
                    <option value="5">5 - Exellent</option>
                  </select>
                </div>
                <div className="">
                  <strong>Comment</strong>
                  <textarea
                    rows="3"
                    className="bg-[#cbd5e1] w-full p-2 mb-3 rounded text-primary"
                  ></textarea>
                </div>
                <div className="">
                  <button className="bg-primary border-2 border-primary  hover:shadow-xl cursor-pointer w-full md:mt-1 px-2 py-1  rounded-[5px]">
                    <h6 className="text-xs md:text-sm text-white  ">
                      Soumettre
                    </h6>
                  </button>
                </div>
              </form>
              <div>{/* <Message variant={"alert-warning"}></Message> */}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

import React, { useEffect, useState } from "react";
import Header from "../components/headerComponent/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import Rating from "../components/shopComponent/Rating";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductById,
  clearProductDetails,
} from "../redux/products/productSlice.js";
import { addToCart } from "../redux/Cart/cartSlice";
import LoadingSpinner from "../components/loadingError/loading.jsx";
import {
  createProductReview,
  resetProductReview,
} from "../redux/products/productReviewSlice.js";
import moment from "moment";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { productDetails, loading, error } = useSelector(
    (state) => state.products
  );
  const {
    productReview,
    loading: loadingCreateReview,
    success: successCreateReview,
    error: errorCreateReview,
  } = useSelector((state) => state.productReview);

  useEffect(() => {
    if (successCreateReview) {
      alert("Avis soumis avec succès");
      setRating(0);
      setComment("");
      dispatch(resetProductReview());
    }
    // Fetch product details when component mounts
    dispatch(fetchProductById(productId));
    // Clear product details when component unmounts
    return () => {
      dispatch(clearProductDetails());
    };
  }, [dispatch, productId, successCreateReview]);

  if (loading) {
    return (
      <div className="mt-24">
        <LoadingSpinner />
      </div>
    );
  }

  if (!productDetails) {
    return (
      <p className="mt-24">
        <LoadingSpinner />
      </p>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleAddToCart = () => {
    if (productDetails) {
      // Dispatch addToCart action from cartSlice with product details and selected quantity
      navigate(`/cartScreen/${productDetails._id}?qty=${quantity}`);
      dispatch(addToCart({ product: productDetails, quantity }));
      setQuantity(1); // Reset quantity after adding to cart
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // Check if the user has already reviewed the product
    const userAlreadyReviewed = productDetails.reviews.some(
      (review) => review.user === user._id
    );

    if (userAlreadyReviewed) {
      alert("Vous avez déjà évalué ce produit.");
    } else {
      dispatch(
        createProductReview({
          productId,
          review: {
            rating,
            comment,
          },
        })
      );
    }
  };

  return (
    <>
      <Header />
      <div className="p-screen mt-24">
        <div className="flex flex-col gap-2 md:gap-4 pt-8 pb-16">
          <div className="md:gap-8 grid grid-cols-1 md:my-4 md:grid-cols-2 ">
            <div className="flex justify-center items-center bg-[#cbd5e1] p-6 md:p-8 h-auto">
              <img
                src={productDetails.image}
                className="  flex justify-center w-[60%] h-auto items-center rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4">
              <b className="font-serif">{productDetails.name}</b>
              <p className="font-serif">{productDetails.description}</p>
              <div>
                <div className="flex  justify-between p-2 border-[1px] border-primary w-[70%]">
                  <div className="">
                    <h6 className="font-serif text-[14px]">Prix</h6>
                  </div>
                  <span className="flex item-end">
                    <b className=" font-serif font-serif text-[14px]">
                      ${productDetails.price}
                    </b>
                  </span>
                </div>
                <div className="font-serif flex border-y-0 justify-between p-2 border-[1px] border-primary w-[70%]">
                  <div className="">
                    <h6 className="font-serif text-[14px]">Statut</h6>
                  </div>

                  {productDetails.countInStock > 0 ? (
                    <b className="font-serif text-[14px]">En Stock</b>
                  ) : (
                    <b>Non disponible</b>
                  )}
                </div>
                <div className="flex  justify-between  border-[1px] border-primary w-[70%]">
                  <div>
                    <h6 className="font-serif text-[14px]">Commentaires</h6>
                  </div>
                  <span className="font-serif flex item-end">
                    <Rating
                      value={productDetails.rating}
                      text={`${productDetails.numReviews} commentaires`}
                    />
                  </span>
                </div>
                {productDetails.countInStock > 0 ? (
                  <>
                    <div className="flex justify-between p-2 border-x-[1px] border-primary w-[70%]">
                      <div>
                        <h6 className="font-serif text-[14px]">Quantité</h6>
                      </div>
                      <select
                        className="font-serif bg-[#cbd5e1] w-12"
                        value={quantity}
                        onChange={handleQuantityChange}
                      >
                        {[...Array(productDetails.countInStock).keys()].map(
                          (x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className="w-[70%] p-2 bg-primary/90 border-[1px] border-primary  transition hover:bg-primary hover:shadow-xl   focus:bg-[#22c55e]  cursor-pointer"
                    >
                      <h6 className="font-sans font-semibold text-xs md:text-sm text-white  ">
                        Ajouter au panier
                      </h6>
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 md:my-6 ">
            <div className="">
              <h5 className="font-serif mb-4">COMMENTAIRES</h5>
              {productDetails.reviews.length === 0 && (
                <div className="bg-tertiary p-3 ">Pas de commentaire</div>
              )}
              {productDetails.reviews.map((review) => (
                <div key={review._id} className="my-6 p-2 bg-[#cbd5e1]">
                  <div className="flex flex-col px-2 py-4">
                    <strong className="font-serif py-1">{review.name}</strong>
                    <Rating value={review.rating} />
                    <span className="font-serif pt-4">
                      {moment(review.createdAt).calendar()}
                    </span>
                  </div>

                  <div className="font-serif bg-tertiary px-3 py-2 pb-10 ">
                    {review.comment}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h5 className="font-serif mb-4">ÉCRIRE UN AVIS CLIENT</h5>
              <div>{loadingCreateReview && <LoadingSpinner />}</div>

              {user ? (
                <>
                  <form onSubmit={submitHandler}>
                    <div>
                      {errorCreateReview && (
                        <div className="font-serif bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                          {errorCreateReview}
                        </div>
                      )}

                      {productDetails.reviews.some(
                        (review) => review.user === user._id
                      ) && (
                        <div className="font-serif bg-[#fef9c3] border border-[#facc15] text-[#a16207] px-4 py-3 rounded relative mb-4">
                          Vous avez déjà évalué ce produit.
                        </div>
                      )}

                      <strong>Notation</strong>
                      <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="font-serif bg-[#cbd5e1] w-full p-2 mb-3 rounded"
                      >
                        <option value="">Sélectionner...</option>
                        <option value="1">1 - Faible</option>
                        <option value="2">2 - Équitable</option>
                        <option value="3">3 - Bon</option>
                        <option value="4">4 - Très Bon</option>
                        <option value="5">5 - Excellent</option>
                      </select>
                    </div>
                    <div className="">
                      <strong>Commentaire</strong>
                      <textarea
                        rows="3"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="font-serif bg-[#cbd5e1] w-full p-2 mb-3 rounded text-primary"
                      ></textarea>
                    </div>
                    <div className="">
                      <button
                        disabled={loadingCreateReview}
                        type="submit"
                        className="font-sans font-semibold bg-primary text-white w-full p-3 hover:bg-[#22c55e] "
                      >
                        Envoyer
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="font-serif bg-[#fee2e2] border border-[#f87171] text-[#b91c1c] px-4 py-3 rounded relative mt-4">
                  Veuillez vous{" "}
                  <Link
                    to="/Accueil/login"
                    className="font-serif text-[#3b82f6]"
                  >
                    connecter
                  </Link>{" "}
                  pour écrire un commentaire.p
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

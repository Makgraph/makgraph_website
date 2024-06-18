// import React, { useEffect, useState } from "react";
// import { fetchProductById } from "../../redux/Cart/cartSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { fetchProductDetails } from "../../redux/products/productSlice";

// const CartItem = () => {
//   const [qty, setQty] = useState(1);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const product = useSelector((state) => state.product.product);
//   const loading = useSelector((state) => state.product.loading);
//   const error = useSelector((state) => state.product.error);

//   useEffect(() => {
//     dispatch(fetchProductDetails(id));
//   }, [dispatch, id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const addToCartHandler = (id) => {
//     dispatch(fetchProductById(id));
//   };

//   return (
//     <div></div>

//     // <div className=" w-[100%] md:w-[550px] h-[100%] md:h-[150px] flex items-center shadow-[0_3px_15px_rgba(0,0,0,0.3)] rounded-[25px] px-3 py-2 m-3 md:m-[30px]">
//     //   <img src={product.image} className="w-[105px] rounded-[20px]" />

//     //   <div className="w-[100%] ">
//     //     <h5 className="m-4">
//     //       <b>{product.name}</b>
//     //     </h5>
//     //     {/* <h5 className="m-4">$ {price}</h5> */}
//     //     <h5 className="m-4">$ PRIX</h5>
//     //     <div className="m-4">
//     //       <button
//     //         // onClick={() => removeFromCart(id)}
//     //         className="w-5 bg-onPrimary justify-center items-center border"
//     //       >
//     //         -
//     //       </button>
//     //       <input
//     //         className="w-10 text-center border font-bold"
//     //         // value={cartItems[id]}
//     //         // onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
//     //       />
//     //       <button
//     //         onClick={() => addToCartHandler(id)}
//     //         className="w-5 bg-onPrimary justify-center items-center border"
//     //       >
//     //         +
//     //       </button>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default CartItem;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCartQuantity,
  addToCart,
  selectCartItems,
} from "../../redux/Cart/cartSlice";

const QuantitySelector = ({ product, showQuantitySelector }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [currentQuantity, setCurrentQuantity] = useState(
    cartItems.find((item) => item.product._id === product._id)?.quantity || 1
  );

  // Gérer le changement de quantité
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);

    const existingItem = cartItems.find(
      (item) => item.product._id === product._id
    );

    if (existingItem) {
      // Mettre à jour la quantité si le produit est déjà dans le panier
      dispatch(
        updateCartQuantity({ productId: product._id, quantity: newQuantity })
      );
    } else {
      // Ajouter le produit au panier
      dispatch(addToCart({ product, quantity: newQuantity }));
    }

    setCurrentQuantity(newQuantity);
  };

  // Afficher le sélecteur uniquement si showQuantitySelector est true
  return showQuantitySelector ? (
    <select
      aria-label="Quantité"
      className="bg-[#cbd5e1] w-full h-8"
      value={currentQuantity}
      onChange={handleQuantityChange}
    >
      {[...Array(product.countInStock).keys()].map((x) => (
        <option key={x + 1} value={x + 1}>
          {x + 1}
        </option>
      ))}
    </select>
  ) : null;
};

export default QuantitySelector;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   updateCartQuantity,
//   addToCart,
//   selectCartItems,
// } from "../../redux/Cart/cartSlice";

// const QuantitySelector = ({ product, showQuantitySelector }) => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(selectCartItems);
//   const [currentQuantity, setCurrentQuantity] = useState(
//     cartItems.find((item) => item.product._id === product._id)?.quantity || 1
//   );

//   // Gérer le changement de quantité
//   const handleQuantityChange = (e) => {
//     const newQuantity = parseInt(e.target.value, 10);

//     const existingItem = cartItems.find(
//       (item) => item.product._id === product._id
//     );

//     if (existingItem) {
//       // Mettre à jour la quantité si le produit est déjà dans le panier
//       dispatch(
//         updateCartQuantity({ productId: product._id, quantity: newQuantity })
//       );
//     } else {
//       // Ajouter le produit au panier
//       dispatch(addToCart({ product, quantity: newQuantity }));
//     }

//     setCurrentQuantity(newQuantity);
//   };

//   return showQuantitySelector ? (
//     <select
//       aria-label="Quantité"
//       className="bg-[#cbd5e1] w-12 md:w-28 h-8"
//       value={currentQuantity}
//       onChange={handleQuantityChange}
//     >
//       {[...Array(product.countInStock).keys()].map((x) => (
//         <option key={x + 1} value={x + 1}>
//           {x + 1}
//         </option>
//       ))}
//     </select>
//   ) : null;
// };

// export default QuantitySelector;

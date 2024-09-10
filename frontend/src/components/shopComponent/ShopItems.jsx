import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import LoadingSpinner from "../loadingError/loading";
import Message from "../loadingError/errorMessage";
import Pagination from "./Pagination";
import { selectProductList } from "../../redux/products/productsSlice";

const ShopItems = () => {
  const { products, loading, error, page, pages } =
    useSelector(selectProductList);

  // État local pour afficher ou masquer le sélecteur de quantité
  const [showQuantitySelector, setShowQuantitySelector] = useState({});

  // Fonction pour gérer l'affichage du sélecteur de quantité
  const handleToggleQuantitySelector = (productId) => {
    setShowQuantitySelector((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <div>
      {error && (
        <Message variant="bg-danger dark:bg-danger-dark text-white">
          {error}
        </Message>
      )}

      {loading ? (
        <div className="flex min-h-[312.4px] justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="gap-10 md:gap-10 min-h-[312.4px] justify-items-center items-center justify-center grid md:grid-cols-4 grid-cols-2">
          {products.map((product) => (
            <div key={product._id} className="relative">
              <ProductCard
                product={product}
                isQuantitySelectorVisible={showQuantitySelector[product._id]}
                onToggleQuantitySelector={handleToggleQuantitySelector}
              />
            </div>
          ))}
        </div>
      )}

      <Pagination pages={pages} page={page} />
    </div>
  );
};

export default ShopItems;

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { selectProductList } from "../../redux/products/productsSlice";
// import { selectCartItems } from "../../redux/Cart/cartSlice";
// import ProductCard from "./ProductCard";
// import QuantitySelector from "./QuantitySelector";
// import LoadingSpinner from "../loadingError/loading";
// import Message from "../loadingError/errorMessage";
// import Pagination from "./Pagination";

// const ShopItems = () => {
//   const { products, loading, error, page, pages } =
//     useSelector(selectProductList);
//   const cartItems = useSelector(selectCartItems);

//   // État local pour gérer l'affichage du sélecteur de quantité
//   const [showQuantitySelector, setShowQuantitySelector] = useState({});

//   // Fonction pour gérer l'affichage du sélecteur de quantité
//   const handleToggleQuantitySelector = (productId) => {
//     setShowQuantitySelector((prev) => ({
//       ...prev,
//       [productId]: !prev[productId],
//     }));
//   };

//   return (
//     <div>
//       {error && (
//         <Message variant="bg-danger dark:bg-danger-dark text-white">
//           {error}
//         </Message>
//       )}

//       {loading ? (
//         <div className="flex min-h-[312.4px] justify-center items-center">
//           <LoadingSpinner />
//         </div>
//       ) : (
//         <div className="gap-10 md:gap-10 min-h-[312.4px] justify-items-center items-center justify-center grid md:grid-cols-4 grid-cols-2">
//           {products.map((product) => (
//             <div key={product._id} className="relative">
//               <ProductCard
//                 product={product}
//                 onToggleQuantitySelector={handleToggleQuantitySelector}
//               />
//               <QuantitySelector
//                 product={product}
//                 showQuantitySelector={showQuantitySelector[product._id]}
//                 onToggleQuantitySelector={() =>
//                   handleToggleQuantitySelector(product._id)
//                 }
//               />
//             </div>
//           ))}
//         </div>
//       )}

//       <Pagination pages={pages} page={page} />
//     </div>
//   );
// };

// export default ShopItems;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, selectCartItems } from "../../redux/Cart/cartSlice";
// import Rating from "./Rating";
// import LoadingSpinner from "../loadingError/loading";
// import Message from "../loadingError/errorMessage";
// import Pagination from "./Pagination";
// import { selectProductList } from "../../redux/products/productsSlice";

// const ShopItems = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error, page, pages } =
//     useSelector(selectProductList);
//   const cartItems = useSelector(selectCartItems);
//   console.log(cartItems);
//   // État local pour afficher ou masquer le sélecteur de quantité
//   const [showQuantitySelector, setShowQuantitySelector] = useState({});

// // Met à jour la quantité d'un produit
// const handleQuantityChange = (productId, newQuantity) => {
//   // Trouver le produit correspondant
//   const product = products.find((p) => p._id === productId);
//   if (product) {
//     const existingItem = cartItems.find(
//       (item) => item.product._id === productId
//     );
//     const totalQuantityInCart = existingItem ? existingItem.quantity : 0;

//     // Ajouter ou mettre à jour le produit dans le panier
//     if (product.countInStock >= totalQuantityInCart + newQuantity) {
//       dispatch(addToCart({ product, quantity: newQuantity }));
//     } else {
//       alert(
//         `Quantité demandée dépasse le stock disponible (${
//           product.countInStock - totalQuantityInCart
//         })`
//       );
//     }
//   }
// };

//   // Récupère la quantité actuelle d'un produit dans le panier
//   const getCartItemQuantity = (productId) => {
//     const cartItem = cartItems.find((item) => item.product._id === productId);
//     return cartItem ? cartItem.quantity : 1; // Valeur par défaut si non trouvé
//   };

//   return (
//     <div>
//       {error && (
//         <Message variant="bg-danger dark:bg-danger-dark text-white">
//           {error}
//         </Message>
//       )}

//       {loading ? (
//         <div className="flex min-h-[312.4px] justify-center items-center">
//           <LoadingSpinner />
//         </div>
//       ) : (
//         <div className="gap-10 md:gap-10 min-h-[312.4px] justify-items-center items-center justify-center grid md:grid-cols-4 grid-cols-2">
//           {products.map((product) => (
//             <div
//               className="rounded-lg md:max-w-[171.2px] gap-2 w-auto h-auto flex flex-col transition hover:transition-[0.3s] hover:ease-in cursor-pointer"
//               key={product._id}
//             >
//               <img
//                 src={product.image}
//                 className="w-full md:max-w-[171.2px] md:max-h-[212.4px] rounded-lg"
//                 alt={product.name}
//               />
//               <div className="text-start w-[100%]">
//                 <div className="flex justify-between">
//                   <p className="font-medium font-serif text-xs md:text-normal">
//                     {product.name}
//                   </p>
//                   <p className="font-semibold text-base font-serif md:text-base">
//                     $ {product.price}
//                   </p>
//                 </div>
//                 <p className="font-medium font-serif">
//                   <Rating
//                     value={product.rating}
//                     text={`${product.numReviews} comment${
//                       product.numReviews > 1 ? "s" : ""
//                     }`}
//                   />
//                 </p>

//                 {/* Quantité */}
//                 <div className="flex items-center mt-2">
//                   {showQuantitySelector[product._id] ? (
//                     <select
//                       className="bg-[#cbd5e1] w-12 md:w-28 h-8"
//                       value={getCartItemQuantity(product._id)}
//                       onChange={(e) =>
//                         handleQuantityChange(
//                           product._id,
//                           parseInt(e.target.value, 10) || 1
//                         )
//                       }
//                     >
//                       {[...Array(product.countInStock).keys()].map((x) => (
//                         <option key={x + 1} value={x + 1}>
//                           {x + 1}
//                         </option>
//                       ))}
//                     </select>
//                   ) : (
//                     <button
//                       className="bg-primary/90 hover:bg-primary w-full text-white text-xs md:text-base font-bold py-2 md:py-2 px-1 md:px-4 rounded"
//                       onClick={() =>
//                         setShowQuantitySelector((prev) => ({
//                           ...prev,
//                           [product._id]: true,
//                         }))
//                       }
//                     >
//                       Ajouter au panier
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <Pagination pages={pages} page={page} />
//     </div>
//   );
// };

// export default ShopItems;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addToCart,
//   removeFromCart,
//   selectCartItems,
// } from "../../redux/Cart/cartSlice";
// import Rating from "./Rating";
// import LoadingSpinner from "../loadingError/loading";
// import Message from "../loadingError/errorMessage";
// import Pagination from "./Pagination";
// import { selectProductList } from "../../redux/products/productsSlice";

// const ShopItems = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error, page, pages } =
//     useSelector(selectProductList);
//   const cartItems = useSelector(selectCartItems);

//   // État local pour gérer l'affichage du sélecteur de quantité
//   const [showQuantitySelector, setShowQuantitySelector] = useState({});

//   // Fonction pour obtenir la quantité actuelle du produit dans le panier
//   const getCartItemQuantity = (productId) => {
//     const cartItem = cartItems.find((item) => item.product._id === productId);
//     return cartItem ? cartItem.quantity : 1; // Valeur par défaut si l'article n'est pas dans le panier
//   };

//   // Fonction pour mettre à jour la quantité dans le panier
//   const handleQuantityChange = (productId, newQuantity) => {
//     const product = products.find((p) => p._id === productId);
//     const validQuantity = Math.max(
//       1,
//       Math.min(newQuantity, product.countInStock)
//     );

//     // Vérifie si l'article est déjà dans le panier
//     const existingItem = cartItems.find(
//       (item) => item.product._id === productId
//     );
//     if (existingItem) {
//       if (validQuantity > 0) {
//         // Met à jour la quantité de l'article existant
//         dispatch(removeFromCart(productId)); // Supprimer l'article avec l'ancienne quantité
//         dispatch(addToCart({ product, quantity: validQuantity })); // Ajouter l'article avec la nouvelle quantité
//       } else {
//         // Supprimer l'article du panier si la quantité est 0
//         dispatch(removeFromCart(productId));
//       }
//     } else if (validQuantity > 0) {
//       // Ajouter le produit au panier si ce n'est pas déjà présent
//       dispatch(addToCart({ product, quantity: validQuantity }));
//     }
//   };

//   // Fonction pour gérer l'affichage du sélecteur de quantité
//   const handleToggleQuantitySelector = (productId) => {
//     setShowQuantitySelector((prev) => ({
//       ...prev,
//       [productId]: !prev[productId],
//     }));
//   };

//   return (
//     <div>
//       {error && (
//         <Message variant="bg-danger dark:bg-danger-dark text-white">
//           {error}
//         </Message>
//       )}

//       {loading ? (
//         <div className="flex min-h-[312.4px] justify-center items-center">
//           <LoadingSpinner />
//         </div>
//       ) : (
//         <div className="gap-10 md:gap-10 min-h-[312.4px] justify-items-center items-center justify-center grid md:grid-cols-4 grid-cols-2">
//           {products.map((product) => (
//             <div
//               className="rounded-lg md:max-w-[171.2px] gap-2 w-auto h-auto flex flex-col transition hover:transition-[0.3s] hover:ease-in cursor-pointer"
//               key={product._id}
//             >
//               <img
//                 src={product.image}
//                 className="w-full md:max-w-[171.2px] md:max-h-[212.4px] rounded-lg"
//                 alt={product.name}
//               />
//               <div className="text-start w-[100%]">
//                 <div className="flex justify-between">
//                   <p className="font-medium font-serif text-xs md:text-normal">
//                     {product.name}
//                   </p>
//                   <p className="font-semibold text-base font-serif md:text-base">
//                     $ {product.price}
//                   </p>
//                 </div>
//                 <p className="font-medium font-serif">
//                   <Rating
//                     value={product.rating}
//                     text={`${product.numReviews} comment${
//                       product.numReviews > 1 ? "s" : ""
//                     }`}
//                   />
//                 </p>

//                 {/* Sélecteur de Quantité */}
//                 <div className="flex items-center mt-2">
//                   {showQuantitySelector[product._id] ? (
//                     <select
//                       className="bg-[#cbd5e1] w-12 md:w-28 h-8"
//                       value={getCartItemQuantity(product._id)}
//                       onChange={(e) =>
//                         handleQuantityChange(
//                           product._id,
//                           parseInt(e.target.value, 10)
//                         )
//                       }
//                     >
//                       {[...Array(product.countInStock).keys()].map((x) => (
//                         <option key={x + 1} value={x + 1}>
//                           {x + 1}
//                         </option>
//                       ))}
//                     </select>
//                   ) : (
//                     <button
//                       className="bg-primary/90 hover:bg-primary w-full text-white text-xs md:text-base font-bold py-2 md:py-2 px-1 md:px-4 rounded"
//                       onClick={() => handleToggleQuantitySelector(product._id)}
//                     >
//                       Choisir la quantité
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <Pagination pages={pages} page={page} />
//     </div>
//   );
// };

// export default ShopItems;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, selectCartItems } from "../../redux/Cart/cartSlice";
// import Rating from "./Rating";
// import LoadingSpinner from "../loadingError/loading";
// import Message from "../loadingError/errorMessage";
// import Pagination from "./Pagination";
// import { selectProductList } from "../../redux/products/productsSlice";

// const ShopItems = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error, page, pages } =
//     useSelector(selectProductList);
//   const cartItems = useSelector(selectCartItems);

//   // État local pour les quantités des produits
//   const [quantities, setQuantities] = useState(
//     products.reduce((acc, product) => {
//       acc[product._id] = 1; // Valeur par défaut de la quantité
//       return acc;
//     }, {})
//   );

//   // État local pour gérer l'affichage du sélecteur de quantité
//   const [showQuantitySelector, setShowQuantitySelector] = useState({});

//   // Met à jour la quantité d'un produit
//   const handleQuantityChange = (productId, newQuantity) => {
//     const product = products.find((p) => p._id === productId);
//     // La nouvelle quantité ne doit pas dépasser le stock disponible
//     const validQuantity = Math.max(
//       1,
//       Math.min(newQuantity, product.countInStock)
//     );
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [productId]: validQuantity,
//     }));
//   };

//   // Ajoute le produit au panier
//   const handleAddToCart = (product, quantityToAdd) => {
//     const existingItem = cartItems.find(
//       (item) => item.product._id === product._id
//     );
//     const totalQuantityInCart = existingItem ? existingItem.quantity : 0;

//     if (product.countInStock >= totalQuantityInCart + quantityToAdd) {
//       dispatch(addToCart({ product, quantity: quantityToAdd }));
//     } else {
//       alert(
//         `Quantité demandée dépasse le stock disponible (${
//           product.countInStock - totalQuantityInCart
//         })`
//       );
//     }
//   };

//   // Gère le clic pour ajouter au panier avec la quantité sélectionnée
//   const handleAddToCartClick = (product) => {
//     const quantityToAdd = quantities[product._id] || 1;
//     handleAddToCart(product, quantityToAdd); // Ajouter au panier avec la quantité sélectionnée
//     setShowQuantitySelector((prev) => ({
//       ...prev,
//       [product._id]: false,
//     })); // Masquer le sélecteur de quantité après ajout au panier
//   };

//   return (
//     <div>
//       {error && (
//         <Message variant="bg-danger dark:bg-danger-dark text-white">
//           {error}
//         </Message>
//       )}

//       {loading ? (
//         <div className="flex min-h-[312.4px] justify-center items-center">
//           <LoadingSpinner />
//         </div>
//       ) : (
//         <div className="gap-10 md:gap-10 min-h-[312.4px] justify-items-center items-center justify-center grid md:grid-cols-4 grid-cols-2">
//           {products.map((product) => (
//             <div
//               className="rounded-lg md:max-w-[171.2px] gap-2 w-auto h-auto flex flex-col transition hover:transition-[0.3s] hover:ease-in cursor-pointer"
//               key={product._id}
//             >
//               <img
//                 src={product.image}
//                 className="w-full md:max-w-[171.2px] md:max-h-[212.4px] rounded-lg"
//                 alt={product.name}
//               />
//               <div className="text-start w-[100%]">
//                 <div className="flex justify-between">
//                   <p className="font-medium font-serif text-xs md:text-normal">
//                     {product.name}
//                   </p>
//                   <p className="font-semibold text-base font-serif md:text-base">
//                     $ {product.price}
//                   </p>
//                 </div>
//                 <p className="font-medium font-serif">
//                   <Rating
//                     value={product.rating}
//                     text={`${product.numReviews} comment${
//                       product.numReviews > 1 ? "s" : ""
//                     }`}
//                   />
//                 </p>

//                 {/* Sélecteur de Quantité */}
//                 <div className="flex items-center mt-2">
//                   {showQuantitySelector[product._id] ? (
//                     <>
//                       <select
//                         className="bg-[#cbd5e1] w-12 md:w-28 h-8"
//                         value={quantities[product._id] || 1}
//                         onChange={(e) =>
//                           handleQuantityChange(
//                             product._id,
//                             parseInt(e.target.value, 10) || 1
//                           )
//                         }
//                       >
//                         {[...Array(product.countInStock).keys()].map((x) => (
//                           <option key={x + 1} value={x + 1}>
//                             {x + 1}
//                           </option>
//                         ))}
//                       </select>
//                       <button
//                         className="bg-primary/90 hover:bg-primary w-full text-white text-xs md:text-base font-bold py-2 md:py-2 px-1 md:px-4 rounded mt-2"
//                         onClick={() => handleAddToCartClick(product)}
//                       >
//                         Ajouter au panier
//                       </button>
//                     </>
//                   ) : (
//                     <button
//                       className="bg-primary/90 hover:bg-primary w-full text-white text-xs md:text-base font-bold py-2 md:py-2 px-1 md:px-4 rounded"
//                       onClick={() =>
//                         setShowQuantitySelector((prev) => ({
//                           ...prev,
//                           [product._id]: true,
//                         }))
//                       }
//                     >
//                       Ajouter au panier
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <Pagination pages={pages} page={page} />
//     </div>
//   );
// };

// export default ShopItems;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, selectCartItems } from "../../redux/Cart/cartSlice";
// import Rating from "./Rating";
// import LoadingSpinner from "../loadingError/loading";
// import Message from "../loadingError/errorMessage";
// import Pagination from "./Pagination";
// import { selectProductList } from "../../redux/products/productsSlice";

// const ShopItems = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error, page, pages } =
//     useSelector(selectProductList);
//   const cartItems = useSelector(selectCartItems);

//   // État local pour les quantités des produits
//   const [quantities, setQuantities] = useState(
//     products.reduce((acc, product) => {
//       acc[product._id] = 1; // Valeur par défaut de la quantité
//       return acc;
//     }, {})
//   );

//   // État local pour gérer l'affichage du sélecteur de quantité
//   const [showQuantitySelector, setShowQuantitySelector] = useState({});

//   // Met à jour la quantité d'un produit
//   const handleQuantityChange = (productId, newQuantity) => {
//     const product = products.find((p) => p._id === productId);
//     // La nouvelle quantité ne doit pas dépasser le stock disponible
//     const validQuantity = Math.max(
//       1,
//       Math.min(newQuantity, product.countInStock)
//     );
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [productId]: validQuantity,
//     }));
//   };

//   // Ajoute le produit au panier
//   const handleAddToCart = (product, quantityToAdd) => {
//     const existingItem = cartItems.find(
//       (item) => item.product._id === product._id
//     );
//     const totalQuantityInCart = existingItem ? existingItem.quantity : 0;

//     if (product.countInStock >= totalQuantityInCart + quantityToAdd) {
//       dispatch(addToCart({ product, quantity: quantityToAdd }));
//     } else {
//       alert(
//         `Quantité demandée dépasse le stock disponible (${
//           product.countInStock - totalQuantityInCart
//         })`
//       );
//     }
//   };

//   // Gère l'incrémentation de la quantité
//   const handleIncrement = (productId) => {
//     const product = products.find((p) => p._id === productId);
//     const currentQuantity = quantities[productId] || 1;
//     const newQuantity = currentQuantity + 1;

//     // Vérifie si la nouvelle quantité dépasse le stock
//     if (newQuantity > product.countInStock) {
//       alert(
//         `Quantité demandée dépasse le stock disponible (${product.countInStock})`
//       );
//       handleQuantityChange(productId, product.countInStock); // Limite la quantité au stock disponible
//     } else {
//       handleQuantityChange(productId, newQuantity); // Juste mettre à jour la quantité localement
//     }
//   };

//   // Gère la décrémentation de la quantité
//   const handleDecrement = (productId) => {
//     const newQuantity = Math.max(1, quantities[productId] - 1);
//     handleQuantityChange(productId, newQuantity);
//   };

//   // Gère le clic pour ajouter au panier avec la quantité sélectionnée
//   const handleAddToCartClick = (product) => {
//     const quantityToAdd = quantities[product._id] || 1;
//     handleAddToCart(product, quantityToAdd); // Ajouter au panier avec la quantité sélectionnée
//     setShowQuantitySelector((prev) => ({
//       ...prev,
//       [product._id]: false,
//     })); // Masquer le sélecteur de quantité après ajout au panier
//   };

//   return (
//     <div>
//       {error && (
//         <Message variant="bg-danger dark:bg-danger-dark text-white">
//           {error}
//         </Message>
//       )}

//       {loading ? (
//         <div className="flex min-h-[312.4px] justify-center items-center">
//           <LoadingSpinner />
//         </div>
//       ) : (
//         <div className="gap-10 md:gap-10 min-h-[312.4px] justify-items-center items-center justify-center grid md:grid-cols-4 grid-cols-2">
//           {products.map((product) => (
//             <div
//               className="rounded-lg md:max-w-[171.2px] gap-2 w-auto h-auto flex flex-col transition hover:transition-[0.3s] hover:ease-in cursor-pointer"
//               key={product._id}
//             >
//               <img
//                 src={product.image}
//                 className="w-full md:max-w-[171.2px] md:max-h-[212.4px] rounded-lg"
//                 alt={product.name}
//               />
//               <div className="text-start w-[100%]">
//                 <div className="flex justify-between">
//                   <p className="font-medium font-serif text-xs md:text-normal">
//                     {product.name}
//                   </p>
//                   <p className="font-semibold text-base font-serif md:text-base">
//                     $ {product.price}
//                   </p>
//                 </div>
//                 <p className="font-medium font-serif">
//                   <Rating
//                     value={product.rating}
//                     text={`${product.numReviews} comment${
//                       product.numReviews > 1 ? "s" : ""
//                     }`}
//                   />
//                 </p>

//                 {/* Quantité */}
//                 <div className="flex items-center mt-2">
//                   {showQuantitySelector[product._id] ? (
//                     <>
//                       <button
//                         className="bg-[#e5e7eb] text-[#4b5563] border border-gray-300 p-1 rounded-l"
//                         onClick={() => handleDecrement(product._id)}
//                       >
//                         -
//                       </button>
//                       <input
//                         type="number"
//                         className="w-12 text-center border border-gray-300"
//                         value={quantities[product._id] || 1}
//                         min="1"
//                         max={product.countInStock}
//                         onChange={(e) =>
//                           handleQuantityChange(
//                             product._id,
//                             parseInt(e.target.value, 10) || 1
//                           )
//                         }
//                       />
//                       <button
//                         className="bg-[#e5e7eb] text-[#4b5563] border border-gray-300 p-1 rounded-r"
//                         onClick={() => handleIncrement(product._id)}
//                       >
//                         +
//                       </button>
//                     </>
//                   ) : (
//                     <button
//                       className="bg-primary/90 hover:bg-primary w-full text-white text-xs md:text-base font-bold py-2 md:py-2 px-1 md:px-4 rounded"
//                       onClick={() =>
//                         setShowQuantitySelector((prev) => ({
//                           ...prev,
//                           [product._id]: true,
//                         }))
//                       }
//                     >
//                       Ajouter au panier
//                     </button>
//                   )}
//                 </div>
//                 {showQuantitySelector[product._id] && (
//                   <button
//                     className="bg-primary/90 hover:bg-primary w-full text-white text-xs md:text-base font-bold py-2 md:py-2 px-1 md:px-4 rounded mt-2"
//                     onClick={() => handleAddToCartClick(product)}
//                   >
//                     Ajouter au panier
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <Pagination pages={pages} page={page} />
//     </div>
//   );
// };

// export default ShopItems;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, selectCartItems } from "../../redux/Cart/cartSlice";
// import Rating from "./Rating";
// import LoadingSpinner from "../loadingError/loading";
// import Message from "../loadingError/errorMessage";
// import Pagination from "./Pagination";
// import { selectProductList } from "../../redux/products/productsSlice";

// const ShopItems = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error, page, pages } =
//     useSelector(selectProductList);
//   const cartItems = useSelector(selectCartItems);
//   console.log(cartItems);

//   // État local pour les quantités des produits
//   const [quantities, setQuantities] = useState(
//     products.reduce((acc, product) => {
//       acc[product._id] = 1; // Valeur par défaut de la quantité
//       return acc;
//     }, {})
//   );

//   // État local pour gérer l'affichage du sélecteur de quantité
//   const [showQuantitySelector, setShowQuantitySelector] = useState({});

//   // Met à jour la quantité d'un produit
//   const handleQuantityChange = (productId, newQuantity) => {
//     const product = products.find((p) => p._id === productId);
//     // La nouvelle quantité ne doit pas dépasser le stock disponible
//     const validQuantity = Math.max(
//       1,
//       Math.min(newQuantity, product.countInStock)
//     );
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [productId]: validQuantity,
//     }));
//   };

//   // Ajoute le produit au panier
//   const handleAddToCart = (product, quantityToAdd) => {
//     const existingItem = cartItems.find(
//       (item) => item.product._id === product._id
//     );
//     const totalQuantityInCart = existingItem ? existingItem.quantity : 0;

//     if (product.countInStock >= totalQuantityInCart + quantityToAdd) {
//       dispatch(addToCart({ product, quantity: quantityToAdd }));
//     } else {
//       alert(
//         `Quantité demandée dépasse le stock disponible (${
//           product.countInStock - totalQuantityInCart
//         })`
//       );
//     }
//   };

//   // Gère l'incrémentation de la quantité et ajoute au panier
//   const handleIncrement = (productId) => {
//     const product = products.find((p) => p._id === productId);
//     const currentQuantity = quantities[productId] || 1;
//     const newQuantity = currentQuantity + 1;

//     // Vérifie si la nouvelle quantité dépasse le stock
//     if (newQuantity > product.countInStock) {
//       alert(
//         `Quantité demandée dépasse le stock disponible (${product.countInStock})`
//       );
//       handleQuantityChange(productId, product.countInStock); // Limite la quantité au stock disponible
//     } else {
//       handleQuantityChange(productId, newQuantity);
//       handleAddToCart(product, newQuantity); // Ajoute au panier avec la nouvelle quantité
//     }
//   };

//   // Gère la décrémentation de la quantité
//   const handleDecrement = (productId) => {
//     const newQuantity = Math.max(1, quantities[productId] - 1);
//     handleQuantityChange(productId, newQuantity);
//   };

//   return (
//     <div>
//       {error && (
//         <Message variant="bg-danger dark:bg-danger-dark text-white">
//           {error}
//         </Message>
//       )}

//       {loading ? (
//         <div className="flex min-h-[312.4px] justify-center items-center">
//           <LoadingSpinner />
//         </div>
//       ) : (
//         <div className="gap-10 md:gap-10 min-h-[312.4px] justify-items-center items-center justify-center grid md:grid-cols-4 grid-cols-2">
//           {products.map((product) => (
//             <div
//               className="rounded-lg md:max-w-[171.2px] gap-2 w-auto h-auto flex flex-col transition hover:transition-[0.3s] hover:ease-in cursor-pointer"
//               key={product._id}
//             >
//               <img
//                 src={product.image}
//                 className="w-full md:max-w-[171.2px] md:max-h-[212.4px] rounded-lg"
//                 alt={product.name}
//               />
//               <div className="text-start w-[100%]">
//                 <div className="flex justify-between">
//                   <p className="font-medium font-serif text-xs md:text-normal">
//                     {product.name}
//                   </p>
//                   <p className="font-semibold text-base font-serif md:text-base">
//                     $ {product.price}
//                   </p>
//                 </div>
//                 <p className="font-medium font-serif">
//                   <Rating
//                     value={product.rating}
//                     text={`${product.numReviews} comment${
//                       product.numReviews > 1 ? "s" : ""
//                     }`}
//                   />
//                 </p>

//                 {/* Quantité */}
//                 <div className="flex items-center mt-2">
//                   {showQuantitySelector[product._id] ? (
//                     <>
//                       <button
//                         className="bg-[#e5e7eb] text-[#4b5563] border border-gray-300 p-1 rounded-l"
//                         onClick={() => handleDecrement(product._id)}
//                       >
//                         -
//                       </button>
//                       <input
//                         type="number"
//                         className="w-12 text-center border border-gray-300"
//                         value={quantities[product._id] || 1}
//                         min="1"
//                         max={product.countInStock}
//                         onChange={(e) =>
//                           handleQuantityChange(
//                             product._id,
//                             parseInt(e.target.value, 10) || 1
//                           )
//                         }
//                       />
//                       <button
//                         className="bg-[#e5e7eb] text-[#4b5563] border border-gray-300 p-1 rounded-r"
//                         onClick={() => handleIncrement(product._id)}
//                       >
//                         +
//                       </button>
//                     </>
//                   ) : (
//                     <button
//                       className="bg-primary/90 hover:bg-primary w-full text-white text-xs md:text-base font-bold py-2 md:py-2 px-1 md:px-4 rounded"
//                       onClick={() =>
//                         setShowQuantitySelector((prev) => ({
//                           ...prev,
//                           [product._id]: true,
//                         }))
//                       }
//                     >
//                       Ajouter au panier
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <Pagination pages={pages} page={page} />
//     </div>
//   );
// };

// export default ShopItems;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, selectCartItems } from "../../redux/Cart/cartSlice";
// import Rating from "./Rating";
// import LoadingSpinner from "../loadingError/loading";
// import Message from "../loadingError/errorMessage";
// import Pagination from "./Pagination";
// import { selectProductList } from "../../redux/products/productsSlice";

// const ShopItems = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error, page, pages } =
//     useSelector(selectProductList);
//   const cartItems = useSelector(selectCartItems);

//   // État local pour les quantités des produits
//   const [quantities, setQuantities] = useState(
//     products.reduce((acc, product) => {
//       acc[product._id] = 1; // Valeur par défaut de la quantité
//       return acc;
//     }, {})
//   );

//   // État local pour gérer l'affichage du sélecteur de quantité
//   const [showQuantitySelector, setShowQuantitySelector] = useState({});

//   // Met à jour la quantité d'un produit
//   const handleQuantityChange = (productId, newQuantity) => {
//     const product = products.find((p) => p._id === productId);
//     // La nouvelle quantité ne doit pas dépasser le stock disponible
//     const validQuantity = Math.max(
//       1,
//       Math.min(newQuantity, product.countInStock)
//     );
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [productId]: validQuantity,
//     }));
//   };

//   // Ajoute le produit au panier
//   const handleAddToCart = (product, quantityToAdd) => {
//     const existingItem = cartItems.find(
//       (item) => item.product._id === product._id
//     );
//     const totalQuantityInCart = existingItem ? existingItem.quantity : 0;

//     if (product.countInStock >= totalQuantityInCart + quantityToAdd) {
//       dispatch(addToCart({ product, quantity: quantityToAdd }));
//     } else {
//       alert(
//         `Quantité demandée dépasse le stock disponible (${
//           product.countInStock - totalQuantityInCart
//         })`
//       );
//     }
//   };

//   // Gère l'incrémentation de la quantité
//   const handleIncrement = (productId) => {
//     const product = products.find((p) => p._id === productId);
//     const currentQuantity = quantities[productId] || 1;
//     const newQuantity = currentQuantity + 1;

//     // Vérifie si la nouvelle quantité dépasse le stock
//     if (newQuantity > product.countInStock) {
//       alert(
//         `Quantité demandée dépasse le stock disponible (${product.countInStock})`
//       );
//       handleQuantityChange(productId, product.countInStock); // Limite la quantité au stock disponible
//     } else {
//       handleQuantityChange(productId, newQuantity);
//     }
//   };

//   // Gère la décrémentation de la quantité
//   const handleDecrement = (productId) => {
//     const newQuantity = Math.max(1, quantities[productId] - 1);
//     handleQuantityChange(productId, newQuantity);
//   };

//   return (
//     <div>
//       {error && (
//         <Message variant="bg-danger dark:bg-danger-dark text-white">
//           {error}
//         </Message>
//       )}

//       {loading ? (
//         <div className="flex min-h-[312.4px] justify-center items-center">
//           <LoadingSpinner />
//         </div>
//       ) : (
//         <div className="gap-10 md:gap-10 min-h-[312.4px] justify-items-center items-center justify-center grid md:grid-cols-4 grid-cols-2">
//           {products.map((product) => (
//             <div
//               className="rounded-lg md:max-w-[171.2px] gap-2 w-auto h-auto flex flex-col transition hover:transition-[0.3s] hover:ease-in cursor-pointer"
//               key={product._id}
//             >
//               <img
//                 src={product.image}
//                 className="w-full md:max-w-[171.2px] md:max-h-[212.4px] rounded-lg"
//                 alt={product.name}
//               />
//               <div className="text-start w-[100%]">
//                 <div className="flex justify-between">
//                   <p className="font-medium font-serif text-xs md:text-normal">
//                     {product.name}
//                   </p>
//                   <p className="font-semibold text-base font-serif md:text-base">
//                     $ {product.price}
//                   </p>
//                 </div>
//                 <p className="font-medium font-serif">
//                   <Rating
//                     value={product.rating}
//                     text={`${product.numReviews} comment${
//                       product.numReviews > 1 ? "s" : ""
//                     }`}
//                   />
//                 </p>

//                 {/* Quantité */}
//                 <div className="flex items-center mt-2">
//                   {showQuantitySelector[product._id] ? (
//                     <>
//                       <button
//                         className="bg-[#e5e7eb] text-[#4b5563] border border-gray-300 p-1 rounded-l"
//                         onClick={() => handleDecrement(product._id)}
//                       >
//                         -
//                       </button>
//                       <input
//                         type="number"
//                         className="w-12 text-center border border-gray-300"
//                         value={quantities[product._id] || 1}
//                         min="1"
//                         max={product.countInStock}
//                         onChange={(e) =>
//                           handleQuantityChange(
//                             product._id,
//                             parseInt(e.target.value, 10) || 1
//                           )
//                         }
//                       />
//                       <button
//                         className="bg-[#e5e7eb] text-[#4b5563] border border-gray-300 p-1 rounded-r"
//                         onClick={() => handleIncrement(product._id)}
//                       >
//                         +
//                       </button>
//                     </>
//                   ) : (
//                     <button
//                       className="bg-[#3b82f6] hover:bg-[#1d4ed8] w-full text-white text-xs md:text-base font-bold py-2 md:py-2 px-1 md:px-4 rounded"
//                       onClick={() =>
//                         setShowQuantitySelector((prev) => ({
//                           ...prev,
//                           [product._id]: true,
//                         }))
//                       }
//                     >
//                       Ajouter au panier
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <Pagination pages={pages} page={page} />
//     </div>
//   );
// };

// export default ShopItems;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, selectCartItems } from "../../redux/Cart/cartSlice";
// import Rating from "./Rating";
// import LoadingSpinner from "../loadingError/loading";
// import Message from "../loadingError/errorMessage";
// import Pagination from "./Pagination";
// import { selectProductList } from "../../redux/products/productsSlice";

// const ShopItems = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error, page, pages } =
//     useSelector(selectProductList);
//   const cartItems = useSelector(selectCartItems);

//   // État local pour les quantités des produits
//   const [quantities, setQuantities] = useState(
//     products.reduce((acc, product) => {
//       acc[product._id] = 1; // Valeur par défaut de la quantité
//       return acc;
//     }, {})
//   );

//   // État local pour gérer l'affichage du sélecteur de quantité
//   const [showQuantitySelector, setShowQuantitySelector] = useState({});

//   // Met à jour la quantité d'un produit
//   const handleQuantityChange = (productId, newQuantity) => {
//     const product = products.find((p) => p._id === productId);
//     // La nouvelle quantité ne doit pas dépasser le stock disponible
//     const validQuantity = Math.max(
//       1,
//       Math.min(newQuantity, product.countInStock)
//     );
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [productId]: validQuantity,
//     }));
//   };

//   // Ajoute le produit au panier
//   const handleAddToCart = (product, quantityToAdd) => {
//     const existingItem = cartItems.find(
//       (item) => item.product._id === product._id
//     );
//     const totalQuantityInCart = existingItem ? existingItem.quantity : 0;

//     if (product.countInStock >= totalQuantityInCart + quantityToAdd) {
//       dispatch(addToCart({ product, quantity: quantityToAdd }));
//     } else {
//       alert(
//         `Quantité demandée dépasse le stock disponible (${
//           product.countInStock - totalQuantityInCart
//         })`
//       );
//     }
//   };

//   // Gère l'incrémentation de la quantité
//   const handleIncrement = (productId) => {
//     const product = products.find((p) => p._id === productId);
//     const currentQuantity = quantities[productId] || 1;

//     // Calculer la nouvelle quantité
//     let newQuantity = currentQuantity + 1;

//     // Assurer que la nouvelle quantité ne dépasse pas le stock disponible
//     if (newQuantity > product.countInStock) {
//       newQuantity = product.countInStock;
//       alert(
//         `Quantité demandée dépasse le stock disponible (${product.countInStock})`
//       );
//     }

//     // Met à jour la quantité dans l'état local
//     handleQuantityChange(productId, newQuantity);

//     // Ajoute au panier seulement si la quantité est valide
//     if (newQuantity <= product.countInStock) {
//       handleAddToCart(product, newQuantity);
//     }
//   };

//   // Gère la décrémentation de la quantité
//   const handleDecrement = (productId) => {
//     const newQuantity = Math.max(1, quantities[productId] - 1);
//     handleQuantityChange(productId, newQuantity);
//   };

//   return (
//     <div>
//       {error && (
//         <Message variant="bg-danger dark:bg-danger-dark text-white">
//           {error}
//         </Message>
//       )}

//       {loading ? (
//         <div className="flex min-h-[312.4px] justify-center items-center">
//           <LoadingSpinner />
//         </div>
//       ) : (
//         <div className="gap-10 md:gap-10 min-h-[312.4px] justify-items-center items-center justify-center grid md:grid-cols-4 grid-cols-2">
//           {products.map((product) => (
//             <div
//               className="rounded-lg md:max-w-[171.2px] gap-2 w-auto h-auto flex flex-col transition hover:transition-[0.3s] hover:ease-in cursor-pointer"
//               key={product._id}
//             >
//               <img
//                 src={product.image}
//                 className="w-full md:max-w-[171.2px] md:max-h-[212.4px] rounded-lg"
//                 alt={product.name}
//               />
//               <div className="text-start w-[100%]">
//                 <div className="flex justify-between">
//                   <p className="font-medium font-serif text-xs md:text-normal">
//                     {product.name}
//                   </p>
//                   <p className="font-semibold text-base font-serif md:text-base">
//                     $ {product.price}
//                   </p>
//                 </div>
//                 <p className="font-medium font-serif">
//                   <Rating
//                     value={product.rating}
//                     text={`${product.numReviews} comment${
//                       product.numReviews > 1 ? "s" : ""
//                     }`}
//                   />
//                 </p>

//                 {/* Quantité */}
//                 <div className="flex items-center mt-2">
//                   {showQuantitySelector[product._id] ? (
//                     <>
//                       <button
//                         className="bg-[#e5e7eb] text-[#4b5563] border border-gray-300 p-1 rounded-l"
//                         onClick={() => handleDecrement(product._id)}
//                       >
//                         -
//                       </button>
//                       <input
//                         type="number"
//                         className="w-12 text-center border border-gray-300"
//                         value={quantities[product._id] || 1}
//                         min="1"
//                         max={product.countInStock}
//                         onChange={(e) =>
//                           handleQuantityChange(
//                             product._id,
//                             parseInt(e.target.value, 10) || 1
//                           )
//                         }
//                       />
//                       <button
//                         className="bg-[#e5e7eb] text-[#4b5563] border border-gray-300 p-1 rounded-r"
//                         onClick={() => handleIncrement(product._id)}
//                       >
//                         +
//                       </button>
//                     </>
//                   ) : (
//                     <button
//                       className="bg-[#3b82f6] hover:bg-[#1d4ed8] w-full text-white text-xs md:text-base font-bold py-2 md:py-2 px-1 md:px-4 rounded"
//                       onClick={() =>
//                         setShowQuantitySelector((prev) => ({
//                           ...prev,
//                           [product._id]: true,
//                         }))
//                       }
//                     >
//                       Ajouter au panier
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <Pagination pages={pages} page={page} />
//     </div>
//   );
// };

// export default ShopItems;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, selectCartItems } from "../../redux/Cart/cartSlice";
// import Rating from "./Rating"; // Assurez-vous que ce chemin est correct
// import LoadingSpinner from "../loadingError/loading"; // Assurez-vous que ce chemin est correct
// import Message from "../loadingError/errorMessage"; // Assurez-vous que ce chemin est correct
// import Pagination from "./Pagination"; // Assurez-vous que ce chemin est correct
// import { selectProductList } from "../../redux/products/productsSlice";

// const ShopItems = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error, page, pages } =
//     useSelector(selectProductList);
//   const cartItems = useSelector(selectCartItems);

//   // Crée un état local pour les quantités des produits
//   const [quantities, setQuantities] = useState(
//     products.reduce((acc, product) => {
//       acc[product._id] = 1; // Valeur par défaut de la quantité
//       return acc;
//     }, {})
//   );

//   // Crée un état local pour gérer l'affichage du sélecteur de quantité
//   const [showQuantitySelector, setShowQuantitySelector] = useState({});

//   const handleQuantityChange = (productId, newQuantity) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [productId]: newQuantity,
//     }));
//   };

//   const handleAddToCart = (product) => {
//     const quantityToAdd = quantities[product._id] || 1; // Quantité souhaitée pour le produit

//     // Calculer la quantité totale déjà dans le panier pour ce produit
//     const existingItem = cartItems.find(
//       (item) => item.product._id === product._id
//     );
//     const totalQuantityInCart = existingItem ? existingItem.quantity : 0;

//     // Vérifier si la quantité totale demandée dépasse le stock
//     if (product.countInStock >= totalQuantityInCart + quantityToAdd) {
//       // Ajoutez au panier seulement si la quantité est valide
//       dispatch(addToCart({ product, quantity: quantityToAdd }));
//       // Masquer les boutons après ajout
//       setShowQuantitySelector((prev) => ({ ...prev, [product._id]: false }));
//     } else {
//       // Afficher un message d'erreur si la quantité totale dépasse le stock
//       alert(
//         `Quantité demandée dépasse le stock disponible (${
//           product.countInStock - totalQuantityInCart
//         })`
//       );
//     }
//   };

//   const handleIncrementQuantity = (productId) => {
//     const newQuantity = Math.min(
//       products.find((product) => product._id === productId).countInStock,
//       quantities[productId] + 1
//     );
//     handleQuantityChange(productId, newQuantity);
//     handleAddToCart(products.find((product) => product._id === productId));
//   };

//   return (
//     <div>
//       {error && (
//         <Message variant="bg-danger dark:bg-danger-dark text-white">
//           {error}
//         </Message>
//       )}

//       {loading ? (
//         <div className="flex min-h-[312.4px] justify-center items-center">
//           <LoadingSpinner />
//         </div>
//       ) : (
//         <div className="gap-10 md:gap-10 min-h-[312.4px] justify-items-center items-center justify-center grid md:grid-cols-4 grid-cols-2">
//           {products.map((product) => (
//             <div
//               className="rounded-lg md:max-w-[171.2px] gap-2 w-auto h-auto flex flex-col transition hover:transition-[0.3s] hover:ease-in cursor-pointer"
//               key={product._id}
//             >
//               <img
//                 src={product.image}
//                 className="w-full md:max-w-[171.2px] md:max-h-[212.4px] rounded-lg"
//                 alt={product.name}
//               />
//               <div className="text-start w-[100%]">
//                 <div className="flex justify-between">
//                   <p className="font-medium font-serif text-xs md:text-normal">
//                     {product.name}
//                   </p>
//                   <p className="font-semibold text-base font-serif md:text-base">
//                     $ {product.price}
//                   </p>
//                 </div>
//                 <p className="font-medium font-serif">
//                   <Rating
//                     value={product.rating}
//                     text={`${product.numReviews} comment${
//                       product.numReviews > 1 ? "s" : ""
//                     }`}
//                   />
//                 </p>

//                 {/* Quantité */}
//                 <div className="flex items-center mt-2">
//                   {showQuantitySelector[product._id] ? (
//                     <>
//                       <button
//                         className="bg-[#e5e7eb] text-[#4b5563] border border-gray-300 p-1 rounded-l"
//                         onClick={() =>
//                           handleQuantityChange(
//                             product._id,
//                             Math.max(1, quantities[product._id] - 1)
//                           )
//                         }
//                       >
//                         -
//                       </button>
//                       <input
//                         type="number"
//                         className="w-12 text-center border border-gray-300"
//                         value={quantities[product._id] || 1}
//                         min="1"
//                         max={product.countInStock}
//                         onChange={(e) =>
//                           handleQuantityChange(
//                             product._id,
//                             Math.min(
//                               product.countInStock,
//                               parseInt(e.target.value)
//                             )
//                           )
//                         }
//                       />
//                       <button
//                         className="bg-[#e5e7eb] text-[#4b5563] border border-gray-300 p-1 rounded-r"
//                         onClick={() => handleIncrementQuantity(product._id)}
//                       >
//                         +
//                       </button>
//                     </>
//                   ) : (
//                     <button
//                       className="bg-[#3b82f6] hover:bg-[#1d4ed8] w-full text-white text-xs md:text-base font-bold py-2 md:py-2 px-1 md:px-4 rounded"
//                       onClick={() =>
//                         setShowQuantitySelector((prev) => ({
//                           ...prev,
//                           [product._id]: true,
//                         }))
//                       }
//                     >
//                       Ajouter au panier
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <Pagination pages={pages} page={page} />
//     </div>
//   );
// };

// export default ShopItems;

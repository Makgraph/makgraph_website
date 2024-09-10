import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../../redux/Cart/cartSlice";
import Rating from "./Rating";
import QuantitySelector from "./QuantitySelector";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // État local pour afficher ou masquer le sélecteur de quantité
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);

  // Ajouter un produit au panier
  const handleAddToCart = () => {
    const existingItem = cartItems.find(
      (item) => item.product._id === product._id
    );

    // Si le produit est déjà dans le panier, juste afficher le sélecteur
    if (existingItem) {
      setShowQuantitySelector(true);
    } else {
      // Sinon, ajouter le produit avec une quantité par défaut de 1 et afficher le sélecteur
      dispatch(addToCart({ product, quantity: 1 }));
      setShowQuantitySelector(true);
    }
  };

  return (
    <div className="rounded-lg md:max-w-[171.2px] gap-2 w-auto h-auto flex flex-col transition hover:transition-[0.3s] hover:ease-in cursor-pointer">
      <Link to={`/products/${product._id}`}>
        <img
          src={product.image}
          className="w-full md:max-w-[171.2px] md:max-h-[212.4px] rounded-lg"
          alt={product.name}
        />
      </Link>
      <div className="text-start w-[100%]">
        <div className="flex justify-between">
          <p className="font-medium font-serif text-xs md:text-normal">
            {product.name}
          </p>
          <p className="font-semibold text-base font-serif md:text-base">
            $ {product.price}
          </p>
        </div>
        <p className="font-medium font-serif">
          <Rating
            value={product.rating}
            text={`${product.numReviews} comment${
              product.numReviews > 1 ? "s" : ""
            }`}
          />
        </p>
        {!showQuantitySelector ? (
          <button
            className="bg-primary/90 hover:bg-primary w-full text-white text-xs md:text-base font-bold py-2 md:py-2 px-1 md:px-4 rounded mt-2"
            onClick={handleAddToCart}
          >
            Ajouter au panier
          </button>
        ) : (
          <div className="py-2 md:py-2 w-full">
            <QuantitySelector
              product={product}
              showQuantitySelector={showQuantitySelector}
              onToggleQuantitySelector={
                () => setShowQuantitySelector(false) // Masquer le sélecteur après sélection
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

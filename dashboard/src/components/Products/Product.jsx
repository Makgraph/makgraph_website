import React from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  searchOutline,
  personCircleOutline,
  settingsOutline,
  trash,
  create,
} from "ionicons/icons";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/products/productsSlice";

const Product = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  // const deleteHandler = (productId) => {
  //   if (window.confirm("Êtes-vous sûr de vouloir supprimer ce produit?")) {
  //     dispatch(deleteProduct(productId));
  //   }
  // };
  // const handleDelete = () => {
  //   if (window.confirm("Are you sure??")) {
  //     dispatch(deleteProduct(product._id));
  //   }
  // };
  const handleDelete = () => {
    dispatch(deleteProduct(product._id));
  };

  return (
    // <div className="gap-10 md:gap-28 items-center justify-center grid md:grid-cols-4 grid-cols-2">

    <div className="border border-[#d4d6d8] ">
      <div
        // className="rounded-lg gap-2 w-auto h-auto flex flex-col transition hover:transition-[0.3s] hover:ease-in cursor-pointer"
        className="py-2 sm:py-2 px-4 sm:px-6"
        key={product._id}
      >
        <Link to="#">
          <img
            src={product.image}
            className="w-full rounded-sm"
            alt={product.name}
          />
        </Link>
      </div>
      <div className="pl-3">
        <div className="text-start w-[100%]">
          <p className="font-medium font-serif text-xs md:text-sm">
            {product.name}
          </p>
          <p className="font-semibold font-serif  text-sm md:text-base">
            <b>$ {product.price}</b>
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full sm:py-2 px-1">
        <Link
          to={`/product/${product._id}/edit`}
          className="flex justify-center items-center w-full"
        >
          <button className="w-full border hover:bg-[#22c55e] hover:text-onPrimary border-[#22c55e]">
            <IonIcon
              icon={create}
              className="text-[#22c55e] hover:text-onPrimary h-3 sm:h-4 w-3 sm:w-4"
            />
          </button>
        </Link>

        <button
          className="w-full border hover:bg-danger hover:text-onPrimary border-danger"
          onClick={handleDelete}
        >
          <IonIcon
            icon={trash}
            className="text-danger hover:text-onPrimary h-3 sm:h-4 w-3 sm:w-4"
          />
        </button>
      </div>
    </div>
  );
};

export default Product;

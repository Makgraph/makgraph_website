import React from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { trash, create } from "ionicons/icons";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../redux/categories/deleteCategorieSlice";

const Categorie = (props) => {
  const { categorie } = props;
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
      dispatch(deleteCategory(id));
    }
  };

  return (
    <div className="border border-[#d4d6d8]">
      <div className="py-2 sm:py-2 px-4 sm:px-6" key={categorie._id}>
        <Link to="#">
          {categorie.category === "video" ? (
            <video
              controls
              className="w-full max-w-[140px] max-h-[151px] rounded-sm"
            >
              <source src={categorie.url} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          ) : (
            <img
              src={categorie.url}
              className="max-w-[121px] max-h-[151px] w-full rounded-sm"
              alt={categorie.title}
            />
          )}
        </Link>
      </div>
      <div className="pl-3">
        <div className="text-start w-[100%]">
          <p className=" font-semibold font-serif  text-sm md:text-base">
            {categorie.title}
          </p>
          <p className="font-thin  text-xs md:text-sm">
            <b>{categorie.description}</b>
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full sm:py-2 px-1">
        <Link
          to={`/categorie/${categorie._id}/edit`}
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
          onClick={() => deleteHandler(categorie._id)}
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

export default Categorie;

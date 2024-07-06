// PrivateRoute.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkAuth } from "./redux/auth/authSlice";

const PrivateRoute = ({ element }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    // Au chargement du composant, vérifiez l'authentification
    dispatch(checkAuth());
  }, [dispatch]);

  // Vérification de l'état d'authentification
  if (isLoggedIn === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-[#1f2937] text-lg">
            Vérification de l'authentification en cours...
          </p>
        </div>
      </div>
    );
  }

  // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
  if (!isLoggedIn) {
    navigate("/Accueil/login", { replace: true });
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <p className="text-error text-lg mb-4">Accès non autorisé</p>
          <p className="text-[#374151]">
            Vous devez être connecté pour accéder à cette page.
          </p>
          <button
            className="mt-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
            onClick={() => navigate("/Accueil/login", { replace: true })}
          >
            Se connecter
          </button>
        </div>
      </div>
    );
  }

  return <>{element}</>;
};

export default PrivateRoute;

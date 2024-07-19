// ErrorPage.jsx

import React from "react";
// import errorImage from "./error-image.png"; // Assurez-vous d'avoir le bon chemin vers votre image

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <div className="mb-4 md:mb-0 md:mr-8">
          {/* <img
            src={errorImage}
            alt="Error"
            className="max-w-xs mx-auto md:mx-0"
          /> */}
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
          <p className="text-gray-600 mb-4">
            La page que vous recherchez est introuvable.
          </p>
          <a
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

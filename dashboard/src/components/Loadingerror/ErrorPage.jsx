// // ErrorPage.jsx

// import React from "react";
// // import errorImage from "./error-image.png"; // Assurez-vous d'avoir le bon chemin vers votre image

// const ErrorPage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
//         <div className="mb-4 md:mb-0 md:mr-8">
//           {/* <img
//             src={errorImage}
//             alt="Error"
//             className="max-w-xs mx-auto md:mx-0"
//           /> */}
//         </div>
//         <div className="text-center md:text-left">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
//           <p className="text-gray-600 mb-4">
//             La page que vous recherchez est introuvable.
//           </p>
//           <a
//             href="/"
//             className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Retour à l'accueil
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ErrorPage;
import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center max-w-3xl mx-auto">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-4xl font-bold text-[#1f2937] mb-4">Oops!</h1>
          <p className="text-[#4b5563] mb-4">
            La page que vous recherchez est introuvable.
          </p>
          <a
            href="/"
            className="inline-block bg-[#3b82f6] hover:bg-[#1d4ed8] text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

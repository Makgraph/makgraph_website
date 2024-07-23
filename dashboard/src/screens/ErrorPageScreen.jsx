// import { useRouteError, Link } from "react-router-dom";

// export default function ErrorPage() {
//   const error = useRouteError();
//   console.error(error);

//   return (
//     <div className=" flex flex-col items-center gap-2">
//       <h1>Oops!</h1>
//       <p>Désolé, une erreur inattendue s'est produite.</p>
//       <p>
//         <i>{error.statusText || error.message}</i>
//       </p>
//       <Link to="/">
//         <span>Retour à la page d'acceuil</span>
//       </Link>
//     </div>
//   );
// }
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  // console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-[#1f2937]">Oops!</h1>
        <p className="text-[#4b5563]">
          Désolé, une erreur inattendue s'est produite.
        </p>
        <p className="text-[#4b5563] italic">
          {error.statusText || error.message}
        </p>
        <Link
          to="/"
          className="inline-block bg-[#3b82f6] hover:bg-[#1d4ed8] text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Retour à la page d'accueil
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className=" flex flex-col items-center gap-2">
      <h1>Oops!</h1>
      <p>Désolé, une erreur inattendue s'est produite.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <span>Retour à la page d'acceuil</span>
      </Link>
    </div>
  );
}

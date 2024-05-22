import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Header />
      <div className="p-screen md:mt-20 pt-24">
        <div className="px-auto md:px-[250px] pb-12 ">
          <div className="rounded-lg border border-primary p-8 shadow-xl ">
            <div className="flex flex-col items-center justify-center pb-4">
              <h3 className="text-primary">Connectez-vous à votre compte</h3>
              <Link to={`/home/SignUp/1`}>
                <p className="text-error p-4 underline underline-offset-4 cursor-pointer hover:text-primary">
                  Pas de compte ? Créez-en un
                </p>
              </Link>
            </div>
            <form action="#" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-outline hover:bg-primary/5 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-outline hover:bg-primary/10 disabled:bg-error disabled:text-error   p-3 text-sm"
                  placeholder="Email"
                  type="email"
                  id="email"
                />
              </div>
              <div className="flex justify-center p-4">
                <p className="text-error underline underline-offset-4 cursor-pointer hover:text-primary ">
                  Mot de passe Oublié ?
                </p>
              </div>

              <div className="mt-4 flex justify-center">
                <button className="btn-primary w-[45%]">
                  <span className="labellg ">Connexion</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

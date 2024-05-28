import React, { useState } from "react";
import { toast } from "react-toastify";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault;
  };

  return (
    <div>
      <Header />
      <div className="p-screen md:mt-20 pt-24">
        <div className="px-auto  md:px-[250px] pb-12 ">
          <div className="rounded-lg border border-primary p-8 shadow-xl ">
            <div className="flex flex-col items-center justify-center pb-4">
              <h3 className="md:flex hidden text-primary">
                Créez votre compte
              </h3>
              <h4 className="md:hidden text-primary">Créez votre compte</h4>
              <Link to={`/home/Login/1`}>
                <p className="md:flex hidden text-error p-4 underline underline-offset-4 cursor-pointer hover:text-primary">
                  Vous avez déjà un compte ? Connectez-vous !
                </p>
                <p className="md:hidden text-[14px] text-error p-4 underline underline-offset-4 cursor-pointer hover:text-primary">
                  Vous avez déjà compte ? Connectez-vous !
                </p>
              </Link>
            </div>
            <form onSubmit={onSubmit} action="#" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Nom
                </label>
                <input
                  className="w-full rounded-lg border-outline hover:bg-primary/5 p-3 text-sm"
                  placeholder="Entrez votre nom"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-outline hover:bg-primary/10 disabled:bg-error disabled:text-error   p-3 text-sm"
                  placeholder="Entrez votre email"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full rounded-lg border-outline hover:bg-primary/10 disabled:bg-error disabled:text-error   p-3 text-sm"
                  placeholder="Entrez votre mot de passe"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="password">
                  Password2
                </label>
                <input
                  className="w-full rounded-lg border-outline hover:bg-primary/10 disabled:bg-error disabled:text-error   p-3 text-sm"
                  placeholder="Confirmez votre mot de passe"
                  type="password"
                  id="password2"
                  name="password2"
                  value={password2}
                  onChange={onChange}
                />
              </div>

              <div className="mt-4 p-4 flex justify-center">
                <button
                  type="submit"
                  className=" flex justify-center items-center btn-primary w-[45%]"
                >
                  <span className="labellg flex justify-center items-center ">
                    Enregistrer
                  </span>
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

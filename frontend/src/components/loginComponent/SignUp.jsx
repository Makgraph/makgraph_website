import React, { useEffect, useState } from "react";
import Header from "../headerComponent/Header";
import Footer from "../Footer";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { register, reset } from "../../redux/auth/authSlice";

export default function SignUp() {
  // window.scrollTo(0, 0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Les mots de passe ne correspondent pas");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <div>
      <Header />
      <div className="p-screen md:mt-20 pt-24">
        <div className="px-auto  md:px-[250px] pb-12 ">
          <div className="rounded-lg border border-primary p-8 bg-secondaryContainer shadow-xl ">
            <div className="flex flex-col items-center justify-center pb-4">
              <h3 className="font-serif md:flex hidden text-primary">
                Créez votre compte
              </h3>
              <h4 className="font-serif md:hidden text-primary">
                Créez votre compte
              </h4>
              <Link to="/Accueil/login">
                <p className="font-serif md:flex hidden text-error p-4 underline underline-offset-4 cursor-pointer hover:text-primary">
                  Vous avez déjà un compte ? Connectez-vous !
                </p>
                <p className="font-serif md:hidden text-[14px] text-error p-4 underline underline-offset-4 cursor-pointer hover:text-primary">
                  Vous avez déjà compte ? Connectez-vous !
                </p>
              </Link>
            </div>
            <form onSubmit={onSubmit} action="#" className=" space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Nom
                </label>
                <input
                  className="font-serif w-full rounded-lg border-outline hover:bg-primary/10 hover:text-onPrimary p-3 text-sm"
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
                  className="font-serif w-full rounded-lg border-outline hover:bg-primary/10 disabled:bg-error disabled:text-error   p-3 text-sm"
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
                  className="font-serif w-full rounded-lg border-outline hover:bg-primary/10 disabled:bg-error disabled:text-error   p-3 text-sm"
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
                  className="font-serif w-full rounded-lg border-outline hover:bg-primary/10 disabled:bg-error disabled:text-error   p-3 text-sm"
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
                  <span className="labellg font-sans font-semibold flex justify-center items-center ">
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

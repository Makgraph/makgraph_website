import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Header from "../components/headerComponent/Header";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, reset } from "../redux/auth/authSlice";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
      navigate("/shop");
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

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <div>
      <Header />
      <div className="p-screen md:mt-20 pt-24">
        <div className="px-auto  md:px-[250px] pb-12 ">
          <div className="rounded-lg border border-primary p-8 shadow-xl ">
            <div className="flex flex-col items-center justify-center pb-4">
              <h3 className="text-primary md:flex hidden">
                Connectez-vous à votre compte.
              </h3>
              <h5 className="text-primary md:hidden">
                Connectez-vous à votre compte.
              </h5>
              <Link to={`/Accueil/SignUp`}>
                <p className="md:flex hidden text-error p-4 underline underline-offset-4 cursor-pointer hover:text-primary">
                  Pas de compte ? Créez-en un
                </p>
              </Link>
              <Link to={`/Accueil/SignUp`}>
                <p className="md:hidden text-error text-[14px] p-4 underline underline-offset-4 cursor-pointer hover:text-primary">
                  Pas de compte ? Créez-en un
                </p>
              </Link>
            </div>
            <form onSubmit={onSubmit} action="#" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-outline hover:bg-primary/5 p-3 text-sm"
                  placeholder="Entrez votre email"
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
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
              <div className=" md:flex hidden justify-center p-4">
                <p className=" text-error underline underline-offset-4 cursor-pointer hover:text-primary ">
                  Mot de passe Oublié ?
                </p>
              </div>
              <div className="flex md:hidden justify-center p-4">
                <p className="md:hidden text-[14px] text-error underline underline-offset-4 cursor-pointer hover:text-primary ">
                  Mot de passe Oublié ?
                </p>
              </div>

              <div className=" flex justify-center">
                <button
                  type="submit"
                  className="flex justify-center items-center btn-primary w-[45%]"
                >
                  <span className="labellg flex justify-center items-center">
                    Connexion
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

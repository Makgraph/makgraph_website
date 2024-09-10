import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, reset, setToken } from "../redux/auth/authSlice";
import LoadingSpinner from "../components/Loadingerror/loading";
import ErrorPage from "../components/Loadingerror/ErrorPage";
import Message from "../components/Loadingerror/errorMessage";
import { getAllOrders } from "../redux/orders/ordersSlice";

export default function LoginScreen() {
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

  // Effect pour gérer le résultat de la connexion
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && user) {
      if (user.token) {
        dispatch(setToken(user.token));
      }
      navigate("/"); // Redirigez l'utilisateur après la connexion réussie
      dispatch(reset()); // Réinitialisez l'état de l'authentification
      dispatch(getAllOrders());
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  return (
    <>
      <div className="p-screen md:mt-10 pt-24">
        <div className="px-auto sm:px-32  md:px-[250px] pb-12 ">
          <div className="rounded-lg border border-primary p-8 bg-secondaryContainer shadow-xl ">
            {isError && (
              <Message>
                <div className="p-4">
                  <Message variant="bg-[#fee2e2] text-[#991b1b]">
                    {message}
                  </Message>
                </div>
              </Message>
            )}
            {isLoading && <LoadingSpinner />}
            <div className="flex flex-col items-center justify-center pb-4">
              <p className="font-serif text-xl sm:text-2xl text-primary">
                Login
              </p>
            </div>
            <form onSubmit={onSubmit} action="#" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="font-serif w-full rounded-lg border-outline hover:bg-primary/5 p-3 text-sm"
                  placeholder="Entrez votre email"
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="font-serif w-full rounded-lg border-outline hover:bg-primary/10 disabled:bg-error disabled:text-error p-3 text-sm"
                  placeholder="Entrez votre mot de passe"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex justify-center items-center btn-primary sm:w-[45%]"
                >
                  <span className="labellg text-base sm:text-lg font-sans font-semibold flex justify-center items-center">
                    Connexion
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

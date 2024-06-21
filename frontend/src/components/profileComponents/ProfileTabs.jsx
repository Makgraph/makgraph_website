import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../loadingError/loading";
import { updateUserProfile } from "../../redux/auth/authSlice";

const ProfileTabs = () => {
  const { isError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth.user);
  const [updatedProfile, setUpdatedProfile] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password match validation
    if (updatedProfile.password !== updatedProfile.password2) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }

    dispatch(updateUserProfile(updatedProfile))
      .unwrap()
      .then((updatedUser) => {
        toast.success("Mise à jour du profil réussie");
      })
      .catch((error) => {
        toast.error("Échec de la mise à jour du profil. Veuillez réessayer.");
      });
  };

  return (
    <>
      <toast />
      {isError && <Message variant="alert-danger"></Message>}
      <form onSubmit={handleSubmit} action="#" className="space-y-4">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-8">
            <div>
              <label className="sr-only" htmlFor="name">
                Nom
              </label>
              <input
                className="w-full rounded-lg cursor-pointer border-primary border-2 hover:bg-primary/5 p-3 text-sm"
                placeholder="Nom d'utilisateur"
                type="text"
                id="name"
                name="name"
                value={updatedProfile.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <input
                className="w-full rounded-lg cursor-pointer border-black border-2 hover:bg-primary/10 disabled:bg-error disabled:text-error   p-3 text-sm"
                placeholder="Nouveau mot de passe"
                type="password"
                id="password"
                name="password"
                value={updatedProfile.password}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-lg cursor-pointer border-onSecondary border-2 hover:bg-primary/10 disabled:bg-error disabled:text-error   p-3 text-sm"
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value={updatedProfile.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="password">
                Password2
              </label>
              <input
                className="w-full rounded-lg cursor-pointer border-secondary border-2 hover:bg-primary/20 disabled:bg-error disabled:text-error   p-3 text-sm"
                placeholder="Confirmez nouveau mot de passe"
                type="password"
                id="password2"
                name="password2"
                value={updatedProfile.password2}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 flex justify-center">
          <button
            type="submit"
            className=" flex justify-center items-center btn-primary w-[100%]"
          >
            <span className="labellg font-medium flex justify-center items-center ">
              PROFIL UPDATE
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export default ProfileTabs;

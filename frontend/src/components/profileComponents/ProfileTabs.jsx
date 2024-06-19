import React, { useState } from "react";

const ProfileTabs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {};
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={onSubmit} action="#" className="space-y-4">
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
                value={name}
                onChange={onChange}
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
                value={password}
                onChange={onChange}
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
                value={email}
                onChange={onChange}
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
                value={password2}
                onChange={onChange}
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

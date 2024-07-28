import axios from "axios";
// Utiliser la variable d'environnement pour définir l'URL de base
const baseUrl = process.env.VITE_API_URL;
const API_URL = `${baseUrl}/api/users/`;

// const API_URL = "/api/users/";

// Fonction pour vérifier si l'utilisateur est connecté
const isLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? true : false;
};

//Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
  document.location.href = "/Accueil/login";
};

const authService = {
  isLoggedIn,
  register,
  logout,
  login,
};

export default authService;

import axios from "axios";
import { useSelector } from "react-redux";
const API_URL = "/api/users/";

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
  document.location.href = "/login";
};

// Fonction pour récupérer les utilisateurs
const fetchUsersApi = async (token) => {
  try {
    const response = await axios.get("/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Échec de la récupération des utilisateurs");
  }
};

const authService = {
  isLoggedIn,
  register,
  logout,
  login,
  fetchUsersApi,
};

export default authService;

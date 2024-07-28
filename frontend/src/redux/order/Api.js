import axios from "axios";
// Charger l'URL de base depuis les variables d'environnement
const baseUrl = import.meta.env.VITE_API_URL;

const Api = {
  // Fonction pour créer une commande
  createOrder: async (orderData, token) => {
    try {
      const response = await axios.post(`${baseUrl}/api/orders`, orderData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(
        error.response.data.error || "Erreur lors de la création de la commande"
      );
    }
  },

  // Fonction pour récupérer les détails d'une commande
  getOrderDetail: async (orderId, token) => {
    try {
      const response = await axios.get(`${baseUrl}/api/orders/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(
        error.response.data.error ||
          "Échec de la récupération des détails de la commande"
      );
    }
  },

  // Fonction pour mettre à jour les détails d'une commande
  updateOrderDetail: async (id, paymentResult, token) => {
    try {
      const response = await axios.put(
        `${baseUrl}/api/orders/${id}/pay`,
        paymentResult,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response.data.error ||
          "Échec de la mise à jour des détails de la commande"
      );
    }
  },

  // Fonction pour récupérer la liste des commandes d'un utilisateur
  getUserOrders: async (token) => {
    try {
      const response = await axios.get(`${baseUrl}/api/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(
        error.response.data.error ||
          "Échec de la récupération des commandes de l'utilisateur"
      );
    }
  },
};

export default Api;

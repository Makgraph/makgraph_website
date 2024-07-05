import axios from "axios";

const Api = {
  // Fonction pour créer une commande
  createOrder: async (orderData, token) => {
    try {
      const response = await axios.post(`/api/orders`, orderData, {
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
  getOrderDetail: async (id, token) => {
    try {
      const response = await axios.get(`/api/orders/${id}`, {
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

  // Fonction pour récupérer les détails d'une commande
  updateOrderDetail: async (id, paymentResult, token) => {
    try {
      const response = await axios.put(`/api/orders/${id}/pay`, paymentResult, {
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
};

export default Api;

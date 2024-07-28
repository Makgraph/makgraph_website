import axios from "axios";
// Charger l'URL de base depuis les variables d'environnement
const baseUrl = import.meta.env.VITE_API_URL;

export const api = {
  getUserDetails: async (_id, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(`${baseUrl}/api/users/profile`, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateUserProfile: async (_id, updatedProfileData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.put(
        `${baseUrl}/api/users/profile`,
        updatedProfileData,
        config
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  // Function to create an order via API
  createOrderAPI: async (orderData) => {
    try {
      const response = await axios.post(`${baseUrl}/api/orders`, orderData, {
        headers: {
          "Content-Type": "application/json",
          // Add any other headers your API requires
        },
      });

      return response.data; // Assuming your API returns JSON data
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Échec de la création de la commande"
      );
    }
  },

  getOrderDetails: async (orderId, _id, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        `${baseUrl}/api/orders/${orderId}`,
        config
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

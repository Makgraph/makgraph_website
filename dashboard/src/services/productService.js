import axios from "axios";

const productService = {
  async deleteProduct(productId, token) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.delete(`/api/products/${productId}`, config);
      return response.data; // Retourner les données mises à jour ou un message de succès si nécessaire
    } catch (error) {
      throw new Error(`Error deleting product: ${error.message}`);
    }
  },
};

export default productService;

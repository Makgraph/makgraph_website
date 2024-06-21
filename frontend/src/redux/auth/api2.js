import axios from "axios";

export const api2 = {
  putUserDetails: async (_id, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.put("/api/users/profile", config);
      console.log(config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

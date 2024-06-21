import axios from "axios";

export const api = {
  getUserDetails: async (_id, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(`/api/users/profile`, config);
      return response.data;
    } catch (error) {
      throw error; // Ensure proper error handling in your application
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
        `/api/users/profile`,
        updatedProfileData,
        config
      );
      return response.data;
    } catch (error) {
      throw error; // Ensure proper error handling in your application
    }
  },
};

// import axios from "axios";

// export const api = {
//   getUserDetails: async (_id, token) => {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     try {
//       const response = await axios.get("/api/users/profile", config);
//       console.log(config);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },
// };

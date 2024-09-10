import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "./Api";
import { logout } from "../auth/authSlice";

// Thunk pour obtenir les détails d'une commande
export const fetchOrderDetails = createAsyncThunk(
  "orderDetails/fetchOrderDetails",
  async (orderId, thunkAPI) => {
    const { token } = thunkAPI.getState().auth.user; // Obtenez le token d'authentification depuis le state
    console.log(token); // Debug: Affichez le token pour vérifier sa présence
    try {
      const response = await Api.getOrderDetail(orderId, token); // Appelez la fonction API pour obtenir les détails de la commande
      console.log("API response:", response); // Debug: Affichez la réponse API
      return response;
    } catch (error) {
      const message = error.response?.data?.error || error.message; // Gérer les messages d'erreur
      if (message === "Not authorized, token failed") {
        thunkAPI.dispatch(logout());
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: {
    loading: true,
    order: {},
    error: null,
  },
  reducers: {
    resetOrderDetail: (state) => {
      state.order = {};
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(fetchOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetOrderDetail } = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { logout } from "../auth/authSlice";
// const baseUrl = import.meta.env.VITE_API_URL;

// // Création d'une action asynchrone pour obtenir les détails de la commande
// export const fetchOrderDetails = createAsyncThunk(
//   "orderDetails/fetchOrderDetails",
//   async (id, { getState, dispatch, rejectWithValue }) => {
//     try {
//       const { auth } = getState(); // Acces à l'état auth
//       const { token } = auth; // Déstructuration le token
//       console.log(token);
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       console.log("Configuration des en-têtes:", config);

//       const response = await axios.get(`${baseUrl}/api/orders/${id}`, config);
//       return response.data;
//     } catch (error) {
//       const message =
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message;
//       if (message === "Not authorized, token failed") {
//         dispatch(logout());
//       }
//       return rejectWithValue(message);
//     }
//   }
// );

// const orderDetailsSlice = createSlice({
//   name: "orderDetails",
//   initialState: {
//     loading: true,
//     order: {},
//     error: null,
//   },
//   reducers: {
//     resetOrderDetail: (state) => {
//       state.order = {}; // Reset orderList to empty array
//       state.loading = false;
//       state.success = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchOrderDetails.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchOrderDetails.fulfilled, (state, action) => {
//         state.loading = false;
//         state.order = action.payload;
//       })
//       .addCase(fetchOrderDetails.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { resetOrderDetail } = orderDetailsSlice.actions;
// export default orderDetailsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from "../auth/authSlice"; // Assurez-vous d'importer correctement la fonction logout

// Créez une action asynchrone pour obtenir les détails de la commande
export const getOrderDetails = createAsyncThunk(
  "orderDetails/getOrderDetails",
  async (id, { getState, dispatch, rejectWithValue }) => {
    try {
      const { auth } = getState(); // Accédez à l'état auth
      const { token } = auth; // Déstructurez le token

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(`/api/orders/${id}`, config);
      return response.data;
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout()); // Assurez-vous d'avoir accès à dispatch ici
      }
      return rejectWithValue(message);
    }
  }
);

// Créez le slice
const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: {
    loading: true,
    order: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrderDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(getOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderDetailsSlice.reducer;

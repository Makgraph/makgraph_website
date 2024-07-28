import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from "../auth/authSlice";
const baseUrl = import.meta.env.VITE_API_URL;

// Création d'une action asynchrone pour obtenir les détails de la commande
export const fetchOrderDetails = createAsyncThunk(
  "orderDetails/fetchOrderDetails",
  async (id, { getState, dispatch, rejectWithValue }) => {
    try {
      const { auth } = getState(); // Acces à l'état auth
      const { token } = auth; // Déstructuration le token

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(`${baseUrl}/api/orders/${id}`, config);
      return response.data;
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      return rejectWithValue(message);
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
      state.order = {}; // Reset orderList to empty array
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

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Action asynchrone pour récupérer les produits
export const getAllOrders = createAsyncThunk(
  "orders/getAllOrders",
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth; // Récupérer le token d'authentification depuis le state Redux
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Ajouter le token d'authentification dans l'en-tête
      },
    };

    try {
      const response = await axios.get("/api/orders", config); // Utiliser axios avec l'en-tête d'authentification
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const resetOrdersState = createAsyncThunk(
  "orders/resetOrdersState",
  async (_, thunkAPI) => {
    return { orders: [], loading: false, success: false, error: null };
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.orders = action.payload; // Assuming the API returns the created order
        console.log(action.payload);
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Assuming the API returns an error message
      })
      .addCase(resetOrdersState.fulfilled, (state, action) => {
        state.orders = action.payload.orders;
        state.loading = action.payload.loading;
        state.success = action.payload.success;
        state.error = action.payload.error;
      });
  },
});

export const {} = ordersSlice.actions;
export default ordersSlice.reducer;

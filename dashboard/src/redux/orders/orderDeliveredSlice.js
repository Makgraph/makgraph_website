import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Action asynchrone pour marquer une commande comme livrée
export const orderDelivered = createAsyncThunk(
  "orderDelivered/orderDelivered",
  async (orderDetails, thunkAPI) => {
    const { token } = thunkAPI.getState().auth; // Récupérer le token d'authentification depuis le state Redux
    console.log(orderDetails);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Ajouter le token d'authentification dans l'en-tête
      },
    };

    try {
      const response = await axios.put(
        `/api/orders/${orderDetails._id}/delivered`,
        {},
        config
      ); // Marquer la commande comme livrée
      console.log(response.data);
      return response.data; // Vous pouvez retourner des données supplémentaires si nécessaire
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const orderDeliveredSlice = createSlice({
  name: "orderDelivered",
  initialState: {
    deliveryStatus: {},
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    // resetDeliveredSuccess(state) {
    //   state.success = false;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(orderDelivered.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(orderDelivered.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.deliveryStatus = action.payload;
      })
      .addCase(orderDelivered.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Gérer l'erreur si la livraison échoue
      });
  },
});

export const { resetDeliveredSuccess } = orderDeliveredSlice.actions;
export default orderDeliveredSlice.reducer;

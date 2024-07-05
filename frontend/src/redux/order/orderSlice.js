import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "./Api";

// Thunk pour créer une commande en utilisant le token d'authentification
export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (orderData, thunkAPI) => {
    const { token } = thunkAPI.getState().auth.user; // Obtenez le token d'authentification depuis le state
    try {
      const response = await Api.createOrder(orderData, token); // Appelez votre fonction API pour créer la commande avec le token
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: {},
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetOrdersState: (state) => {
      state.orders = {};
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.orders = action.payload; // Assuming the API returns the created order
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Assuming the API returns an error message
      });
  },
});

export const { resetOrdersState } = ordersSlice.actions;
export default ordersSlice.reducer;

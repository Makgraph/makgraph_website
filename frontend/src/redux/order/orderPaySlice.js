import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "./Api";

// Thunk pour créer une commande en utilisant le token d'authentification
export const payOrder = createAsyncThunk(
  "orderPay/payOrder", // Action name adjusted
  async ({ orderId, paymentResult }, thunkAPI) => {
    // Arguments passed as an object
    const { token } = thunkAPI.getState().auth.user; // Obtenez le token d'authentification depuis le state
    try {
      const response = await Api.updateOrderDetail(
        orderId,
        paymentResult,
        token
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const ordersSlice = createSlice({
  name: "orderPay",
  initialState: {
    orderPay: {}, // Corrected field name from 'orders' to 'orderPay'
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetOrderPayState: (state) => {
      state.orderPay = {}; // Adjusted to match the initial state field name
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(payOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(payOrder.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.orderPay = action.payload; // Updated to match the state field name
      })
      .addCase(payOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Assuming the API returns an error message
      });
  },
});

export const { resetOrderPayState } = ordersSlice.actions;
export default ordersSlice.reducer;

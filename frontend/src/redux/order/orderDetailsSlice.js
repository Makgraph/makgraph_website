import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "./Api"; // Replace with your actual API function

export const fetchOrderDetails = createAsyncThunk(
  "orders/fetchOrderDetails",
  async (id, thunkAPI) => {
    const { token } = thunkAPI.getState().auth.user; // Obtenez le token d'authentification depuis le state
    try {
      const response = await Api.getOrderDetail(id, token); // Utilisez votre fonction API pour obtenir les détails de la commande avec le token
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: {
    orderDetails: {},
    loading: true,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchOrderDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true; // Assuming you might want to set success to true
        // Handle adding order details to state if needed
        state.orderDetails = action.payload;
      })
      .addCase(fetchOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Assuming the API returns an error message
      });
  },
});

export const {} = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;

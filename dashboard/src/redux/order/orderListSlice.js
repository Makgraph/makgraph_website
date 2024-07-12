import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "./Api";

// Thunk to fetch user orders using the authentication token
export const listUserOrders = createAsyncThunk(
  "orderList/listUserOrders", // Action name corrected
  async (_, thunkAPI) => {
    // Removed 'token' parameter since it's not used
    const { token } = thunkAPI.getState().auth.user; // Get authentication token from state
    try {
      const response = await Api.getUserOrders(token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const orderListSlice = createSlice({
  name: "orderList",
  initialState: {
    orderList: [],
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetOrderList: (state) => {
      state.orderList = []; // Reset orderList to empty array
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(listUserOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(listUserOrders.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.orderList = action.payload; // Update orderList with fetched data
      })
      .addCase(listUserOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set error message if fetch fails
      });
  },
});

export const { resetOrderList } = orderListSlice.actions; // Corrected action name
export default orderListSlice.reducer;

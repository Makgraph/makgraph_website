import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL;

// Async thunk action to fetch product details by ID from API
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/api/products/${productId}`);
      return response.data; // Assuming API response has product details
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Handle fetch error
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productDetails: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearProductDetails(state) {
      state.productDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearProductDetails } = productsSlice.actions;

export const selectProductDetails = (state) => state.products.productDetails;
export const selectLoading = (state) => state.products.loading;
export const selectError = (state) => state.products.error;

export default productsSlice.reducer;

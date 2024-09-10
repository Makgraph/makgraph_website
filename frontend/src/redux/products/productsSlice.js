import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL;

// Fetching products

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (
    { keyword = "", pageNumber = 1, sizes = [], colors = [] },
    thunkAPI
  ) => {
    try {
      const response = await axios.get(
        // `${baseUrl}/api/products?pageNumber=${pageNumber}`
        // `${baseUrl}/api/products?keyword=${encodeURIComponent(
        //   keyword
        // )}&pageNumber=${pageNumber}`
        `${baseUrl}/api/products?keyword=${encodeURIComponent(
          keyword
        )}&pageNumber=${pageNumber}&sizes=${sizes.join(
          ","
        )}&colors=${colors.join(",")}`
      );
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Clearing products
export const clearProducts = () => (dispatch) => {
  dispatch(productSlice.actions.clear());
};

const initialState = {
  products: [],
  loading: false,
  error: null,
  page: 1,
  pages: 1,
  sizes: [],
  colors: [],
};

export const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    clear: (state) => {
      state.products = [];
      state.loading = false;
      state.error = null;
      state.sizes = [];
      state.colors = [];
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.products = Array.isArray(action.payload.products)
          ? action.payload.products
          : [];
        state.page = action.payload.page || 1;
        state.pages = action.payload.pages || 1;
        state.sizes = action.payload.sizes || [];
        state.colors = action.payload.colors || [];

        // state.loading = false;
        // state.error = null;
        // state.products = action.payload.products;
        // state.page = action.payload.page;
        // state.pages = action.payload.pages;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.error.message;
        state.error = action.payload;
      });
  },
});

export const selectProductList = (state) => state.productList;
export const selectSizes = (state) => state.productList.sizes;
export const selectColors = (state) => state.productList.colors;

export default productSlice.reducer;

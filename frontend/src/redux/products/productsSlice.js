import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL;

// Fetching products

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async (_, thunkAPI) => {
//     try {
//       // const response = await axios.get("/api/products");
//       const response = await axios.get(
//         `/api/products?pageNumber=${pageNumber}`
//       );
//       return response.data;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (pageNumber, thunkAPI) => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/products?pageNumber=${pageNumber}`
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
  page: 1,
  pages: 1,
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    clear: (state) => {
      state.products = [];
      state.loading = false;
      state.error = null;
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
        // Add any fetched products to the array
        // state.products = state.products.concat(action.payload);
        // state.products = [...state.products, ...action.payload];
        state.error = null;
        state.products = action.payload.products;
        state.page = action.payload.page;
        state.pages = action.payload.pages;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.error.message;
        state.error = action.payload;
      });
  },
});

export const selectProductList = (state) => state.productList;

export default productSlice.reducer;

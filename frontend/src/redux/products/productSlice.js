import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk action to fetch product details by ID from API
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/products/${productId}`);
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

// // productSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Define the initial state
// const initialState = {
//   product: null,
//   loading: false,
//   error: null,
// };

// // Define the thunk for fetching product details
// export const fetchProductDetails = createAsyncThunk(
//   "product/fetchProductDetails",
//   async (id, thunkAPI) => {
//     try {
//       console.log("pr:", id);
//       const response = await axios.get(`/api/products/${id}`);
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

// // Create the product slice
// const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProductDetails.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchProductDetails.fulfilled, (state, action) => {
//         state.loading = false;
//         state.product = action.payload;
//         state.error = null;
//       })
//       .addCase(fetchProductDetails.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// // Export the action creators and reducer
// export const {} = productSlice.actions;
// export default productSlice.reducer;

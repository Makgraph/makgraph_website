// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Fetching singleProduct
// export const fetchSingleProduct = createAsyncThunk(
//   "product/fetchSingleProduct",
//   async (id, thunkAPI) => {
//     try {
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

// const initialState = {
//   product: { reviews: [] },
//   loading: false,
//   error: null,
// };

// export const productDetailsSlice = createSlice({
//   name: "productDetails",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder

//       .addCase(fetchSingleProduct.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchSingleProduct.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         // Add a fetched product to the array
//         // state.product = state.productDetails.concat(action.payload);
//         state.product = action.payload;
//       })
//       .addCase(fetchSingleProduct.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export default productDetailsSlice.reducer;

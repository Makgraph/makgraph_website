import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL;

// Async thunk for creating product review
export const createProductReview = createAsyncThunk(
  "productReview/create",
  async ({ productId, review }, thunkAPI) => {
    console.log(review);
    try {
      const { token } = thunkAPI.getState().auth.user;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${baseUrl}/api/products/${productId}/review`,
        review,
        config
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Slice
const productReviewSlice = createSlice({
  name: "productReview",
  initialState: {
    productReview: {
      review: {},
      loading: false,
      success: false,
      error: null,
    },
  },
  reducers: {
    resetProductReview: (state) => {
      state.productReview.loading = false;
      state.productReview.success = false;
      state.productReview.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProductReview.pending, (state) => {
        state.productReview.loading = true;
      })
      .addCase(createProductReview.fulfilled, (state, action) => {
        state.productReview.loading = false;
        state.productReview.success = true;
        state.productReview.review = action.payload;
      })
      .addCase(createProductReview.rejected, (state, action) => {
        state.productReview.loading = false;
        state.productReview.error = action.payload
          ? action.payload.message
          : "Erreur inconnue";
      });
  },
});

// Export actions
export const { resetProductReview } = productReviewSlice.actions;

// Export reducer
export default productReviewSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import Api from "../order/Api";

// // Create ProductReview
// export const createProductReview = createAsyncThunk(
//   "productReview/reviewProduct",
//   async ({ productId, review }, thunkAPI) => {
//     const { token } = thunkAPI.getState().auth.user;
//     try {
//       const response = await Api.productReviewCreated(
//         { productId, review },
//         token
//       );
//       console.log(review);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Reset productReview
// export const resetProductReview = () => (dispatch) => {
//   dispatch(productReviewSlice.actions.reset());
// };

// const initialState = {
//   productReview: {},
//   loading: false,
//   success: false,
//   error: null,
// };

// export const productReviewSlice = createSlice({
//   name: "productReview",
//   initialState,
//   reducers: {
//     reset: (state) => {
//       state.productReview = {};
//       state.loading = false;
//       state.error = null;
//       state.success = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createProductReview.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(createProductReview.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;
//         state.productReview = action.payload;
//       })
//       .addCase(createProductReview.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default productReviewSlice.reducer;

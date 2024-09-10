// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   username: "",
//   email: "",
//   loading: false,
//   error: null,
// };

// // Async thunk to fetch user details
// export const fetchUserDetails = createAsyncThunk(
//   "userDetails/fetchUserDetails",
//   async (userId, thunkAPI) => {
//     try {
//       const response = await axios.get(`/api/users/${userId}`);
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

// const userDetailsSlice = createSlice({
//   name: "userDetails",
//   initialState,
//   reducers: {
//     setUserDetails: (state, action) => {
//       return {
//         ...state,
//         ...action.payload,
//       };
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserDetails.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUserDetails.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         return {
//           ...state,
//           ...action.payload,
//         };
//       })
//       .addCase(fetchUserDetails.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.message; // or handle error as needed
//       });
//   },
// });

// export const { setUserDetails } = userDetailsSlice.actions;
// export default userDetailsSlice.reducer;

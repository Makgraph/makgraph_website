// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// // import api from "../auth/api";
// import axios from "axios";
// // export const getOrderDetails = createAsyncThunk(
// //   "orders/getOrderDetails",
// //   async (id, thunkAPI) => {
// //     const { token } = thunkAPI.getState().auth; // Obtenez le token d'authentification depuis le state
// //     try {
// //       const response = await api.getOrderDetail(id, token); // Utilisez votre fonction API pour obtenir les détails de la commande avec le token
// //       console.log(response);
// //       return response.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// export const getOrderDetails = createAsyncThunk(
//   "orders/getOrderDetails",
//   async (id, thunkAPI) => {
//     const { token } = thunkAPI.getState().auth; // Obtenez le token d'authentification depuis le state
//     console.log(token);
//     try {
//       const response = await axios.get(`/api/orders/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error(
//         error.response.data.error ||
//           "Échec de la récupération des détails de la commande"
//       );
//     }
//   }
// );

// export const resetOrderDetail = createAsyncThunk(
//   "orderDetails/resetOrderDetail",
//   async (_, thunkAPI) => {
//     return { orderDetails: {}, loading: true, success: false, error: null };
//   }
// );
// export const orderDetailsReducer = (
//   state = { loading: true, orderItems: [], shippingAddress: {} },
//   action
// ) => {
//   switch (action.type) {
//     case ORDER_DETAILS_REQUEST:
//       return { ...state, loading: true };
//     case ORDER_DETAILS_SUCCESS:
//       return { loading: false, order: action.payload };
//     case ORDER_DETAILS_FAIL:
//       return { loading: false, order: action.payload };
//     default:
//       return state;
//   }
// };

// export const getOrderDetails = (id) => async (dispatch, getState) => {
// try {
//   dispatch({type: ORDER_DETAILS_REQUEST})

//   const {
//     user:{user},
//   } = getState()
// }

// const config = {
//   headers: {
//     Authorization: `Bearer ${user.token}`,
//   },
// };

// const {data} = await axios.get(`/api/orders/${id}`, config);
// dispatch({type: ORDER_DETAILS_SUCCESS, payload:data});

// } catch (error) {
//   const message =
//   error.response && error.response.data.message
//   ? error.response.data.message
//   : error.message;
//   if(message === "Not authorized, token failed"){
//     dispatch(logout());
//   }
//   dispatch({
//     type:ORDER_DETAILS_FAIL,
//     payload :message,
//   });
// }
// };

// const orderSingleDetailsSlice = createSlice({
//   name: "orderDetails",
//   initialState: {
//     orderDetails: {},
//     loading: false,
//     success: false,
//     error: null,
//   },
//   reducers: {
//     // resetOrderDetail: (state) => {
//     //   state.orderDetails = {}; // Reset orderList to empty array
//     //   state.loading = false;
//     //   state.success = false;
//     //   state.error = null;
//     // },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getOrderDetails.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getOrderDetails.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;
//         state.orderDetails = action.payload;
//       })
//       .addCase(getOrderDetails.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload; // Assuming the API returns an error message
//       })
//       .addCase(resetOrderDetail.fulfilled, (state, action) => {
//         state.orderDetails = action.payload.orderDetails;
//         state.loading = action.payload.loading;
//         state.success = action.payload.success;
//         state.error = action.payload.error;
//       });
//   },
// });

// export const {} = orderSingleDetailsSlice.actions;
// export default orderSingleDetailsSlice.reducer;

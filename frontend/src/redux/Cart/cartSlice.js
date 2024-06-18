import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      // Check if item is already in cart
      const existingItem = state.cartItems.find(
        (item) => item.product._id === product._id
      );

      if (existingItem) {
        // If item already exists, update quantity
        existingItem.quantity += quantity;
      } else {
        // If item doesn't exist in cart, add it
        state.cartItems.push({ product, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.product._id !== productId
      );
    },

    updateCartQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const cartItem = state.cartItems.find(
        (item) => item.product._id === productId
      );

      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity, clearCart } =
  cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalItems = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

export default cartSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   items: [],
//   totalQuantity: 0,
//   totalPrice: 0,
// };

// export const fetchProductById = createAsyncThunk(
//   "cart/fetchProductById",
//   async (id, thunkAPI) => {
//     try {
//       console.log("Fetching product with ID:", id);
//       const response = await axios.get(`/api/products/${id}`);
//       console.log("API Response:", response.data);
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

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     removeItemFromCart(state, action) {
//       const id = action.payload;
//       const existingItem = state.items.find((item) => item._id === id);

//       if (existingItem) {
//         state.totalQuantity -= existingItem.quantity;
//         state.totalPrice -= existingItem.quantity * existingItem.price;
//         state.items = state.items.filter((item) => item._id !== id);
//       }
//     },
//     updateItemQuantity(state, action) {
//       const { id, quantity } = action.payload;
//       const existingItem = state.items.find((item) => item._id === id);

//       if (existingItem) {
//         state.totalQuantity += quantity - existingItem.quantity;
//         state.totalPrice +=
//           (quantity - existingItem.quantity) * existingItem.price;
//         existingItem.quantity = quantity;
//       }
//     },

//     clearCart(state) {
//       state.items = [];
//       state.totalQuantity = 0;
//       state.totalPrice = 0;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchProductById.fulfilled, (state, action) => {
//       const newItem = action.payload;
//       const existingItem = state.items.find((item) => item._id === newItem._id);

//       state.totalQuantity++;
//       state.totalPrice += newItem.price;

//       if (!existingItem) {
//         state.items.push({
//           _id: newItem._id,
//           name: newItem.name,
//           image: newItem.image,
//           price: newItem.price,
//           countInStock: newItem.countInStock,
//           quantity: newItem.quantity,
//         });

//       } else {
//         existingItem.quantity++;
//       }
//       console.log("State after addition:", state);
//     });
//   },
// });

// export const { removeItemFromCart, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;

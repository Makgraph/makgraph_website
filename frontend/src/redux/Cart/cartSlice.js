import { createSlice } from "@reduxjs/toolkit";

// Function to load cart and shipping address from localStorage
const loadCart = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) {
      return { cartItems: [], shippingAddress: {}, paymentMethod: null };
    }
    const cartState = JSON.parse(serializedCart);
    // Ensure shippingAddress is initialized if missing in localStorage
    if (!cartState.hasOwnProperty("shippingAddress")) {
      cartState.shippingAddress = {};
    }
    if (!cartState.hasOwnProperty("paymentMethod")) {
      cartState.paymentMethod = null;
    }
    return cartState;
  } catch (err) {
    console.error("Error loading cart from localStorage:", err);
    return { cartItems: [], shippingAddress: {}, paymentMethod: null };
  }
};

// Function to save cart and shipping address to localStorage
const saveCart = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem("cart", serializedCart);
  } catch (err) {
    console.error("Error saving cart to localStorage:", err);
  }
};
const initialState = loadCart();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      // Check if item is already in cart
      const existingItem = state.cartItems.find(
        (item) => item.product._id === product._id
        // (item) => item.product.id === product.id
      );

      if (existingItem) {
        // If item already exists, update quantity
        existingItem.quantity += quantity;
      } else {
        // If item doesn't exist in cart, add it
        state.cartItems.push({ product, quantity });
      }

      // Save cart state to local storage after any modification
      saveCart(state);
    },

    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.product._id !== productId
      );
      saveCart(state); // Ensure cart is saved after removing item
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
      saveCart(state); // Save empty cart to localStorage when clearing
    },

    // UPDATE SHIPPING ADDRESS
    updateShippingAddress: (state, action) => {
      const { address, city, postalCode, country } = action.payload;
      state.shippingAddress = { address, city, postalCode, country };
      saveCart(state);
    },

    // UPDATE PAYMENTT METHOD
    updatePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload; // Update payment method in state
      saveCart(state); // Save state to localStorage
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartQuantity,
  clearCart,
  updateShippingAddress,
  updatePaymentMethod,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalItems = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

export default cartSlice.reducer;

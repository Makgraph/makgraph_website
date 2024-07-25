import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.delete(`/api/products/${id}`, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const deleteProductSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetDeleteSuccess(state) {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Erreur lors de la suppression du produit";
      });
  },
});

export const { resetDeleteSuccess } = deleteProductSlice.actions;

export default deleteProductSlice.reducer;

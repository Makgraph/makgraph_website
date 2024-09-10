import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_API_URL;

// Action asynchrone pour supprimer une catégorie
export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (categoryId, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.delete(
        `${baseUrl}/api/items/${categoryId}`,
        config
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const deleteCategorieSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
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
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.categories = state.categories.filter(
          (category) => category._id !== action.payload._id
        );
        toast.success("Catégorie supprimée avec succès");
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Erreur lors de la suppression de la catégorie";
      });
  },
});

export const { resetDeleteSuccess } = deleteCategorieSlice.actions;

export default deleteCategorieSlice.reducer;

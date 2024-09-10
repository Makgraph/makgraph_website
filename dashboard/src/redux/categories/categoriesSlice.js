import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_API_URL;

// Action asynchrone pour créer une catégorie
export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (categoryData, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${baseUrl}/api/items/create`,
        categoryData,
        config
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Action asynchrone pour éditer une catégorie existante
export const editCategory = createAsyncThunk(
  "categories/editCategory",
  async ({ categoryId, updatedCategoryData }, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.put(
        `${baseUrl}/api/items/${categoryId}`,
        updatedCategoryData,
        config
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Action asynchrone pour récupérer toutes les catégories
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async ({ keyword = "", pageNumber = 1, category = "" }, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        `${baseUrl}/api/items/all?keyword=${encodeURIComponent(
          keyword
        )}&pageNumber=${pageNumber}&category=${encodeURIComponent(category)}`,
        config
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
    page: 1,
    pages: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
        toast.success("Catégorie ajoutée avec succès");
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Erreur lors de la création de la catégorie";
      })
      .addCase(editCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.map((category) =>
          category._id === action.payload._id ? action.payload : category
        );
        toast.success("Catégorie modifiée avec succès");
      })
      .addCase(editCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Erreur lors de l'édition de la catégorie";
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = Array.isArray(action.payload.items)
          ? action.payload.items
          : [];
        state.page = action.payload.page || 1;
        state.pages = action.payload.pages || 1;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Erreur lors de la récupération des catégories";
      });
  },
});

export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;

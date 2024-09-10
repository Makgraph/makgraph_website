import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_API_URL;

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
        `${baseUrl}/api/items/?keyword=${encodeURIComponent(
          keyword
        )}&pageNumber=${pageNumber}&category=${encodeURIComponent(category)}`,
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const clearCategories = () => (dispatch) => {
  dispatch(categoriesSlice.actions.clear());
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
    page: 1,
    pages: 1,
  },
  reducers: {
    clear: (state) => {
      state.categories = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
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
        console.log(action.payload.items);
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Erreur lors de la récupération des catégories";
      });
  },
});

export const { clear } = categoriesSlice.actions;

export default categoriesSlice.reducer;

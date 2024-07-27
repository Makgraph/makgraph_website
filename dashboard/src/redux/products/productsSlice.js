import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (productData, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "/api/products/create",
        productData,
        config
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Action asynchrone pour éditer un produit existant
export const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ productId, updatedProductData }, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.put(
        `/api/products/${productId}`,
        updatedProductData,
        config
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Action asynchrone pour récupérer les produits
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ keyword = "", pageNumber = "" }, thunkAPI) => {
    // Déstructuration de l'objet avec pageNumber par défaut
    const { token } = thunkAPI.getState().auth; // Récupérer le token d'authentification depuis le state Redux
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Ajouter le token d'authentification dans l'en-tête
      },
    };

    try {
      const response = await axios.get(
        `/api/products/all?keyword=${keyword}&pageNumber=${pageNumber}`,
        config
      ); // Utiliser axios avec l'en-tête d'authentification
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// export const deleteProduct = createAsyncThunk(
//   "products/deleteProduct",
//   async (productId, thunkAPI) => {
//     try {
//       const { token } = thunkAPI.getState().auth;
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const response = await axios.delete(`/api/products/${productId}`, config);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    // reducers synchrones si nécessaire
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products || []; // Assure-toi que products est un tableau
        state.page = action.payload.page || 1;
        state.pages = action.payload.pages || 1;
        toast.success("Produit ajouté avec succès");
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Erreur lors de la création du produit";
      })
      .addCase(editProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        );
        toast.success("Produit édité avec succès");
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Erreur lors de l'édition du produit";
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.products = []; // Réinitialise les produits à un tableau vide
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = Array.isArray(action.payload.products)
          ? action.payload.products
          : []; // Assure-toi que products est un tableau
        state.page = action.payload.page || 1;
        state.pages = action.payload.pages || 1;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Erreur lors de la récupération des produits";
      });
  },
});

export const {
  // Ajoutez des actions synchrones si nécessaire
} = productsSlice.actions;

export default productsSlice.reducer;

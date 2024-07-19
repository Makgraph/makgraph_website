import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService.js";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth; // Récupérer le token d'utilisateur depuis le state Redux
    try {
      const response = await authService.fetchUsersApi(token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); // Rejeter avec la valeur de l'erreur
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    //  reducers synchrones
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      });
  },
});

export const {
  /* actions synchrones si nécessaire */
} = usersSlice.actions;
export default usersSlice.reducer;

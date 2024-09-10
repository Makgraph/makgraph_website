import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService.js";
import { resetOrdersState } from "../orders/ordersSlice.js";
// import { resetOrderDetail } from "../order/orderDetailsSlice";

// Action asynchrone pour vérifier l'authentification
export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  const isLoggedIn = await authService.isLoggedIn(); // Appelle de la méthode d'authentification
  return isLoggedIn;
});

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  token: localStorage.getItem("token") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  userDetails: null,
  userUpdatedProfile: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isLoggedIn: false,
  message: "",
};

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, thunkAPI) => {
    try {
      const newToken = await authService.refreshToken();
      return newToken;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const userData = await authService.login(user);
    thunkAPI.dispatch(setToken(userData.token)); // Dispatch de l'action setToken avec le token reçu
    localStorage.setItem("refreshToken", userData.refreshToken); // Stockage du refresh token
    return userData;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
//   try {
//     const userData = await authService.login(user);
//     thunkAPI.dispatch(setToken(userData.token)); // Dispatch de l'action setToken avec le token reçu
//     return userData;
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     return thunkAPI.rejectWithValue(message);
//   }
// });

// Logout user
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  authService.logout();
  thunkAPI.dispatch(resetOrdersState()); // Réinitialise les orders
  // thunkAPI.dispatch(resetOrderDetail()); // Réinitialise les orderDetails
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },

    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    setToken(state, action) {
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.token = action.payload;
        localStorage.setItem("token", action.payload);
      })
      .addCase(refreshToken.rejected, (state) => {
        state.token = null;
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isSuccess = true;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken; // Assurez-vous que cela est défini correctement
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("refreshToken", action.payload.refreshToken); // Stockage du refresh token
        state.user = action.payload;
      })
      // .addCase(login.fulfilled, (state, action) => {
      //   state.isLoggedIn = true;
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.token = action.payload.token;
      //   state.user = action.payload;
      // })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = null;
        state.token = null;
        state.userDetails = null;
        state.userUpdatedProfile = null;
      })

      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload;
      });
  },
});

export const {
  setLoggedIn,
  reset,
  setToken,
  updateUserProfileSuccess,
  updateUserProfileFailure,
} = authSlice.actions;
export const selectUserDetails = (state) => state.auth.userDetails;
export const selectUserUpdatedProfile = (state) =>
  state.auth.userUpdatedProfile;
export const isLoggedIn = (state) => state.auth.isLoggedIn;
export const selectLoading = (state) => state.auth.isLoading;
export const selectError = (state) => state.auth.isError;
export default authSlice.reducer;

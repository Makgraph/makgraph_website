import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService.js";
import { api } from "./api.js";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  userDetails: null,
  userUpdatedProfile: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  authService.logout();
});

export const fetchUserDetails = createAsyncThunk(
  "auth/fetchUserDetails",
  async (_, thunkAPI) => {
    const authState = thunkAPI.getState().auth;
    if (!authState.user) {
      throw new Error("User not authenticated"); // Handle case where user is not authenticated
    }

    const { _id, token } = authState.user;

    try {
      const userDetails = await api.getUserDetails(_id, token);
      return userDetails;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message); // Return error data or message
    }
  }
);

// Async Thunk to update user profile
export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async (updatedProfileData, thunkAPI) => {
    const authState = thunkAPI.getState().auth;
    if (!authState.user) {
      throw new Error("User not authenticated"); // Handle case where user is not authenticated
    }

    const { _id, token } = authState.user;
    console.log(`Updating profile for user with ID: ${_id}`);

    try {
      const updatedUser = await api.updateUserProfile(
        _id,
        updatedProfileData,
        token
      );
      return updatedUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message); // Return error data or message
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.userDetails = null;
      })
      .addCase(fetchUserDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userDetails = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userUpdatedProfile = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { reset, updateUserProfileSuccess, updateUserProfileFailure } =
  authSlice.actions;
export const selectUserDetails = (state) => state.auth.userDetails;
export const selectUserUpdatedProfile = (state) =>
  state.auth.userUpdatedProfile;
export const selectLoading = (state) => state.auth.isLoading;
export const selectError = (state) => state.auth.isError;
export default authSlice.reducer;

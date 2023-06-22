import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import authService from "./authService";

// Get user from localStorage
// Data from localStorage is stored in JSON string type
// We need to convert it to JavaScript Object
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register user
// For createAsyncThunk(), the first argument is the action
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      // We ask the register() function from authService.js to get the user data
      // This should then be returned in the "action.payload" in the "extraReducers"
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      // This should then be returned in the "action.payload" in the "extraReducers"
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.message = "";
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
    },
  },
  // We update the state in this "extraReducers" with the "builder" and addCase()
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
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

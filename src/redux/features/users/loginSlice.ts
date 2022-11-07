import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { login, register } from "./thunks";
// Define a type for the slice state
interface LoginSlice {
  userData: any;
  error: string | undefined;
  staylogged: boolean;
}

// Define the initial state using that type
const initialState: LoginSlice = {
  userData: null,
  error: undefined,
  staylogged: false,
};

export const loginSlice = createSlice({
  name: "login",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCachedUser: (state, action: PayloadAction<{ cachedUser?: any }>) => {
      state.userData = JSON.parse(action.payload.cachedUser);
    },
    logOut: (state) => {
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload["error"]) state.error = action.payload["error"];
        else {
          state.error = undefined;
          state.userData = action.payload;

          if (action.meta.arg.staylogged) {
            state.staylogged = action.meta.arg.staylogged;
          }
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.userData = null;
        state.error = action.error.message;
      });
  },
});

export const { logOut, setCachedUser } = loginSlice.actions;

export default loginSlice.reducer;

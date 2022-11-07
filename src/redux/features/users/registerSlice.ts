import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { login, register } from "./thunks";
// Define a type for the slice state
interface RegisterSlice {
  registerError: string | undefined;
  registerMessage: string | undefined;
  pending: boolean;
}

// Define the initial state using that type
const initialState: RegisterSlice = {
  registerError: undefined,
  registerMessage: undefined,
  pending: false,
};

export const registerSlice = createSlice({
  name: "register",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        if (action.payload["details"]) {
          state.registerError = action.payload["details"];

          state.pending = false;
        }
        if (action.payload["message"]) {
          state.registerMessage =
            action.payload["message"] + "for confirmation";
          state.registerError = undefined;
          state.pending = false;
        }
      })
      .addCase(login.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.pending = false;

        state.registerError = action.error.message;
      });
  },
});

export default registerSlice.reducer;

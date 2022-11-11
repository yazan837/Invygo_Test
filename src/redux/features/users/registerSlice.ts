import { createSlice } from "@reduxjs/toolkit";

import { register } from "./thunks";
// Define a type for the slice state
interface RegisterSlice {
  registerError: string | undefined;
  registerMessage: string | undefined;
}

// Define the initial state using that type
const initialState: RegisterSlice = {
  registerError: undefined,
  registerMessage: undefined,
};

export const registerSlice = createSlice({
  name: "register",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.registerMessage = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.registerError = action.error.message;
      });
  },
});

export default registerSlice.reducer;

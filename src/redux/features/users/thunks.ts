import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostDataQuery } from "../customFetch";

export const register = createAsyncThunk("register", async () => {
  const response = await PostDataQuery();
  return response;
});

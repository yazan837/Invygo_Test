import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataQuery } from "../customFetch";
export const login = createAsyncThunk(
  "users/login",
  async ({
    email,
    password,
    staylogged,
  }: {
    email: string;
    password: string;
    staylogged: boolean;
  }) => {
    const response = await fetchDataQuery("api/auth/login", {
      email,
      password,
    });

    return response;
  }
);
export const register = createAsyncThunk(
  "users/register",
  async ({
    first_name,
    last_name,
    email,
    mobile,
    gender,
    postal_code,
    password,
    password_confirmation,
    address,
    type,
    company_name,
    Legal_form,
    work_type,
  }: any) => {
    const response = await fetchDataQuery("api/auth/register", {
      first_name,
      last_name,
      email,
      mobile,
      gender,
      postal_code,
      password,
      password_confirmation,
      address,
      type,
      company_name,
      Legal_form,
      work_type,
    });

    return response;
  }
);

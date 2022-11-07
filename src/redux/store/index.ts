import { configureStore, combineReducers } from "@reduxjs/toolkit";

import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import loginSlice from "../features/users/loginSlice";
import registerSlice from "../features/users/registerSlice";
export const store = configureStore({
  reducer: {
    users: combineReducers({ loginSlice, registerSlice }),
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

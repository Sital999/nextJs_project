import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./slices/quizSlice";

import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";


// create store and include all slices

export const store=configureStore({
    reducer:{
        quiz:quizSlice,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: { users: UsersState}
type AppDispatch = typeof store.dispatch;

// Since we use typescript, lets utilize `useDispatch`
export const useDispatch = () => useDispatchBase<AppDispatch>();

// And utilize `useSelector`
export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);
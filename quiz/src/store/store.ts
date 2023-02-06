import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./slices/quizSlice";
import { quizApi } from "./slices/quizApiSlice";
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";


// create store and include all slices

export const store=configureStore({
    reducer:{
        quiz:quizSlice,
        [quizApi.reducerPath]:quizApi.reducer
    },
      middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quizApi.middleware),
})

setupListeners(store.dispatch);

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
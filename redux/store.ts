import { configureStore } from "@reduxjs/toolkit";
import { accountSlice } from "./account-slice";

export const store = configureStore({
  reducer: {
    account : accountSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
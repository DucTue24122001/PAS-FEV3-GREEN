import { configureStore } from "@reduxjs/toolkit";
import { accountSlice } from "./account-slice";
import { clientSlice } from "./client-slice";

export const store = configureStore({
  reducer: {
    client:clientSlice.reducer,
    account : accountSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
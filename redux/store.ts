import { configureStore } from "@reduxjs/toolkit";
import { accountSlice } from "./account-slice";
import { clientSlice } from "./client-slice";
import { transactionReportSlice } from "./transaction-report-slice";

export const store = configureStore({
  reducer: {
    client:clientSlice.reducer,
    account : accountSlice.reducer,
    report: transactionReportSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
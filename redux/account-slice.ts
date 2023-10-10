import { createSlice } from "@reduxjs/toolkit";
import { AccountDetail } from "../util/type";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    accountDetail: <AccountDetail> {
      balance: 0,
      email: "",
      name: "",
      phoneNumber:"",
      referralCode:"",
      surName:"",
      userId:0,
      userName:"",
    },
    checkToken:null,
  },
  reducers: {
    setAccountDetail(state, action) {
      state.accountDetail = action.payload
    },
    setCheckToken(state, action){
      state.checkToken = action.payload
    }
  }
})

export const accountAction = accountSlice.actions
import { createSlice } from "@reduxjs/toolkit";
import { AccountDetail, Bank, MailType } from "../util/type";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    token: "",
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
    userListBanking: <Bank[]>[],
    checkToken:null,
    categoryData:[]
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    },
    setAccountDetail(state, action) {
      state.accountDetail = action.payload
    },
    setUserListBanking(state, action) {
      state.userListBanking = action.payload
    },
    addUserListBanking(state, action) {
      state.userListBanking = [...state.userListBanking, action.payload]
    },
    setCheckToken(state, action){
      state.checkToken = action.payload
    },
    setCategoryData(state, action){
      state.categoryData = action.payload
    }
  }
})

export const accountAction = accountSlice.actions
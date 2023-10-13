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
    categoryData:[],
    
    //record
    recordList: [],
    isFetchingRecord: false,

    //inbox
    isFetchingMail: false,
    isShowMailModal: false,
    inboxMails: <MailType[]>[],
    currentMailRead: <MailType>{},
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
    },
    //record
    fetchingRecordHandler(state, action) {
      state.isFetchingRecord = action.payload
    },
    setRecordList(state, action) {
      state.recordList = action.payload
    },

    //inbox
    fetchingMailStatus(state, action) {
      state.isFetchingMail = action.payload;
    },
    setShowMailModal(state, action) {
      state.isShowMailModal = action.payload
    },
    setInboxMail(state, action) {
      const allMail = action.payload;
      if (allMail) {
        const sortingMail = allMail.sort((a: any, b: any) => {
          return Number(new Date(b.creationTime)) - Number(new Date(a.creationTime))
        })
        state.inboxMails = sortingMail
      }
    },
    setCurrentMailRead(state, action) {
      const currentMail = action.payload;

      if (currentMail) {
        state.inboxMails = state.inboxMails.map((mail: any) => {
          if (mail.id === currentMail.id) {
            return { ...mail, status: true };
          }
          return mail;
        });
      }
      state.currentMailRead = currentMail;
    },
  }
})

export const accountAction = accountSlice.actions
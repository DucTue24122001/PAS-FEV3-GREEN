import { createSlice } from "@reduxjs/toolkit";
import { AccountDetail, Bank, CrpytoBank, MailType } from "../util/type";

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
    accountBalance: 0,
    userListBanking: <Bank[]>[],
    //net-banking
    depositAgentNetBankingList: <Bank[]>[],
    depositAgentNetBankingFilter: <Bank[]>[],
    userDepositBankingList: <Bank[]>[],
    currentAgentBankSelect: <Bank>{},
    bankTypeList: <Bank[]>[],
    currentBankTypeSelect: <Bank>{},
    
    //crypto-bank
    agentCryptoBankList: <CrpytoBank[]>[],
    currentAgentCryptoSelect: <CrpytoBank>{},

    //category
    categoryData:[],
    isFetchingCategory: false,
    
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
    setAccountDetail(state, action) {
      state.accountDetail = action.payload
    },
    setUserListBanking(state, action) {
      state.userListBanking = action.payload
    },
    addUserListBanking(state, action) {
      state.userListBanking = [...state.userListBanking, action.payload]
    },
    setCategoryData(state, action){
      state.categoryData = action.payload
    },
    setIsFetchingCategory(state, action) {
      state.isFetchingCategory = action.payload
    },
    setAccountBalance(state, action) {
      state.accountBalance = action.payload;
    },
    //net-banking
    setAllBankTypeList(state, action) {
      const allAgentBank = <Bank[]>action.payload
      state.depositAgentNetBankingList = allAgentBank
      state.currentAgentBankSelect = allAgentBank[0]
      const filterTypeBank = allAgentBank.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.bankName === value.bankName
      )))
      if (filterTypeBank.length > 0) {
        state.bankTypeList = filterTypeBank
        state.currentBankTypeSelect = filterTypeBank[0]
        state.depositAgentNetBankingFilter = allAgentBank.filter(bank => bank.bankName === filterTypeBank[0].bankName)
      }
    },
    setUserDepositBankingList(state, action) {
      state.userDepositBankingList = action.payload
    },
    setCurrentBankTypeSelect(state, action) {
      state.currentBankTypeSelect = action.payload
      state.depositAgentNetBankingFilter = state.depositAgentNetBankingList.filter(bank => bank.bankName === action.payload.bankName)
      state.currentAgentBankSelect = state.depositAgentNetBankingFilter[0]
    },
    setCurrentAgentBankSelect(state, action) {
      state.currentAgentBankSelect = action.payload;
    },

    //crypto-bank
    setAgentCryptoBankList(state, action) {
      state.agentCryptoBankList = action.payload
    },
    setCurrentAgentCryptoSelect(state, action) {
      state.currentAgentCryptoSelect = action.payload
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
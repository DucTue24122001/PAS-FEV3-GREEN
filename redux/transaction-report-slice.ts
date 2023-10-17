import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export enum ReportShowEnum {
  PLATFORM = "platform",
  GAME = "game"
}

export const transactionReportSlice = createSlice({
  name: "report",
  initialState: {
    isFetching: false,

    startDateReport: `${moment().startOf("week").format("YYYY-MM-DD 00:00:00")}`,
    endDateReport: `${moment().format("YYYY-MM-DD 23:59:59")}`,

    currentPage: 1,
    totalCount: 0,
    pageSize: 0,

    toggleShowPlatformAndGame: ReportShowEnum.PLATFORM,

    grandTotalInfo: <any>{},
    totalTransitionInfo: [],
    totalGameReportInfo: [],
    totalGameProfitLoss: "",
    currentPlatformName: "",

    isShowDetailModal: false,
    currentGameReport: {},
  },
  reducers: {
    handleFetchingData(state, action) {
      state.isFetching = action.payload
    },
    setSearchingDateReport(state, action) {
      const dateValue = action.payload;
      state.startDateReport = moment(dateValue.startDate).format("YYYY-MM-DD 00:00:00");
      state.endDateReport = moment(dateValue.endDate).format("YYYY-MM-DD 23:59:59");
    },

    setTotalTransitionInfo(state, action) {
      state.totalTransitionInfo = action.payload
    },
    setTotalGameReportInfo(state, action) {
      state.totalGameReportInfo = action.payload
    },
    setTotalGameProfitLoss(state, action) {
      state.totalGameProfitLoss = action.payload
    },
    setCurrentPlatformName(state, action) {
      state.currentPlatformName = action.payload
    },
    setGrandTotalInfo(state, action) {
      state.grandTotalInfo = {
        ...action.payload
      }
    },

    handleToggleShowPlatformAndGame(state, action) {
      state.toggleShowPlatformAndGame = action.payload
    },

    handleShowDetailModal(state, action) {
      state.isShowDetailModal = action.payload
    },

    setCurrentGameReport(state, action) {
      state.currentGameReport = action.payload
    },
    
    //Paging
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setTotalCount(state, action) {
      state.totalCount = action.payload
    },
    setPagesize(state, action) {
      state.pageSize = action.payload
    },
  }
})

export const transactionReportAction = transactionReportSlice.actions
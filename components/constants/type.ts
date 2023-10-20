import { PromoEnum } from "./enum"

export type Respond = {
  error: {
    message: string
  },
  result: any,
  success: boolean,
  targetUrl: any,
  unAuthorizedRequest: boolean,
}

export type AccountDetail = {
  balance: number,
  email: string,
  name: string,
  phoneNumber: string,
  referralCode: string,
  surName: string,
  userId: number,
  userName: string,
}

export type Bank = {
  accountName: string,
  accountNumber: string,
  bankName: string,
  bankShortName: string,
  displayName: string,
  id: number,
  maximumDeposit: number,
  minimumDeposit: number,
  maximumWithdraw: number,
  minimumWithdraw: number,
}

export type AddBankType = {
  currency: string,
  id: number,
  logo: string,
  name: string,
  shortName: string
}

export type RecordType = {
  amountChange: number,
  clientIp: string,
  creationTime: string,
  creationTimeId: number,
  currency: string,
  endAmount: number,
  startAmount: number,
  id: number,
  type: string,
  transCode: string,
  status: string,
  userName: string,
}

export type PaginationType = {
  totalCount: number,
  pageSize: number,
  siblingCount?: number,
  currentPage: number,
}

export type InboxType = {
  body: string,
  creationTime: string,
  id: number,
  receiverId: number,
  receiverName: string,
  senderId: number,
  senderName: string,
  status: boolean,
  subject: string,
}

export type PromotionType = {
  content: string,
  id: string,
  name: string,
  promotionType: PromoEnum,
  urlImage: string,
  type: string,
  amountBuy: number,
  isBuyPromotion: boolean,
  statusPromotion: string,
  detailPromotion: PromotionDetail[],
}

export type PromotionDetail = {
  key: string,
  text: string,
  value: string,
}

export type AnnounceType = {
  body: string,
  color: string,
  endTime: string,
  endTimeStr: string,
  id: number,
  isActive: boolean,
  startTime: string,
  startTimeStr: string,
  title: string,
  type: string,
}

export type SliderType = {
  id: number,
  imageUrl: string,
  imageUrlMobile: string,
  lang: string,
  title: string,
  category: string,
}

export type ContentSettingType = {
  category: string,
  content: string,
  creationTime: string,
  creatorUserId: number,
  id: number,
  imageUrl: string,
  name: string,
  link: string,
}
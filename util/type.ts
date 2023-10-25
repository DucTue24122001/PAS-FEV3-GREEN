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
  balance: number
  email: string
  name: string
  phoneNumber:string
  referralCode:string
  surName:string
  userId:number
  userName:string
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

export type Bank = {
  accountName: string,
  accountNumber: string,
  bankName: string,
  bankShortName: string,
  displayName: string,
  id: number,
  logo: string,
  imageUrl: string,
  maximumDeposit: number,
  minimumDeposit: number,
  maximumWithdraw: number,
  minimumWithdraw: number,
}

export type MailType = {
  body: string,
  creationTime: string,
  id: number,
  receiverName: string,
  senderName: string,
  subject: string,
  status: boolean,
}

export type AnnouncementType = {
  body: string,
  endTime: string,
  startTime: string,
  id: number,
  title: string,
  type: string,
}

export type CrpytoBank = {
  cryptoName: string,
  cryptoNumber: string,
  cryptoShortName: string,
  displayName: string,
  id: number,
  imageUrl: string,
  logo: string,
  maximumDeposit: number,
  minimumDeposit: number,
  rate: number,
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

export type OldAccountInfoType = {
  name: string,
  surname: string,
  userName: string,
  phoneNumber: string,
  password: string,
  emailAddress: string
}
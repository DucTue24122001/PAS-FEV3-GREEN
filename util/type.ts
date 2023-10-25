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

export type Bank = {
  accountName: string,
  accountNumber: string,
  bankName: string,
  bankShortName: string,
  displayName: string,
  id: number,
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
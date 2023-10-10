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
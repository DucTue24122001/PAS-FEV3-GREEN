export enum PageEnum {
  PROMOTION = "promo",
  CONTACT = "contact",
  PROFILE = "profile",
  LOGIN = "login",
  REGISTER = "register",
}

export enum RecordStatusEnum {
  ACCEPT = "ACCEPTED",
  PENDING = "PENDING",
  REJECT = "REJECTED",
  DEPOSIT = "DEPOSIT",
  WITHDRAW = "WITHDRAW",
  PROMOTION = "PROMOTION",
}

export enum DepositType {
  NetBanking = "NET_BANKING",
  Crypto = "CRYPTO",
}

export enum PoliciesEnum {
  Terms = "terms",
  DisconnectPolicies = "disconnect",
  PrivacyPolicies = "privacy",
}

export enum ContentSettingEnum {
  CONTACT = 'CONTACT',
  PAYMENT = 'PAYMENT',
  SOCIAL = 'SOCIAL',
}

export enum TypeDeposit {
  BANK = "banking",
  CRYPTO = "crypto",
}

export enum PromotionDetailEnum {
  BONUS = "bonus",
  TURNOVER = "turnover",
  MINDEPO = "mindeposit",
  MAXBONUS = "maxbonus",
}

export enum RegistFormEnum {
  Username = "userName",
  Password = "password",
  Name = "name",
  Email = "emailAddress",
  Phone = "phoneNumber",
  TenancyName = "dhdemo",
  ReferralCode = "ReferralCode",
}

export enum PromoEnum {
  ALL = "All",
  WELCOME = "WELCOME_BONUS",
  DEPOSIT = "DEPOSIT",
  REWARD = "REWARD",
  REBATE = "REBATE",
}

export enum StatusPromotion {
  NOTACTIVE = "",
  COMPLETED = "COMPLETED",
  ACCEPTED = "ACCEPTED",
  PENDING = "PENDING",
}
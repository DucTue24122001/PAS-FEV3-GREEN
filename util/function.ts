import { PageEnum } from "./enum"

export const checkDisableLayoutPage = (currentRouter: string) => {
  return currentRouter.includes(PageEnum.LOGIN)
}

export const convertDecimalNum = (num: number) => {
  if (typeof num === "number") {
    return Number(num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  } else {
    return 0
  }
};
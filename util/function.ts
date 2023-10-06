import { PageEnum } from "./enum"

export const checkDisableLayoutPage = (currentRouter: string) => {
  return currentRouter.includes(PageEnum.LOGIN)
}
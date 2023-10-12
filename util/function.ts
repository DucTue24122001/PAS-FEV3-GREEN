import { PageEnum, RecordStatusEnum } from "./enum"

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

export const checkIsTimeoutToken = (error: any, router: any) => {
  if (error?.response?.status === 401 || error?.response?.status === 403) {
    router.push("/");
  }
};

export function toNormalNum(x: string) {
  return x.split(",").join("");
}

export function numberWithCommas(x: any) {
  if (typeof x !== "undefined") {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return "";
}

export const getBase64 = (file: any) => {
  return new Promise((resolve) => {
    let baseURL: any = "";
    // Make new FileReader
    let reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(file);

    // on reader load somthing...
    reader.onload = () => {
      // Make a fileInfo Object
      baseURL = reader.result;
      resolve(baseURL);
    };
  });
};

export const convertMoney = (num: string) => {
  return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const checkStatusColor = (status: string) => {
  const checkStatus = status.split("_")
  switch (true) {
    case checkStatus.some(status => (status === RecordStatusEnum.ACCEPT || status === RecordStatusEnum.PROMOTION || status === RecordStatusEnum.DEPOSIT)):
      return "#36c96c";
    case checkStatus.some(status => status === RecordStatusEnum.REJECT):
      return "#ce4242";
    case checkStatus.some(status => status === RecordStatusEnum.PENDING):
      return "#aeaeae";
    case checkStatus.some(status => status === RecordStatusEnum.WITHDRAW):
      return "#ce4242";
  }
};
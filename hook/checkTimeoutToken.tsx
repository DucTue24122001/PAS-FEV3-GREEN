import { accountAction } from "../redux/account-slice";

const checkTimeoutToken = ({ err, router, dispatch }: { err?: any; router?: any; dispatch: (action: any) => void; }) => {
  if (err?.response?.status === 401 || err?.response?.status === 403) {
    router?.push("/");
  }
};

export default checkTimeoutToken
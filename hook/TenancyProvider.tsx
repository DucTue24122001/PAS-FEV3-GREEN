import React from "react";
import httpClient from "../http-client/httpClient";
import { Respond } from "../util/type";

type TenancyType = null | {
  mainColor: string,
  logo: string,
  appName: string,
  tenancyName: string,
  name: string,
  titleMeta: string,
  lang: string,
  currency: string,
  areaCode: string,
}


const tenancyContext = React.createContext<TenancyType>(null)

export const TenancyProvider = ({ children }: any) => {
  const [tenancy, setTenancy] = React.useState<TenancyType>(null)

  React.useEffect(() => {
    (async () => {
      try {
        const res: Respond = await httpClient.post("/services/app/Tenant/GetSettingCurrent")
        if(res.success) {
          setTenancy(res.result)
        }
      } catch (err) {
        console.log(err);
      }
    })()
  },[])

  return (
    <tenancyContext.Provider value={tenancy}>
      {children}
    </tenancyContext.Provider>
  )
}

export const useTenancy = () => {
  const tenancy = React.useContext(tenancyContext)
  return tenancy
}
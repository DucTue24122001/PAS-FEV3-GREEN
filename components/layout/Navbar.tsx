import { Box, Flex, Image } from '@chakra-ui/react'
import React, { useEffect, useMemo } from 'react'
import LuckyMyanmar from "../../public/images/LuckyMyanmar.png"
import langUkImg from "../../public/images/lang2-uk.png"
import langMmImg from "../../public/images/lang2-myanmar.png"
import { useRouter } from 'next/router'
import { checkDisableLayoutPage } from '../../util/function'
import { useTenancy } from '../../hook/TenancyProvider'
import { useTranslation } from 'react-i18next'
import ClientService from '../../http-client/ClientService'
import httpClient from '../../http-client/httpClient'
import { useDispatch, useSelector } from 'react-redux'
import { accountAction } from '../../redux/account-slice'
import { clientAction } from '../../redux/client-slice'
import { RootState } from '../../redux/store'

const Navbar = () => {
  const {language} = useSelector((state: RootState) => state.client)
  const {token} = useSelector((state: RootState) => state.account)
  const router = useRouter()
  const tenancy = useTenancy()
  const {i18n} = useTranslation()
  const dispatch = useDispatch()
   
  useEffect(() => {
    if(ClientService.isAuthenticated()) {
      (async () => {
        try {
          const data: any = await httpClient.get("/Account/GetProfile")
          dispatch(accountAction.setAccountDetail(data.result))
        } catch (err) {
          console.log(err);
        } finally {
          
        }
      })()
    }
  }, [token])

  useEffect(() => {
    if(tenancy?.lang) {
      const langList = tenancy.lang.split(",");
      dispatch(clientAction.setLanguageList(langList))
      const currentLang = window.localStorage.getItem("MY_LANGUAGE");
      if (!currentLang) {
        const primaryLang = langList.find((lang) => lang !== "EN")
        dispatch(clientAction.setLanguage(primaryLang));
        i18n.changeLanguage(primaryLang);
      } else {
        dispatch(clientAction.setLanguage(currentLang));
        i18n.changeLanguage(currentLang);
      }
    } else {
      i18n.changeLanguage("EN");
    }
  }, [tenancy])

  const currentLangImg = useMemo(() => {
    switch (true) {
      case language === "EN":
        return langUkImg.src
      case language === "MY":
        return langMmImg.src
      default:
        return langUkImg.src
    }
  }, [language])

  return (
    <Flex w={"100%"} minH={"50px"} boxShadow={"0 1px 1px #20ad59aa"} justifyContent={"space-around"} pos={"sticky"} top={0}
      bgGradient='linear(to-t, #0e5931, #024921)' zIndex={1000} display={checkDisableLayoutPage(router.pathname) ? "none" : "flex"}>
        <Box cursor={'pointer'} onClick={() => router.push("/")}>
          <Image p={"5px 0"} h={"50px"} src={LuckyMyanmar.src} alt={"gift"} />
        </Box>
        <Flex onClick={() => router.push("/language")} pos={"absolute"} right={"10px"} mt={"5px"} gap={"12.5px"}>
          <Image alt='language' src={currentLangImg} sx={langImg}/>
        </Flex>
    </Flex>
  )
}

export default Navbar

const langImg = {
  boxSize: "40px",
  p: "8px",
  filter: "drop-shadow(0 0 5px #000a)",
  cursor: "pointer"
}
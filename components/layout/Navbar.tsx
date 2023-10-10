import { Box, Flex, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import LuckyMyanmar from "../../public/images/LuckyMyanmar.png"
import langUkImg from "../../public/images/lang2-uk.png"
import langMmImg from "../../public/images/lang2-myanmar.png"
import { useRouter } from 'next/router'
import { checkDisableLayoutPage } from '../../util/function'
import { useTenancy } from '../../hook/TenancyProvider'
import { useTranslation } from 'react-i18next'
import ClientService from '../../http-client/ClientService'
import httpClient from '../../http-client/httpClient'
import { useDispatch } from 'react-redux'
import { accountAction } from '../../redux/account-slice'

const Navbar = () => {
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
    } else {
      router.push("/")
    }
  }, [])

  useEffect(() => {
    if(tenancy?.lang) {
      const langList = tenancy.lang.split(",");
      const currentLang = window.localStorage.getItem("MY_LANGUAGE");
      if (!currentLang) {
        const primaryLang = langList.find((lang) => lang !== "EN")
        i18n.changeLanguage(primaryLang);
      } else {
        i18n.changeLanguage(currentLang);
      }
    }
  }, [tenancy])

  return (
    <Flex w={"100%"} minH={"50px"} boxShadow={"0 1px 1px #20ad59aa"} justifyContent={"space-around"} pos={"sticky"} top={0}
      bgGradient='linear(to-t, #0e5931, #024921)' zIndex={1000} display={checkDisableLayoutPage(router.pathname) ? "none" : "flex"}>
        <Box cursor={'pointer'} onClick={() => router.push("/")}>
          <Image p={"5px 0"} h={"50px"} src={LuckyMyanmar.src} alt={"gift"} />
        </Box>
        <Flex pos={"absolute"} right={0} mt={"5px"} gap={"12.5px"}>
          <Image alt='en' src={langUkImg.src} sx={langImg}/>
          <Image alt='mm' src={langMmImg.src} sx={langImg}/>
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
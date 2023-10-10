import { Box, Center, Flex, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ClientService from '../http-client/ClientService'
import httpClient from '../http-client/httpClient'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { accountAction } from '../redux/account-slice'
import {FiUser} from 'react-icons/fi'
import { convertDecimalNum } from '../util/function'
import { useTranslation } from 'react-i18next'

const UserInfoBar = () => {
  const {accountDetail} = useSelector((state: RootState) => state.account)
  const dispatch = useDispatch()
  const router = useRouter()
  const {t} = useTranslation()
  
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
  

  return (
    <Flex w={"100%"}>
      <Center sx={infoBar} borderRight={"1px solid #072f1b"}
        onClick={() => router.push("/profile")} gap={2}>
        <Box fontSize={16}>
          <FiUser/>
        </Box>
        {accountDetail.name ? accountDetail.name : <Spinner/>}
      </Center>
      <Box sx={infoBar} onClick={() => router.push("/wallet")}>
        {t('balance')} : {convertDecimalNum(accountDetail.balance)}
      </Box>
    </Flex>
  )
}

export default UserInfoBar

const infoBar = {
  h: "45px",
  lineHeight: "45px",
  color: "#fff",
  fontSize: "13px",
  w: "50%",
  textAlign: "center",
  fontWeight: 600,
  textTransform: "uppercase",
  boxShadow: "0 2px 4px #0007",
  bgGradient: "linear(to-b, #012610 15%, #010701 60%, #000000)",
  cursor: "pointer"
}
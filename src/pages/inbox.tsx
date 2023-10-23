import { Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Respond } from '../../util/type'
import httpClient from '../../http-client/httpClient'
import { useDispatch } from 'react-redux'
import { accountAction } from '../../redux/account-slice'
import MailList from '../../components/inbox/MailList'

const Inbox = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      dispatch(accountAction.fetchingMailStatus(true))
      try {
        const res: Respond = await httpClient.post("/services/app/notification/GetListNotification")
        dispatch(accountAction.setInboxMail(res.result))
      } catch (err) {
        console.log(err);
      } finally {
        dispatch(accountAction.fetchingMailStatus(false))
      }
    })()
  }, [])

  return (
    <>
      <Box px={"5px"} w={"100%"} mb={"50px"}>
        <Box maxW={"550px"} p={"10px 5px"} mx={"auto"}>
          <Box mt={"20px"} >
            <Text fontSize={"22px"} fontWeight={500} color={"#e6e7ff"} textAlign={'center'} my={"10px"}
              pb={"20px"}>
              {t('inbox')}
            </Text>
          </Box>
          <Box maxW={"550px"} p={["0px","0px","10px 15px","10px 15px"]} mx={"auto"}>
            <MailList/>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Inbox
import React from 'react'
import UserInfoBar from '../../components/UserInfoBar'
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import CopyButton from '../../components/constants/CopyButton'

const Personal = () => {
  const {accountDetail} = useSelector((state: RootState) => state.account)
  const {t} = useTranslation()
  return (
    <>
      <UserInfoBar/>
      <Box px={["10px","10px","30px","30px"]} w={"100%"}>
        <Text fontSize={"20px"} fontWeight={500} color={"#e6e7ff"} textAlign={'center'} my={"20px"}>
          {t("personal_info")}
        </Text>
        <Flex maxW={"500px"} mx={"auto"} className='text_vip' flexDir={'column'} gap={[5,5,8,8]} justifyContent={'center'}
          fontSize={[13,13,16,16]} pl={"20px"}>
          <Flex w={"100%"} >
            <Text sx={textBox}>{t('full_name')}</Text>
            <Text textAlign={"start"}>{accountDetail.name}</Text>
          </Flex>
          <Flex w={"100%"}>
            <Text sx={textBox}>{t('username')}</Text>
            <Text>{accountDetail.userName}</Text>
          </Flex>
          <Flex w={"100%"}>
            <Text sx={textBox}>ID</Text>
            <Text>{accountDetail.surName}</Text>
          </Flex>
          <Flex w={"100%"}>
            <Text sx={textBox}>{t('mobile')}</Text>
            <Text>{accountDetail.phoneNumber}</Text>
          </Flex>
          <Flex w={"100%"}>
            <Text sx={textBox}>{t('referral_code')}</Text>
            <Center gap={3}>
              <Text>{accountDetail.referralCode}</Text>
              <CopyButton h='30px' copyText={accountDetail.referralCode}/>
            </Center>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Personal

const textBox = {
  w: ["180px","180px","300px","300px"],
  textAlign: "start"
}
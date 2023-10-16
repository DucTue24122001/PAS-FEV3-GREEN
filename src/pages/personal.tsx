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
        <Text fontSize={"20px"} fontWeight={500} color={"#caffe1"} textAlign={'center'} my={"20px"}>
          {t("personal_info")}
        </Text>
        <Flex maxW={"800px"} mx={"auto"} className='text_vip' flexDir={'column'} gap={[5,5,8,8]}>
          <Flex justifyContent={'space-around'} w={"100%"}>
            <Text sx={textBox}>{t('full_name')}</Text>
            <Text sx={textBox}>{accountDetail.name}</Text>
          </Flex>
          <Flex justifyContent={'space-around'} w={"100%"}>
            <Text sx={textBox}>{t('username')}</Text>
            <Text sx={textBox}>{accountDetail.userName}</Text>
          </Flex>
          <Flex justifyContent={'space-around'} w={"100%"}>
            <Text sx={textBox}>ID</Text>
            <Text sx={textBox}>{accountDetail.surName}</Text>
          </Flex>
          <Flex justifyContent={'space-around'} w={"100%"}>
            <Text sx={textBox}>{t('mobile')}</Text>
            <Text sx={textBox}>{accountDetail.phoneNumber}</Text>
          </Flex>
          <Flex justifyContent={'space-around'} w={"100%"}>
            <Text sx={textBox}>{t('referral_code')}</Text>
            <Center w={"50%"} gap={3}>
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
  w: "50%",
  textAlign: "center"
}
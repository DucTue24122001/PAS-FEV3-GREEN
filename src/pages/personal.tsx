import React from 'react'
import UserInfoBar from '../../components/UserInfoBar'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const Personal = () => {
  const {accountDetail} = useSelector((state: RootState) => state.account)
  const {t} = useTranslation()
  return (
    <>
      <UserInfoBar/>
      <Box px={"30px"} w={"100%"}>
        <Text fontSize={"20px"} fontWeight={500} color={"#caffe1"} textAlign={'center'} my={"10px"}>
          {t("personal_info")}
        </Text>
        <Flex maxW={"800px"} mx={"auto"} className='text_vip'>
          <Flex justifyContent={'space-around'} w={"100%"}>
            <Text>{t('full_name')}</Text>
            <Text>{accountDetail.name}</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Personal
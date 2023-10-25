import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import NetBankingDeposit from '../../components/deposit/NetBankingDeposit'
import { useTranslation } from 'react-i18next'
import netBankingIco from "../../public/images/netbanking.png"
import cryptoIco from "../../public/images/CryptoPayment.png"
import { TypeDeposit } from '../../util/enum'
import CryptoDeposit from '../../components/deposit/CryptoDeposit'

const Deposit = () => {
  const {t} = useTranslation()
  const [currentDepositType, setCurrentDepositType] = useState(TypeDeposit.BANK)

  return (
    <Box className='layout' pb={"80px"}>
      <Box maxW={"550px"} p={"10px 15px"} mx={"auto"}>
        <Box>
          <Text pt={"16px"} pb={"12.7px"} alignItems={'center'}
            color={"#e6e7ff"} fontSize={"22px"} fontWeight={500} textAlign={'center'}>
            {t('deposit')}
          </Text>
        </Box>
        <Flex minH={"75px"} px={[2,2,2,0]} gap={[3,3,3,5]} pb={[3,3,3,0]} 
        minW={"fit-content"} mb={"40px"}>
          {paymentOptions.map((item, i) => (
            <Flex px={"14px"} flexDir={"column"} cursor={'pointer'} gap={"6px"} borderRadius={3}
            transition={".3s"} minW={"100px"} alignItems={'center'} justifyContent={"center"}  fontWeight={"bold"}
            fontSize={["12px","12px","12px","16px"]}
            color={currentDepositType === item.value ? "#303030" : "#fff"}
            bgColor={currentDepositType === item.value ? "#fff" : "rgba(0,0,0,.1)"}
            border={"2px solid white"}
            onClick={() => setCurrentDepositType(item.value)}
            key={i}>
              <Image alt={item.title} src={item.image} h={"40px"}/>
              <Text fontWeight={600}>{item.title}</Text>
            </Flex>
          ))}
        </Flex>
        {currentDepositType === TypeDeposit.BANK && <NetBankingDeposit/>}
        {currentDepositType === TypeDeposit.CRYPTO && <CryptoDeposit/>}
      </Box>
    </Box>
  )
}

export default Deposit

const paymentOptions = [
  {
    title: "Net Banking",
    image: netBankingIco.src,
    value: TypeDeposit.BANK
  },
  {
    title: "USDT",
    image: cryptoIco.src,
    value: TypeDeposit.CRYPTO
  },
]
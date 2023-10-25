import { Box, Button, Flex, Image, Spinner, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { accountAction } from '../../redux/account-slice'
import CurrencyInput from 'react-currency-input-field'
import CopyButton from '../constants/CopyButton'
import saveAs from 'file-saver'
import { checkIsTimeoutToken, convertDecimalNum, getBase64, numberWithCommas } from '../../util/function'
import { useTenancy } from '../../hook/TenancyProvider'
import FileInput from './FileInput'
import { DepositType } from '../../util/enum'
import httpClient from '../../http-client/httpClient'
import { useRouter } from 'next/router'

const CryptoDeposit = () => {
  const {agentCryptoBankList, currentAgentCryptoSelect} = useSelector((state: RootState) => state.account)
  const [depositAmount, setDepositAmount] = useState("")
  const [currentImg, setCurrentImg] = useState<any>(null)
  const [base64Img, setBase64Img] = useState<any>("")
  const [isLoading, setIsLoading] = useState(false)
  const [isErr, setIsErr] = useState(false)
  const [responseError, setResponseError] = useState("")
  const [errorForm, setErrorForm] = useState({
    amount: "",
    image: ""
  })

  const {t} = useTranslation()
  const dispatch = useDispatch()
  const tenancy = useTenancy()
  const toast = useToast()
  const router = useRouter()

  const downloadFile = async (url: string) => {
    saveAs(url + '?not-from-cache-please', `qr-${currentAgentCryptoSelect?.cryptoName}`)
  }

  useEffect(() => {
    setErrorForm({
      ...errorForm,
      amount: depositAmount ? "" : 'deposit_amount_is_required',
      image: currentImg ? "" : "receipt_is_required",
    })
  }, [depositAmount, currentImg])

  const resetForm = () => {
    setDepositAmount("")
    setIsErr(false)
    setCurrentImg(null)
    setBase64Img("")
    setResponseError("")
  }

  const imageInputHandler = (file: any) => {
    setCurrentImg(file)
    getBase64(file).then((res: any) => {
      setBase64Img(res)
    }).catch(err => {
      setBase64Img("")
    });
  }

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const isFormValid = Object.values(errorForm).every(item => item === "")
    if(!isFormValid) {
      setIsErr(true)
      return
    }
    setIsLoading(true)
    try {
      const res: any = await httpClient.post("/services/app/bankTransaction/AddBankTransaction", {
        type: "DEPOSIT",
        paymentCategory: DepositType.Crypto,
        principalAmount: depositAmount,
        amount: depositAmount,
        agentBankName: currentAgentCryptoSelect?.cryptoName,
        agentBankShortName: currentAgentCryptoSelect?.cryptoShortName,
        agentAccountName: currentAgentCryptoSelect?.displayName,
        agentAccountNumber: currentAgentCryptoSelect?.cryptoNumber,
        playerBankName: "",
        playerBankShortName: "",
        playerAccountName: "",
        playerAccountNumber: "",
        bankReceipt: base64Img,
        memo: "",
      })
      if (res.success) {
        resetForm()
        toast({
          status: "success",
          title: t('your_deposit_request_has_been_submit'),
          duration: 3000,
          isClosable: true,
        })
      } else {
        setResponseError(res.error.message)
      }
    } catch (err: any) {
      console.log(err);
      checkIsTimeoutToken(err, router)
      toast({
        status: "error",
        title: err?.response?.data?.error?.message || t('something_went_wrong'),
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (agentCryptoBankList.length === 0) {
    return (
      <Box mb={"30px"}>
        <Text className='text_vip'>Coming soon...</Text>
      </Box>
    )
  }

  return (
    <form onSubmit={submitHandler}>
      <Box mb={"30px"}>
        <label>
          <Text className='text_vip' mb={"10px"} fontSize={14}>Network</Text>
        </label>
        <Flex gap={2} flexWrap={"wrap"}>
          {agentCryptoBankList.map((crypto, i) => (
            <Flex key={i} 
              minW={"80px"} minH={"80px"} borderRadius={'10px'} alignItems={'center'} flexDir={'column'} justifyContent={'center'}
              gap={2} cursor={'pointer'} transition={".3s"}
              border={"2px solid white"}
              color={currentAgentCryptoSelect?.id === crypto.id ? "#303030" : "#fff"}
              bgColor={currentAgentCryptoSelect?.id === crypto.id ? "#fff" : "rgba(0,0,0,.1)"}
              onClick={() => dispatch(accountAction.setCurrentAgentCryptoSelect(crypto))}>
              <Image alt='netbanking' src={crypto.logo} h={"30px"}/>
              <Text fontWeight={600} textOverflow={"ellipsis"} overflow={'hidden'} whiteSpace={"nowrap"} w={"80px"}
                fontSize={["12px","12px","12px","16px"]}
                textAlign={'center'}>
                {crypto.cryptoShortName}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
      <Box mb={"30px"}>
        <label>
          <Text className='text_vip' mb={"5px"} fontSize={14}>Wallet Address</Text>
        </label>
        <Flex alignItems={"center"} gap={3} mb={"10px"}>
          <Text color={"white"} lineHeight={"20px"} fontSize={["14px","14px","16px","16px"]}>
            Code: <span>{currentAgentCryptoSelect?.cryptoNumber}</span>
          </Text>
          <CopyButton copyText={currentAgentCryptoSelect?.cryptoNumber} h='30px'/>
        </Flex>
        {currentAgentCryptoSelect?.imageUrl && <Flex flexDir={'column'} alignItems={['center','center','flex-start','flex-start']} gap={3}>
          <Image alt='qr-code' boxSize={"120px"} mr={["30px","30px","0px","0px"]}
            src={currentAgentCryptoSelect?.imageUrl} />
          <Button colorScheme='whatsapp' w={"110px"} h={"30px"} padding={"5px"} alignSelf={'center'}
            display={["block","block","none","none"]} mr={["30px","30px","0px","0px"]} fontWeight={400}
            onClick={() => downloadFile(currentAgentCryptoSelect?.imageUrl)}>
            {t("save_qr")}
          </Button>
        </Flex>}
      </Box>
      <Box mb={"30px"}>
        <label htmlFor="input">
          <Text className='text_vip' mb={"5px"} fontSize={14}>{t('amount')}</Text>
        </label>
        <CurrencyInput className='default_input' id='input' decimalsLimit={2} decimalScale={2} allowDecimals={true} onValueChange={(text: any) => setDepositAmount(text)}
          disableAbbreviations={true} autoComplete='off' value={depositAmount}
          intlConfig={{ locale: 'en-US'}}/>
        {isErr && <Text className='error'>{t(`${errorForm.amount}`)}</Text>}
        <Text className='error'>{t('min_max')}: {numberWithCommas(currentAgentCryptoSelect?.minimumDeposit)}/{numberWithCommas(currentAgentCryptoSelect?.maximumDeposit)}</Text>
      </Box>
      <Box mb={"30px"}>
        <label>
          <Text className='text_vip' mb={"5px"} fontSize={14}>{tenancy?.currency} {t("received")}</Text>
        </label>
        <Flex sx={calculateItem} h={"50px"}>
          <Text sx={calculateText}>{depositAmount ? convertDecimalNum(+(Math.floor(+depositAmount * 100)/100).toFixed(2) * currentAgentCryptoSelect?.rate) : "0.00"}</Text>
        </Flex>
      </Box>
      <Box mb={"30px"}>
        <Text className='text_vip' mb={"5px"} fontSize={14}>{t('upload_receipt')}</Text>
        <FileInput currentImg={currentImg} imageInputChange={imageInputHandler}/>
        {isErr && <Text className='error'>{t(`${errorForm.image}`)}</Text>}
      </Box>
      <Box p={"2%"}>
        <Box border={"solid 2px #2132ff"} p={"2%"}>
          <Text className='text_vip' mb={"5px"} fontSize={14}>{t('notice')}</Text>
          <Box p={"inherit"} color={"white"} fontSize={"11.2px"}>
            <Text>1. USDT {t("to")} {tenancy?.currency} {t("rate_is")} 1 : {currentAgentCryptoSelect?.rate}</Text>
            <Text>2. {t('notification')}</Text>
          </Box>
        </Box>
      </Box>
      <Box px={"15px"} pt={"20px"}>
        <button className='login_btn' disabled={isLoading}>{isLoading ? <Spinner/> : t('submit')}</button>
        <Text className='error'>{responseError}</Text>
      </Box>
    </form>
  )
}

export default CryptoDeposit

const calculateItem = {
  p:"5px 10px",
  borderRadius:5,
  fontWeight:700,
  bgColor:"#d9dee4",
  flexDir:'column',
  w:"100%",
  alignItem: "center",
  justifyContent: 'center',
}

const calculateText = {
  fontFamily: "Teko,sans-serif",
  color: "#0b76f9",
  fontSize: "24px",
  fontWeight: 500
}
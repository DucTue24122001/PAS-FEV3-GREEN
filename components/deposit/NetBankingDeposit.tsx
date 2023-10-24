import { Box, Button, Flex, Image, Spinner, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import CurrencyInput from 'react-currency-input-field'
import { useTranslation } from 'react-i18next'
import CopyButton from '../constants/CopyButton'
import FileInput from './FileInput'
import { checkIsTimeoutToken, getBase64, numberWithCommas } from '../../util/function'
import { Bank } from '../../util/type'
import { useRouter } from 'next/router'
import { DepositType } from '../../util/enum'
import httpClient from '../../http-client/httpClient'
import {saveAs} from "file-saver";

const NetBankingDeposit = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [agentDepositBankingList, setAgentDepositBankingList] = useState<Bank[]>([])
  const [userDepositBankingList, setUserDepositBankingList] = useState<Bank[]>([])
  const [currentAgentBankSelect, setCurrentAgentBankSelect] = useState<Bank> ()
  const [currentUserBankSelect, setCurrentUserBankSelect] = useState<Bank>()
  const [depositAmount, setDepositAmount] = useState("")
  const [base64Img, setBase64Img] = useState<any>("")
  const [currentImg, setCurrentImg] = useState<any>(null)
  const [responseError, setResponseError] = useState("")
  const [isErr, setIsErr] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const [errorForm, setErrorForm] = useState({
    amount: "",
    bank: "",
    image: ""
  })
  const toast = useToast()
  const {t} = useTranslation()
  
  const resetForm = () => {
    setDepositAmount("")
    setIsErr(false)
    selectAgentDepositBank("")
    selectUserDepositBank("")
    setCurrentImg(null)
    setBase64Img("")
    setResponseError("")
  }

  const downloadFile = async (url: string) => {
    saveAs(url + '?not-from-cache-please', `qr-${currentAgentBankSelect?.bankName}`)
  }

  const imageInputHandler = (file: any) => {
    setCurrentImg(file)
    getBase64(file).then((res: any) => {
      setBase64Img(res)
    }).catch(err => {
      setBase64Img("")
    });
  }

  useEffect(() => {
    setErrorForm({
      ...errorForm,
      amount: depositAmount ? "" : 'deposit_amount_is_required',
      bank: currentUserBankSelect && currentAgentBankSelect ? "" : "bank_is_required",
      image: currentImg ? "" : "receipt_is_required",
    })
  },[depositAmount, currentUserBankSelect, currentAgentBankSelect, currentImg])

  const isFormValid = useMemo(() => {
    return Object.values(errorForm).every(item => item === "")
  },[errorForm])

  useEffect(() => {
    (async () => {
      setIsFetching(true)
      try {
        const res: any = await httpClient.post("/services/app/bankTransaction/GetInfoBank", null, {
          params: {
            type: "deposit"
          }
        })
        const depositInfo = res.result
        setAgentDepositBankingList(depositInfo.agentBank)
        setUserDepositBankingList(depositInfo.playerBank)
      } catch (err: any) {
        console.log(err);
        checkIsTimeoutToken(err, router)
        toast({
        status: "error",
        title: err?.response?.data?.error?.message || t('something_went_wrong'),
      })
      } finally {
        setIsFetching(false)
      }
    })()
  }, [])

  const selectAgentDepositBank = (bankId: string) => {
    setCurrentAgentBankSelect(agentDepositBankingList.find(bank => bank.id === +bankId))
  }
  const selectUserDepositBank = (bankId: string) => {
    setCurrentUserBankSelect(userDepositBankingList.find(bank => bank.id === +bankId))
  }

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if(!isFormValid) {
      setIsErr(true)
      return
    }
    setIsLoading(true)
    try {
      const res: any = await httpClient.post("/services/app/bankTransaction/AddBankTransaction", {
        type: "DEPOSIT",
        paymentCategory: DepositType.NetBanking,
        principalAmount: depositAmount,
        amount: depositAmount,
        agentBankName: currentAgentBankSelect?.bankName,
        agentBankShortName: currentAgentBankSelect?.bankShortName,
        agentAccountName: currentAgentBankSelect?.accountName,
        agentAccountNumber: currentAgentBankSelect?.accountNumber,
        playerBankName: currentUserBankSelect?.bankName,
        playerBankShortName: currentUserBankSelect?.bankShortName,
        playerAccountName: currentUserBankSelect?.accountName,
        playerAccountNumber: currentUserBankSelect?.accountNumber,
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

  return (
    <form onSubmit={submitHandler}>
        <Box mb={"30px"}>
          <label htmlFor="deposit">
            <Text className='text_vip' mb={"5px"} fontSize={14}>{t('deposit_amount')}</Text>
          </label>
          <CurrencyInput className='default_input' id='deposit' decimalsLimit={2} decimalScale={2} allowDecimals={true} onValueChange={(text: any) => setDepositAmount(text)}
            disableAbbreviations={true} autoComplete='off'
            intlConfig={{ locale: 'en-US'}}/>
          {isErr && <Text className='error'>{t(`${errorForm.amount}`)}</Text>}
        </Box>
        <Box mb={"30px"}>
          <Text className='text_vip' mb={"5px"} fontSize={14}>{t("bank")}</Text>
          <select className='default_select' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => selectAgentDepositBank(e.target.value)}>
            <option className='default_option' value={""}>{t('select_bank')}</option>
            {agentDepositBankingList.map((bank, i) => (
              <option key={i} className='default_option' value={bank.id}>
                {bank.accountName} ({bank.bankShortName})
              </option>
            ))}
          </select>
          {isErr && <Text className='error'>{t(`${errorForm.bank}`)}</Text>}
        </Box>
        {currentAgentBankSelect && <Flex flexDir={'column'} mb={"30px"} gap={"20px"} alignItems={'flex-start'}>
          <Flex alignItems={"center"} gap={3}>
            <Text color={"white"} lineHeight={"20px"} fontSize={"16px"}>
              {t('account_name')}: <span>{currentAgentBankSelect?.accountName}</span>
            </Text>
            <CopyButton copyText={currentAgentBankSelect?.accountName} h='30px'/>
          </Flex>
          <Flex alignItems={"center"} gap={3}>
            <Text color={"white"}  lineHeight={"20px"} fontSize={"16px"}>
              {t('account_number')}: <span>{currentAgentBankSelect?.accountNumber}</span>
            </Text>
            <CopyButton copyText={currentAgentBankSelect?.accountNumber} h='30px'/>
          </Flex>
          {currentAgentBankSelect?.imageUrl && <>
            <Image alt='qr' src={currentAgentBankSelect?.imageUrl} boxSize={"200px"} alignSelf={'center'}/>
            <Button colorScheme='blue' w={"110px"} h={"30px"} padding={"5px"} alignSelf={'center'}
              display={["block","block","none","none"]} mr={["30px","30px","0px","0px"]} fontWeight={400}
              onClick={() => downloadFile(currentAgentBankSelect.imageUrl)}>
              {t("save_qr")}
            </Button>
          </>}
        </Flex>}
        <Box mb={"30px"}>
          <Text className='text_vip' mb={"5px"} fontSize={14}>{t('select_bank')}</Text>
          <select className='default_select' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => selectUserDepositBank(e.target.value)}>
            <option className='default_option' value={""}>{t('select_bank')}</option>
            {userDepositBankingList.map((bank, i) => (
              <option key={i} className='default_option' value={bank.id}>
                {bank.accountName} {bank.accountNumber} ({bank.bankShortName})
              </option>
            ))}
          </select>
          {isErr && <Text className='error'>{t(`${errorForm.bank}`)}</Text>}
        </Box>
        <Box mb={"30px"}>
          <Text className='text_vip' mb={"5px"} fontSize={14}>{t('upload_receipt')}</Text>
          <FileInput currentImg={currentImg} imageInputChange={imageInputHandler}/>
          {isErr && <Text className='error'>{t(`${errorForm.image}`)}</Text>}
        </Box>
        {currentAgentBankSelect && <Box>
          <Text className='error'>{t('min_max')}: {numberWithCommas(currentAgentBankSelect?.minimumDeposit)}/{numberWithCommas(currentAgentBankSelect?.maximumDeposit)}</Text>
        </Box>}
        <Box p={"2%"}>
          <Box border={"solid 2px #2132ff"} p={"2%"}>
            <Text className='text_vip' mb={"5px"} fontSize={14}>{t('notice')}</Text>
            <Box p={"inherit"} color={"white"} fontSize={"11.2px"}>
              <Text>{t('notification')}</Text>
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

export default NetBankingDeposit
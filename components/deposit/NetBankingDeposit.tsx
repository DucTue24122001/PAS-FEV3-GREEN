import { Box, Flex, Image, Spinner, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import CurrencyInput from 'react-currency-input-field'
import { useTranslation } from 'react-i18next'
import FileInput from './FileInput'
import { checkIsTimeoutToken, getBase64, numberWithCommas } from '../../util/function'
import { Bank } from '../../util/type'
import { useRouter } from 'next/router'
import { DepositType } from '../../util/enum'
import httpClient from '../../http-client/httpClient'
import { useDispatch, useSelector } from 'react-redux'
import { accountAction } from '../../redux/account-slice'
import { RootState } from '../../redux/store'
import AgentBankItem from './AgentBankItem'

const NetBankingDeposit = () => {
  const { bankTypeList, currentBankTypeSelect, depositAgentNetBankingFilter, currentAgentBankSelect, userDepositBankingList } = useSelector((state: RootState) => state.account)
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
  const dispatch = useDispatch()
  
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

  useEffect(() => {
    setErrorForm({
      ...errorForm,
      amount: depositAmount ? "" : 'deposit_amount_is_required',
      bank: currentUserBankSelect ? "" : "bank_is_required",
      image: currentImg ? "" : "receipt_is_required",
    })
  },[depositAmount, currentUserBankSelect, currentImg])

  const isFormValid = useMemo(() => {
    return Object.values(errorForm).every(item => item === "")
  },[errorForm])

  
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
          <label>
            <Text className='text_vip' mb={"10px"} fontSize={14}>Bank List</Text>
          </label>
          <Flex gap={2} flexWrap={"wrap"}>
            {bankTypeList.map((bank, i) => (
              <Flex key={i} 
                minW={"80px"} minH={"80px"} borderRadius={'10px'} alignItems={'center'} flexDir={'column'} justifyContent={'center'}
                gap={2} cursor={'pointer'} transition={".3s"}
                border={"2px solid white"}
                color={currentBankTypeSelect.id === bank.id ? "#303030" : "#fff"}
                bgColor={currentBankTypeSelect.id === bank.id ? "#fff" : "rgba(0,0,0,.1)"}
                onClick={() => dispatch(accountAction.setCurrentBankTypeSelect(bank))}>
                <Image alt='netbanking' src={bank.logo} h={"30px"}/>
                <Text fontWeight={600} textOverflow={"ellipsis"} overflow={'hidden'} whiteSpace={"nowrap"} w={"80px"}
                  fontSize={["12px","12px","12px","16px"]}
                  textAlign={'center'}>
                  {bank.bankShortName}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>
        <Box mb={"30px"}>
          <Text className='text_vip' mb={"5px"} fontSize={14}>{t("bank")}</Text>
          {depositAgentNetBankingFilter.map((bank, i) => (
            <AgentBankItem key={i} bank={bank}/>
          ))}
        </Box>
        <Box mb={"30px"}>
          <Text className='text_vip' mb={"5px"} fontSize={14}>{t('select_bank')}</Text>
          <select className='default_select' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => selectUserDepositBank(e.target.value)}>
            <option className='default_option' value={""}>{t('select_bank')}</option>
            {userDepositBankingList.map((bank, i) => (
              <option key={i} className='default_option' value={bank.id}>
                {bank.accountName} ({bank.bankShortName}) {bank.accountNumber}
              </option>
            ))}
          </select>
          {isErr && <Text className='error'>{t(`${errorForm.bank}`)}</Text>}
        </Box>
        <Box mb={"30px"}>
          <label>
            <Text className='text_vip' mb={"10px"} fontSize={14}>{t('amount')}</Text>
          </label>
          <CurrencyInput className='default_input' id='deposit' decimalsLimit={2} decimalScale={2} allowDecimals={true} onValueChange={(text: any) => setDepositAmount(text)}
          disableAbbreviations={true} autoComplete='off' value={depositAmount}
          intlConfig={{ locale: 'en-US'}}/>
          {isErr && <Text className='error'>{t(`${errorForm.amount}`)}</Text>}
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
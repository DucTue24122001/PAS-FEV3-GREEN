import { Box, Input, Spinner, Text, Toast, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import httpClient from '../../http-client/httpClient'
import { checkIsTimeoutToken, numberWithCommas, toNormalNum } from '../../util/function'
import { Bank } from '../../util/type'
import CurrencyInput from 'react-currency-input-field'

const Withdraw = () => {
  const router = useRouter()
  const {t} = useTranslation()
  const [userWithdrawBankList, setUserWithdrawBankList] = useState<Bank[]>([])
  const [currentUserWithdrawBank, setCurrentUserWithdrawBank] = useState<Bank>()
  const [amountInput, setAmountInput] = useState('')
  const [error, setError] = useState({
    amount: "",
    bank: "",
  })
  const [responseErr, setResponseErr] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const toast = useToast()

  useEffect(() => {
    setError({
      ...error,
      amount: amountInput ? "" : 'withdraw_amount_is_required',
      bank: currentUserWithdrawBank ? "" : "bank_is_required",
    })
  },[amountInput, currentUserWithdrawBank])
  
  const isFormValid = useMemo(() => {
    return Object.values(error).every(item => item === "")
  },[error])


  const resetForm = () => {
    setIsError(false)
    setAmountInput("")
    selectUserWithdrawBank("")
    setResponseErr("")
  }

  useEffect(() => {
    (async () => {
      try {
        const res: any = await httpClient.post(
          "/services/app/bankTransaction/GetInfoBank",
          null,
          {
            params: {
              type: "withdraw",
            },
          }
        );
        if (res.success) {
          setUserWithdrawBankList(res.result.playerBank);
        }
      } catch (err: any) {
        console.log(err);
        checkIsTimeoutToken(err, router);
        Toast({
          status: "error",
          title:
            err?.response?.data?.error?.message ||
            t('something_went_wrong'),
        });
      }
    })();
  }, []);

  const inputAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setAmountInput(value)
  }

  const selectUserWithdrawBank = (id: string) => {
    setCurrentUserWithdrawBank(userWithdrawBankList.find(bank => bank.id === +id))
  } 

  const handleWithdrawSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if(!isFormValid) {
      setIsError(true)
      return
    }
    try {
      setIsLoading(true)
      const res: any = await httpClient.post("/services/app/bankTransaction/AddBankTransaction", {
        type: "WITHDRAW",
        amount: toNormalNum(amountInput),
        playerBankName: currentUserWithdrawBank?.bankName,
        playerBankShortName: currentUserWithdrawBank?.bankShortName,
        playerAccountName: currentUserWithdrawBank?.accountName,
        playerAccountNumber: currentUserWithdrawBank?.accountNumber,
      })
      if (res.success) {
        resetForm()
        // dispatch(accountAction.setAccountBalance(Number(accountBalance)-Number(toNormalNum(amountInput))))
        toast({
          status: 'success',
          title: t('your_withdraw_request_has_been_submitted_successfully'),
        })
      } else {
        setIsError(false)
        setResponseErr(res.error.message)
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
    <Box className='layout' pb={"50px"}>
      <form onSubmit={handleWithdrawSubmit}>
        <Box maxW={"550px"} p={"10px 15px"} pb={"30px"} mx={"auto"}>
          <Box mt={"20px"} mb={"40px"}>
            <Text pt={"16px"} pb={"12.7px"} alignItems={'center'}
              color={"#e6e7ff"} fontSize={"22px"} fontWeight={500} textAlign={'center'}>
              {t('withdraw')}
            </Text>
          </Box>
          <Box mb={"30px"}>
            <label htmlFor="withdraw">
              <Text className='text_vip' mb={"5px"} fontSize={14}>{t('withdraw_amount')}</Text>
            </label>
            <CurrencyInput className='default_input' decimalsLimit={2} decimalScale={2} allowDecimals={true} onChange={inputAmount}
              disableAbbreviations={true}
              intlConfig={{ locale: 'en-US'}}/>
            {isError && <Text className='error'>{t(`${error.amount}`)}</Text>}
          </Box>
          <Box>
            <Text className='text_vip' mb={"5px"} fontSize={14} textTransform={"uppercase"}>{t('bank')}</Text>
              <select className='default_select' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => selectUserWithdrawBank(e.target.value)}>
                <option className='default_option' value={""}>{t('select_bank')}</option>
                {userWithdrawBankList.map((bank, i) => (
                  <option key={i} className='default_option' value={bank.id}>
                    {bank.accountName} {bank.accountNumber} ({bank.bankShortName})
                  </option>
                ))}
              </select>
              {isError && <Text className='error'>{t(`${error.bank}`)}</Text>}
          </Box>
          {currentUserWithdrawBank && <Box>
            <Text className='error'>{t('min_max')}: {numberWithCommas(currentUserWithdrawBank?.minimumWithdraw)}/{numberWithCommas(currentUserWithdrawBank?.maximumWithdraw)}</Text>
          </Box>}
          {/* {userWithdrawBankList.length === 0 && <Box pt={"20px"}>
            <button className='login_btn' type='button' onClick={() => router.push("/add-bank")} >{t('add_bank')}</button>
          </Box>} */}
          <Box py={"2%"} mt={"30px"}>
            <Box border={"solid 2px #2132ff"} p={"2%"}>
              <Text className='text_vip' mb={"5px"} fontSize={14}>{t('notice')}</Text>
              <Box p={"inherit"} color={"white"} fontSize={"11.2px"}>
                <Text>{`1) ${t('withdrawal')}`}</Text>
                <Text>{`2) ${t('withdrawing')}`}</Text>
              </Box>
            </Box>
          </Box>
          <Box pt={"20px"}>
            <button className='login_btn' type='submit' disabled={isLoading}>{isLoading ? <Spinner/> : t('submit')}</button>
            <Text className='error'>{responseErr}</Text>
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default Withdraw
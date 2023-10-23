import { Box, Input, Spinner, Text, useToast } from '@chakra-ui/react'
import React, { ChangeEvent, useEffect, useState } from 'react'
import httpClient from '../../http-client/httpClient';
import { Respond } from '../../util/type';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { checkIsTimeoutToken } from '../../util/function';
import { useRouter } from 'next/router';
import { accountAction } from '../../redux/account-slice';
import { useTenancy } from '../../hook/TenancyProvider';

type AddBankType = {
  currency: string,
  id: number,
  name: string,
  logo: string,
  shortName: string,
}

const AddBank = () => {
  const {accountDetail} = useSelector((state: RootState) => state.account)
  const [allListBank, setAllListBank] = useState<AddBankType[]>([])
  const [currentBankToAdd, setCurrentBankToAdd] = useState<AddBankType>()
  const [addBankForm, setAddBankForm] = useState({
    accountNumber: "",
    displayName: "",
  })
  const [addBankErrorForm, setAddBankErrorForm] = useState({
    bankNum: "",
    displayName: "",
    currentBank: "",
  })
  const [isError, setIsError] = useState(false)
  const {t} = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()
  const router = useRouter()
  const dispatch = useDispatch()
  const tenancy = useTenancy()

  const resetForm = () => {
    setAddBankForm({
      accountNumber: "",
      displayName: "",
    })
    setIsError(false)
  }

  useEffect(() => {
    setAddBankErrorForm({
      bankNum: addBankForm.accountNumber ? "" : t('bank_number_required'),
      currentBank: currentBankToAdd ? "" : t('bank_required'),
      displayName: addBankForm.displayName ? "" : t('display_name_required')
    })
  }, [currentBankToAdd, addBankForm, tenancy])

  useEffect(() => {
    (async () => {
      if(allListBank.length === 0) {
        try {
          const res: Respond = await httpClient.post(
            "/services/app/bank/GetAllBank"
            );
            setAllListBank(res.result);
          } catch (err) {
            console.log(err);
          }
        }
      })();
  }, []);

  const selectBank = (bankId: string) => {
    setCurrentBankToAdd(allListBank.find(bank => bank.id === +bankId))
  }

  const bankFormInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value, validity} = e.target
    if (validity.valid) {
      setAddBankForm({...addBankForm, [name] : value})
    }
  }

  const addBankSubmitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const isError = Object.values(addBankErrorForm).some(value => value.length !== 0)
    if (isError) {
      setIsError(true)
      return
    }
    setIsLoading(true)
    try {
      const res: any = await httpClient.post("/services/app/bankAccount/CreateBankAccountPlayer", {
        ...addBankForm,
        accountName: accountDetail.name,
        bankName: currentBankToAdd?.name,
        bankShortName: currentBankToAdd?.shortName,
      })
      if (res.success) {
        dispatch(accountAction.addUserListBanking(res.result))
        toast({
          status: "success",
          title: "Submit bank account successfully",
        })
        resetForm()
      } else {
        toast({
          status: "error",
          title: res.error.message,
        })
      }
    } catch (err: any) {
      console.log(err);
      checkIsTimeoutToken(err, router)
      toast({
        status: "error",
        title: err?.response?.data?.error?.message || "Something went wrong, please try again latter",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Box className='layout'>
      <form onSubmit={addBankSubmitHandler}>
        <Box maxW={"550px"} p={"10px 15px"} pb={"30px"} mx={"auto"}>
          <Box mt={"20px"} mb={"40px"}>
            <Text pt={"16px"} pb={"12.7px"} alignItems={'center'}
              color={"#e6e7ff"} fontSize={"22px"} fontWeight={500} textAlign={'center'}>
              {t("add_bank")}
            </Text>
          </Box>
          <Box mb={"30px"}>
            <label htmlFor="fullname">
              <Text className='text_vip' mb={"5px"} fontSize={14}>{t("display_name")}</Text>
            </label>
            <Input variant={"default"} name='displayName' id='fullname' fontSize={14} letterSpacing={"1px"} onChange={bankFormInput} value={addBankForm.displayName}/>
            {isError && <Text className='error'>{addBankErrorForm.displayName}</Text>}
          </Box>
          <Box mb={"30px"}>
            <Text className='text_vip' mb={"5px"} fontSize={14} textTransform={"uppercase"}>{t("bank")}</Text>
              <select className='default_select' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => selectBank(e.target.value)}>
                <option className='default_option' value={""}>{t("select_bank")}</option>
                {allListBank.map((bank, i) => (
                  <option key={i} className='default_option' value={bank.id}>
                    {bank.name} ({bank.shortName})
                  </option>
                ))}
              </select>
              {isError && <Text className='error'>{addBankErrorForm.currentBank}</Text>}
          </Box>
          <Box mb={"30px"}>
            <label htmlFor="bank-num">
              <Text className='text_vip' mb={"5px"} fontSize={14}>{t("account_number")}</Text>
            </label>
            <Input variant={"default"} name='accountNumber' id='bank-num' fontSize={14} letterSpacing={"1px"} pattern="[0-9]*" onChange={bankFormInput} value={addBankForm.accountNumber}/>
            {isError && <Text className='error'>{addBankErrorForm.bankNum}</Text>}
          </Box>
          <Box pt={"20px"}>
            <button className='login_btn' type='submit'>{isLoading ? <Spinner/> : "SUBMIT"}</button>
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default AddBank
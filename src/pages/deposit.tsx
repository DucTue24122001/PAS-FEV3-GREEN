import { Box, Flex, Input, Radio, RadioGroup, Text, useToast } from '@chakra-ui/react'
import React, { ChangeEvent, useEffect, useState } from 'react'
import httpClient from '../../http-client/httpClient'
import { checkIsTimeoutToken, getBase64 } from '../../util/function'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { Bank } from '../../util/type'

const Deposit = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [depositBankingList, setDepositBankingList] = useState<Bank[]>([])
  const [currentAgentBankSelect, setCurrentAgentBankSelect] = useState<Bank>()
  const [base64Img, setBase64Img] = useState<any>("")
  const router = useRouter()
  const toast = useToast()
  const {t} = useTranslation()
  console.log(base64Img);

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
        setDepositBankingList(depositInfo.agentBank)
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

  const imageInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {files}: any = e.target
    getBase64(files[0]).then((res: any) => {
      setBase64Img(res)
    }).catch(err => {
      setBase64Img("")
    });
  }

  const selectAgentDepositBank = (bankId: string) => {
    setCurrentAgentBankSelect(depositBankingList.find(bank => bank.id === +bankId))
  }

  return (
    <Box className='layout' pb={"50px"}>
      <form>
      <Box maxW={"550px"} p={"10px 15px"} pb={"30px"} mx={"auto"}>
        <Box mt={"20px"} mb={"40px"}>
          <Text pt={"16px"} pb={"12.7px"} alignItems={'center'}
            color={"#caffe1"} fontSize={"22px"} fontWeight={500} textAlign={'center'}>
            {t('deposit')}
          </Text>
        </Box>
        <Box mb={"30px"}>
          <label htmlFor="deposit">
            <Text className='text_vip' mb={"5px"} fontSize={14}>{t('deposit_amount')}</Text>
          </label>
          <Input variant={"default"} id='deposit' fontSize={14} letterSpacing={"1px"}/>
        </Box>
        <Box mb={"30px"}>
          <label>
            <Text className='text_vip' mb={"5px"} fontSize={14}>{t('real_deposit_amount')}</Text>
          </label>
          <Input variant={"default"} fontSize={14} letterSpacing={"1px"} disabled
            border={"1px solid white"} bg={"#073809"} color={"white"}/>
        </Box>
        <Box mb={"30px"}>
          <Text className='text_vip' mb={"5px"} fontSize={14}>{t("bank")}</Text>
          <select className='default_select' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => selectAgentDepositBank(e.target.value)}>
            <option className='default_option' value={""}>{t('select_bank')}</option>
            {depositBankingList.map((bank, i) => (
              <option key={i} className='default_option' value={bank.id}>
                {bank.bankShortName}
              </option>
            ))}
          </select>
        </Box>
        <Text color={"white"} mb={"40px"} lineHeight={"20px"} mt={"30px"} fontSize={"14px"}>
          {t('account_number')}: <span>{currentAgentBankSelect && currentAgentBankSelect.accountNumber}</span>
        </Text>
        <Box mb={"30px"}>
          <Text className='text_vip' mb={"5px"} fontSize={14}>{t('bankslip')}</Text>
          <Box bg={"white"} px={"20px"} pb={"10px"} borderRadius={'5px'}>
            <input type='file' accept={"image/*"} onChange={imageInputHandler}/>
          </Box>
        </Box>
        <Box mb={"30px"}>
          <Text className='text_vip' mb={"5px"} fontSize={14}>{t('bonus')}</Text>
          <Box px={"20px"} pb={"10px"} borderRadius={'5px'}>
            <RadioGroup defaultValue='1'>
              <Radio value='1'>
                <Text className='text_vip' fontSize={14}>{t('no_bonus')}</Text>
              </Radio>
            </RadioGroup>
          </Box>
        </Box>
        <Box p={"2%"}>
          <Box border={"solid 2px #1da95c"} p={"2%"}>
            <Text className='text_vip' mb={"5px"} fontSize={14}>{t('notice')}</Text>
            <Box p={"inherit"} color={"white"} fontSize={"11.2px"}>
              <Text>{`1) ${t('minimum_deposit_5000')} `}</Text>
              <Text>{`2) ${t('rate_deposit')} : 2.00 `}</Text>
            </Box>
          </Box>
        </Box>
        <Box px={"15px"} pt={"20px"}>
          <button className='login_btn' >{t('submit')}</button>
        </Box>
      </Box>
      </form>
    </Box>
  )
}

export default Deposit
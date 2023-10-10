import { Box, Input, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Withdraw = () => {
  const router = useRouter()
  const {t} = useTranslation()

  const selectUserWithdrawBank = (id: string) => {

  } 

  return (
    <Box className='layout' pb={"50px"}>
      <form>
        <Box maxW={"550px"} p={"10px 15px"} pb={"30px"} mx={"auto"}>
          <Box mt={"20px"} mb={"40px"}>
            <Text pt={"16px"} pb={"12.7px"} alignItems={'center'}
              color={"#caffe1"} fontSize={"22px"} fontWeight={500} textAlign={'center'}>
              {t('withdrawal')}
            </Text>
          </Box>
          <Box mb={"30px"}>
            <label htmlFor="withdraw">
              <Text className='text_vip' mb={"5px"} fontSize={14}>{t('withdrawal_amount')}</Text>
            </label>
            <Input variant={"default"} id='withdraw' fontSize={14} letterSpacing={"1px"}/>
          </Box>
          <Box mb={"30px"}>
            <label>
              <Text className='text_vip' mb={"5px"} fontSize={14}>{t('real_withdrawal_amount')}</Text>
            </label>
            <Input variant={"default"} fontSize={14} letterSpacing={"1px"} disabled
              border={"1px solid white"} bg={"#073809"} color={"white"}/>
          </Box>
          <Box mb={"30px"}>
            <Text className='text_vip' mb={"5px"} fontSize={14} textTransform={"uppercase"}>{t('bank')}</Text>
              <select className='default_select' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => selectUserWithdrawBank(e.target.value)}>
                <option className='default_option' value={""}>{t('select_bank')}</option>
                {/* {depositBankingList.map((bank, i) => (
                  <option key={i} className='default_option' value={bank.id}>
                    {bank.bankShortName}
                  </option>
                ))} */}
              </select>
          </Box>
          <Box pt={"20px"}>
            <button className='login_btn' onClick={() => router.push("/add-bank")} >{t('add_bank')}</button>
          </Box>
          <Box py={"2%"}>
            <Box border={"solid 2px #1da95c"} p={"2%"}>
              <Text className='text_vip' mb={"5px"} fontSize={14}>{t('notice')}</Text>
              <Box p={"inherit"} color={"white"} fontSize={"11.2px"}>
                <Text>{`1) ${t('minimum_withdrawal')} 2500`}</Text>
                <Text>{`2) ${t('rate_withdrawal')} : 2.00`}</Text>
                <Text>{`3) ${t('turnover_amount')}: 0.00`}</Text>
              </Box>
            </Box>
          </Box>
          <Box pt={"20px"}>
            <button className='login_btn' type='submit'>{t('submit')}</button>
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default Withdraw
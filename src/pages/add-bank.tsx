import { Box, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

const AddBank = () => {
  const {t} = useTranslation()

  const selectBank = (bank: string) => {

  }

  return (
    <Box pb={"120px"}>
    <Box className='layout'>
      <form>
        <Box maxW={"550px"} p={"10px 15px"} pb={"30px"} mx={"auto"}>
          <Box mt={"20px"} mb={"40px"}>
            <Text pt={"16px"} pb={"12.7px"} alignItems={'center'}
              color={"#caffe1"} fontSize={"22px"} fontWeight={500} textAlign={'center'}>
              {t('add_bank')}
            </Text>
          </Box>
          <Box mb={"30px"}>
            <label htmlFor="name">
              <Text className='text_vip' mb={"5px"} fontSize={14}>{t('full_name')}</Text>
            </label>
            <Input variant={"default"} id='name' fontSize={14} letterSpacing={"1px"}/>
          </Box>
          <Box mb={"30px"}>
            <Text className='text_vip' mb={"5px"} fontSize={14}>{t('bank')}</Text>
              <select className='default_select' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => selectBank(e.target.value)}>
                <option className='default_option' value={""}>{t('select_bank')}</option>
                {/* {depositBankingList.map((bank, i) => (
                  <option key={i} className='default_option' value={bank.id}>
                    {bank.bankShortName}
                  </option>
                ))} */}
              </select>
          </Box>
          <Box mb={"30px"}>
            <label htmlFor="bank-num">
              <Text className='text_vip' mb={"5px"} fontSize={14}>{t('bank_account_no')}.</Text>
            </label>
            <Input variant={"default"} id='bank-num' fontSize={14} letterSpacing={"1px"} pattern="[0-9]*"/>
          </Box>
          <Box pt={"20px"}>
            <button className='login_btn' type='submit'>{t('submit')}</button>
          </Box>
        </Box>
      </form>
    </Box>
    <Text fontSize={20} fontWeight={500} mt={"10px"} color={"#caffe1"} textAlign={'center'} mb={"15px"} textTransform={"uppercase"}>{t('history')}</Text>
    <Box pb={"15px"} borderBottom={"1px dotted #caffe1"}>
      <Box mb={"15px"}>
        <table className='add_bank_table'>
          <thead>
            <tr>
              <th>#</th>
              <th>{t('bank')}</th>
              <th>{t('account_bank')}</th>
              <th>{t('bank_holder')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
    </Box>
  )
}

export default AddBank
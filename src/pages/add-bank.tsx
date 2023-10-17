import { Box, Text, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import httpClient from '../../http-client/httpClient'
import { checkIsTimeoutToken } from '../../util/function'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { Respond } from '../../util/type'
import AddBankSection from '../../components/add-bank/AddBankSection'
import { useDispatch, useSelector } from 'react-redux'
import { accountAction } from '../../redux/account-slice'
import { RootState } from '../../redux/store'

const AddBank = () => {
  const {userListBanking} = useSelector((state: RootState) => state.account)
  const router = useRouter()
  const toast = useToast()
  const {t} = useTranslation()
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      try {
        const res: Respond = await httpClient.post("/services/app/bankTransaction/GetInfoBank", null, {
          params: {
            type: "withdraw"
          }
        })
        if(res.success) {
          dispatch(accountAction.setUserListBanking(res.result.playerBank))
        }
      } catch (err: any) {
        console.log(err);
        checkIsTimeoutToken(err, router)
        toast({
          status: "error",
          title: err?.response?.data?.error?.message || t('something_went_wrong'),
        })
      }
    })()
}, [])


  return (
    <Box pb={"120px"}>
      <AddBankSection/>
      <Text fontSize={20} fontWeight={500} mt={"10px"} color={"#caffe1"} textAlign={'center'} mb={"15px"}>HISTORY</Text>
      <Box pb={"15px"} borderBottom={"1px dotted #caffe1"}>
        <Box mb={"15px"} fontSize={[12,12,16,16]}>
          <table className='add_bank_table'>
            <thead>
              <tr>
                <th>#</th>
                <th>BANK</th>
                <th>ACCOUNT BANK</th>
                <th>DISPLAY NAME</th>
              </tr>
            </thead>
            <tbody>
              {userListBanking.map((bank, i) => (
                <tr key={i}>
                  <td>{bank.id}</td>
                  <td>{bank.bankName}</td>
                  <td>{bank.accountNumber}</td>
                  <td>{bank.displayName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Box>
    </Box>
  )
}

export default AddBank
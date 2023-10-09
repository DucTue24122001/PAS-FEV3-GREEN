import { Box, Input, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const Withdraw = () => {
  const router = useRouter()

  const selectUserWithdrawBank = (id: string) => {

  } 

  return (
    <Box className='layout' pb={"50px"}>
      <form>
        <Box maxW={"550px"} p={"10px 15px"} pb={"30px"} mx={"auto"}>
          <Box mt={"20px"} mb={"40px"}>
            <Text pt={"16px"} pb={"12.7px"} alignItems={'center'}
              color={"#caffe1"} fontSize={"22px"} fontWeight={500} textAlign={'center'}>
              WITHDRAWAL
            </Text>
          </Box>
          <Box mb={"30px"}>
            <label htmlFor="withdraw">
              <Text className='text_vip' mb={"5px"} fontSize={14}>Withdrawal Amount</Text>
            </label>
            <Input variant={"default"} id='withdraw' fontSize={14} letterSpacing={"1px"}/>
          </Box>
          <Box mb={"30px"}>
            <label>
              <Text className='text_vip' mb={"5px"} fontSize={14}>Real Withdrawal Amount</Text>
            </label>
            <Input variant={"default"} fontSize={14} letterSpacing={"1px"} disabled
              border={"1px solid white"} bg={"#073809"} color={"white"}/>
          </Box>
          <Box mb={"30px"}>
            <Text className='text_vip' mb={"5px"} fontSize={14}>BANK</Text>
              <select className='default_select' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => selectUserWithdrawBank(e.target.value)}>
                <option className='default_option' value={""}>Select Bank</option>
                {/* {depositBankingList.map((bank, i) => (
                  <option key={i} className='default_option' value={bank.id}>
                    {bank.bankShortName}
                  </option>
                ))} */}
              </select>
          </Box>
          <Box pt={"20px"}>
            <button className='login_btn' onClick={() => router.push("/add-bank")} >ADD BANK</button>
          </Box>
          <Box py={"2%"}>
            <Box border={"solid 2px #1da95c"} p={"2%"}>
              <Text className='text_vip' mb={"5px"} fontSize={14}>Notice</Text>
              <Box p={"inherit"} color={"white"} fontSize={"11.2px"}>
                <Text>{"1) Minimum withdrawal is 2500"}</Text>
                <Text>{"2) Rate Withdrawal : 2.00"}</Text>
                <Text>{"3) Turnover Amount: 0.00"}</Text>
              </Box>
            </Box>
          </Box>
          <Box pt={"20px"}>
            <button className='login_btn' type='submit'>SUBMIT</button>
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default Withdraw
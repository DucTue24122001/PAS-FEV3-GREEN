import { Box, Input, Text } from '@chakra-ui/react'
import React from 'react'

const AddBank = () => {

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
              Add Bank
            </Text>
          </Box>
          <Box mb={"30px"}>
            <label htmlFor="name">
              <Text className='text_vip' mb={"5px"} fontSize={14}>Fullname</Text>
            </label>
            <Input variant={"default"} id='name' fontSize={14} letterSpacing={"1px"}/>
          </Box>
          <Box mb={"30px"}>
            <Text className='text_vip' mb={"5px"} fontSize={14}>BANK</Text>
              <select className='default_select' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => selectBank(e.target.value)}>
                <option className='default_option' value={""}>Select Bank</option>
                {/* {depositBankingList.map((bank, i) => (
                  <option key={i} className='default_option' value={bank.id}>
                    {bank.bankShortName}
                  </option>
                ))} */}
              </select>
          </Box>
          <Box mb={"30px"}>
            <label htmlFor="bank-num">
              <Text className='text_vip' mb={"5px"} fontSize={14}>Bank Account No.</Text>
            </label>
            <Input variant={"default"} id='bank-num' fontSize={14} letterSpacing={"1px"} pattern="[0-9]*"/>
          </Box>
          <Box pt={"20px"}>
            <button className='login_btn' type='submit'>SUBMIT</button>
          </Box>
        </Box>
      </form>
    </Box>
    <Text fontSize={20} fontWeight={500} mt={"10px"} color={"#caffe1"} textAlign={'center'} mb={"15px"}>HISTORY</Text>
    <Box pb={"15px"} borderBottom={"1px dotted #caffe1"}>
      <Box mb={"15px"}>
        <table className='add_bank_table'>
          <thead>
            <tr>
              <th>#</th>
              <th>BANK</th>
              <th>ACCOUNT BANK</th>
              <th>BANK HOLDER</th>
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
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Record = () => {

  const selectRecordType = (type: string) => {

  }

  return (
    <Box borderBottom={"1px dotted #caffe1"} mb={"50px"}>
      <Box className='layout'>
        <Box maxW={"550px"} p={"10px 15px"} mx={"auto"}>
          <Box mt={"20px"} >
            <Text pb={"12.7px"} alignItems={'center'}
              color={"#caffe1"} fontSize={"22px"} fontWeight={500} textAlign={'center'}>
              RECORD
            </Text>
          </Box>
          <Box mb={"30px"}>
            <Text className='text_vip' mb={"5px"} fontSize={14}>BANK</Text>
            <select className='default_select' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => selectRecordType(e.target.value)}>
              <option className='default_option' value={RecordEnum.DEPOSIT}>Deposit</option>
              <option className='default_option' value={RecordEnum.WITHDRAW}>Withdraw</option>
            </select>
          </Box>
        </Box>
      </Box>
      <table className='record_table'>
        <thead >
          <tr>
            <th>Bank Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
          <tr>

          </tr>
        </thead>
      </table>
    </Box>
  )
}

export default Record

enum RecordEnum {
  DEPOSIT = "DEPOSIT",
  WITHDRAW = "WITHDRAW"
}
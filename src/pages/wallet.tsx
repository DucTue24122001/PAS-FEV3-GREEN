import React from 'react'
import UserInfoBar from '../../components/UserInfoBar'
import { Box } from '@chakra-ui/react'

const Wallet = () => {
  return (
    <>
      <UserInfoBar/>
      <Box px={"30px"} w={"100%"}>
        <Box pb={"15px"} borderBottom={"1px dotted #caffe1"} fontSize={"14px"} pt={"10px"}>
          <Box sx={profileBtn}>
            Deposit
          </Box>
          <Box sx={profileBtn}>
            Withdrawal
          </Box>
          <Box sx={profileBtn}>
            Transaction Record
          </Box>
          <Box sx={profileBtn}>
            Bank Account
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Wallet

const profileBtn = {
  textAlign:'center',
  mt:"15px",
  borderRadius:"5px",
  bgGradient:"linear(#023f20, #002009, #000701)",
  border:"1px groove #108e4291",
  fontWeight:"bold",
  h:"36px",
  lineHeight:"36px",
  color:"#fff",
  textTransform:"uppercase",
  cursor:"pointer",
  transition: ".3s",
  _hover:{boxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)"}
}
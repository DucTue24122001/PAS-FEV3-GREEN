import { Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import UserInfoBar from '../../components/UserInfoBar'
import ClientService from '../../http-client/ClientService';
import { useRouter } from 'next/router';

const Profile = () => {
  const router = useRouter()

  const logoutHandler = () => {
    ClientService.logout();
    router.push("/");
  };

  return (
    <>
      <UserInfoBar/>
      <Box px={"30px"} w={"100%"}>
        <Text fontSize={"20px"} fontWeight={500} color={"#caffe1"} textAlign={'center'} my={"10px"}>
          Profile
        </Text>
        <Box pb={"15px"} borderBottom={"1px dotted #caffe1"} fontSize={"14px"}>
          <Box sx={profileBtn}
            onClick={() => router.push("/change-password")}>
            Change password
          </Box>
          <Box sx={profileBtn} onClick={logoutHandler}>
            Logout
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Profile

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
import { Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import UserInfoBar from '../../components/UserInfoBar'
import ClientService from '../../http-client/ClientService';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const router = useRouter()
  const {t} = useTranslation()

  const logoutHandler = () => {
    ClientService.logout();
    router.push("/");
  };

  return (
    <>
      <UserInfoBar/>
      <Box px={"30px"} w={"100%"}>
        <Text fontSize={"20px"} fontWeight={500} color={"#e6e7ff"} textAlign={'center'} my={"10px"}>
          {t("profile")}
        </Text>
        <Box pb={"15px"} borderBottom={"1px dotted #e6e7ff"} fontSize={"14px"}>
          <Box sx={profileBtn}
            onClick={() => router.push("/personal")}>
            {t("personal_info")}
          </Box>
          <Box sx={profileBtn}
            onClick={() => router.push("/change-password")}>
            {t("change_password")}
          </Box>
          <Box sx={profileBtn}
            onClick={() => router.push("/inbox")}>
            {t("inbox")}
          </Box>
          <Box sx={profileBtn} onClick={logoutHandler}>
            {t('logout')}
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
  bgGradient:"linear(#000ebe, #000870, #000321)",
  border:"1px groove #0e20ff",
  fontWeight:"bold",
  h:"36px",
  lineHeight:"36px",
  color:"#fff",
  textTransform:"uppercase",
  cursor:"pointer",
  transition: ".3s",
  _hover:{boxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)"}
}
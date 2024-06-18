/* eslint-disable react/no-unescaped-entities */
import { Box, Center, Flex, Image, Link, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import maintainImg from "../public/images/website-maintenance.png"
import { useDispatch, useSelector } from 'react-redux'
import { FaTelegramPlane, FaViber } from 'react-icons/fa'
import { BsFacebook, BsLine, BsMessenger, BsTwitter } from 'react-icons/bs'
import { FiInstagram, FiMail } from 'react-icons/fi'
import { useTenancy } from '../hook/TenancyProvider'
import httpClient from '../http-client/httpClient'
import { RootState } from '../redux/store'
import { ContentSettingType, Respond } from '../util/type'
import { clientAction } from '../redux/client-slice'
import { ContentSettingEnum } from '../util/enum'
import { colors } from './chakra-ui/colors'

const Maintenance = () => {
  const tenancy = useTenancy()
  const dispatch = useDispatch()
  const {contactListInfo} = useSelector((state : RootState) => state.client)

  useEffect(() => {
    if(tenancy) {
      (async () => {
        try {
          const res: Respond = await httpClient.post("/services/app/ContentSetting/GetAllContentSetting", {
            tenancyName: tenancy?.tenancyName,
          })
          if(res.result) {
            dispatch(clientAction.setContactListInfo(res.result.filter((item: ContentSettingType) => item.category === ContentSettingEnum.CONTACT)))
            dispatch(clientAction.setSocialListInfo(res.result.filter((item: ContentSettingType) => item.category === ContentSettingEnum.SOCIAL)))
          }
        } catch (err) {
          console.log(err);
        }
      })()
    }
  }, [tenancy])

  return (
    <Center py={["0","0","15vh","15vh"]} height={"100vh"}>
      <Center bgColor={"#fff"} w={"100%"} minH={["100%","100%","fit-content","fit-content"]} flexDir={'column'} maxW={["100%","100%","1000px","1200px"]}>
        <Flex padding={"30px"}>
          <Center flexDir={'column'} >
            <Text fontSize={[24,24,30,36]} fontWeight={700} w={"400px"} textAlign={'center'} mb={"20px"}>
              The site is currently down for maintainance
            </Text>
            <Text>We apologize for any inconveniences caused.</Text>
            <Text>We've almost done</Text>
          </Center>
          <Image alt='maintain' src={maintainImg.src} maxW={"700px"} display={["none","none","none","block"]}/>
        </Flex>
        <Center alignItems={'center'} py={"15px"} borderTop={["none","none","1px solid #d9dee4","1px solid #d9dee4"]} w={"100%"} gap={"10px"}>
          <Text>You can contact us:</Text>
          {contactListInfo.map((info: ContentSettingType, i) => (
            <Link target='_blank' href={info.link} key={i} fontSize={"16px"} color={"#fff"}>
              {setContactSocialImage(info.name.toLowerCase())}
            </Link>
          ))}
        </Center>
      </Center>
    </Center>
  )
}

export default Maintenance

const setContactSocialImage = (name: string) => {
  switch (name) {
    case SocialContactEnum.TELEGRAM:
      return (
        <Box sx={footerIcon} bgColor={colors.telegram}>
          <FaTelegramPlane />
        </Box>
      );
    case SocialContactEnum.VIBER:
      return (
        <Box sx={footerIcon} bgColor={colors.viber}>
          <FaViber />
        </Box>
      );
    case SocialContactEnum.LINE:
      return (
        <Box sx={footerIcon} bgColor={colors.line}>
          <BsLine />
        </Box>
      );
    case SocialContactEnum.FACEBOOK:
      return (
        <Box sx={footerIcon} bgColor={colors.fb}>
          <BsFacebook />
        </Box>
      );
    case SocialContactEnum.INSTAGRAM:
      return (
        <Box sx={footerIcon} bgColor={colors.insta}>
          <FiInstagram />
        </Box>
      );
    case SocialContactEnum.MAIL:
      return (
        <Box sx={footerIcon} bgColor={colors.mail}>
          <FiMail />
        </Box>
      );
    case SocialContactEnum.MESSENGER:
      return (
        <Box sx={footerIcon} bgColor={colors.messenger}>
          <BsMessenger />
        </Box>
      );
    case SocialContactEnum.TWITTER:
      return (
        <Box sx={footerIcon} bgColor={colors.twitter}>
          <BsTwitter />
        </Box>
      );
    default:
      return <></>;
  }
};


enum SocialContactEnum {
  TELEGRAM = "telegram",
  VIBER = "viber",
  LINE="line",
  FACEBOOK = "facebook",
  MESSENGER = "messenger",
  TWITTER = "twitter",
  MAIL = "mail",
  INSTAGRAM = "instagram",
}


const footerIcon = {
  p: 2,
  borderRadius: "50%",
  cursor: "pointer",
};

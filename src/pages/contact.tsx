import { Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import fb_icon from "../../public/images/fb-icon.png";
import tele_icon from "../../public/images/telegram-icon.png";
import line_icon from "../../public/images/line_logo.png";
import insta_icon from "../../public/images/insta_logo.webp";
import mess_icon from "../../public/images/mess_logo.png";
import mail_icon from "../../public/images/mail_logo.png";
import twitter_icon from "../../public/images/twitter_ico.png";
import viber_icon from "../../public/images/contact_viber-icon.png";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Contact = () => {
  const {contactListInfo, socialListInfo} = useSelector((state: RootState) => state.client)
  console.log(contactListInfo, socialListInfo);
  

  const detectIco = (name: string) => {
    switch (name.toLowerCase()) {
      case "telegram":
        return tele_icon.src
      case "line":
        return line_icon.src
      case "viber":
        return viber_icon.src
      case "facebook":
        return fb_icon.src
      case "instagram":
        return insta_icon.src
      case "twitter":
        return twitter_icon.src
      case "mail":
        return mail_icon.src
      case "messenger":
        return mess_icon.src
      default:
        return ""
    }
  }

  return (
    <Flex bg={"linear-gradient(90deg, #000a83 , #0011e6, #3544ff, #000a83 , #0011e6, #3544ff, #000a83 , #0011e6, #3544ff );"} m={["10px","10px","10px","0px"]}
      mb={"80px"}>
    <Flex bg={"#000435"} padding={"1px"} w={"100%"} margin={"1px 1px"} flexDir={"column"} border={"1px solid #0a502b"}>
      {socialListInfo.concat(contactListInfo).map((item, i) => (
        <Link key={i} padding={"20px"} href={item.link}>
          <Flex>
            <Image w={"60px"} h={"52px"} src={detectIco(item.name)} alt={item.content} objectFit={"contain"} />
            <Flex flexDir={"column"} ml={5}>
              <Text color={"#fff"}>{item.name}</Text>
              <Text color={"#fff"}>{item.content}</Text>
            </Flex>
          </Flex>
        </Link>
      ))}
    </Flex>
    </Flex>
  );
};

export default Contact;

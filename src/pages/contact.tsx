import { Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import fb_icon from "../../public/images/fb-icon.png";
import tele_icon from "../../public/images/telegram-icon.png";
import viber_icon from "../../public/images/contact_viber-icon.png";

const Contact = () => {
  return (
    <Flex bg={"linear-gradient(90deg, #000a83 , #0011e6, #3544ff, #000a83 , #0011e6, #3544ff, #000a83 , #0011e6, #3544ff );"} m={["10px","10px","10px","0px"]}>

    <Flex bg={"#000435"} padding={"1px"} w={"100%"} margin={"1px 1px"} flexDir={"column"} border={"1px solid #0a502b"}>
      {contactDummy.map((item, i) => (
        <Link key={i} padding={"20px"} href={item.link}>
          <Flex>
            <Image w={"60px"} h={"52px"} src={item.img} alt={item.title} objectFit={"contain"} />
            <Flex flexDir={"column"} ml={5}>
              <Text color={"#fff"}>{item.name_contact}</Text>
              <Text color={"#fff"}>{item.title}</Text>
            </Flex>
          </Flex>
        </Link>
      ))}
    </Flex>
    </Flex>
  );
};

export default Contact;

const contactDummy = [
  {
    img: fb_icon.src,
    name_contact: "Facebook",
    title: "Lucky Myanmar",
    link: "https://www.facebook.com/yellowflashfalcon/",
  },
  {
    img: tele_icon.src,
    name_contact: "Telegram",
    title: "09-664047739",
    link: "https://t.me/LuckyMyanmar",
  },
  {
    img: viber_icon.src,
    name_contact: "Viber",
    title: "09-664047739",
    link: "#",
  },
];

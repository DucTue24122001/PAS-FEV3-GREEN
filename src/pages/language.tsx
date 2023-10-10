import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import my from "../../public/images/lang2-myanmar.png"
import en from "../../public/images/lang2-uk.png"
import { useTranslation } from "react-i18next";


const languages = [
    { code: "en", nameLocale: "English | ภาษาอังกฤษ", img:en.src },
    { code: "my", nameLocale: "Myanmar | မြန်မာ", img:my.src },
  ];
const Language = () => {
    const { t, i18n } = useTranslation();
    const handleClickLanguage = (i18n:any ,code:any) => {
        i18n.changeLanguage(code)
        window.localStorage.setItem("MY_LANGUAGE", code);
    }

  return (
    <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} mt={10}>
      <Flex w={"1250px"} flexDir={"column"} alignItems={"center"} p={["0 20px","0 20px","0 40px","0"]}>
        <Text
          color={"#fff"}
          textAlign={"center"}
          height={"35px"}
          lineHeight={"35px"}
          w={"100%"}
          bg={"linear-gradient(#011b0e, #040f07, #020103)"}
          fontSize={"14px"}
          fontWeight={500}
        >
          {t('region_and_language')}
        </Text>
        {
            languages.map((language, i) => (
                <Flex key={i} onClick={() => handleClickLanguage(i18n,language.code)} w={"100%"} borderBottom={"1px solid #eee"} p={"20px 15px"} letterSpacing={"0.5px"} textShadow={"0 0 2px #06cd"} alignItems={"center"} cursor={"pointer"} _hover={{color:"#f363f4"}}>
                    <Image w={"40px"} h={"40px"} src={language.img} alt={language.nameLocale} objectFit={"contain"} />
                    <Text ml={5} color={"#fff"} >{language.nameLocale}</Text>
                </Flex>
            ))
        }
      </Flex>
    </Flex>
  );
};

export default Language;

import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { clientAction } from "../../redux/client-slice";
import { RootState } from "../../redux/store";

const Language = () => {
    const {languageList} = useSelector((state: RootState) => state.client)
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()

    const handleClickLanguage = (i18n:any ,code:any) => {
      dispatch(clientAction.setLanguage(code))
      i18n.changeLanguage(code)
      window.localStorage.setItem("MY_LANGUAGE", code);
    }

  return (
    <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} mt={10}>
      <Flex w={"1250px"} flexDir={"column"} alignItems={"center"} p={["0 20px","0 20px","0 40px","0"]}>
        <Text
          color={"#fff"}>
          {t('select_language')}
        </Text>
        {
          languageList.map((language, i) => (
            <Flex key={i} onClick={() => handleClickLanguage(i18n,language)} w={"100%"} borderBottom={"1px solid #eee"} p={"20px 15px"} letterSpacing={"0.5px"} textShadow={"0 0 2px #06cd"} alignItems={"center"} cursor={"pointer"} _hover={{color:"#f363f4"}}>
              <Image w={"40px"} h={"40px"} src={`/images/${language.toLowerCase()}.png`} alt={language} objectFit={"contain"} />
              <Text ml={5} color={"#fff"} >{t(language)}</Text>
            </Flex>
          ))
        }
      </Flex>
    </Flex>
  );
};

export default Language;

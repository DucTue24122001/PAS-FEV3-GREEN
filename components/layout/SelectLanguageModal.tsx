import {
  Box,
  Center,
  Flex,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next'
import { clientAction } from "../../redux/client-slice";
import { RootState } from "../../redux/store";

const SelectLanguageModal = () => {
  const { isShowLanguageModal, languageList } = useSelector(
    (state: RootState) => state.client
  );

  const dispatch = useDispatch();
  const changeLanguage = (i18n: any, language: string) => {
    window.localStorage.setItem("MY_LANGUAGE", language);
    i18n.changeLanguage(language);
    dispatch(clientAction.setLanguage(language))
    dispatch(clientAction.handleShowLanguageModal(false))
  };
  const { t, i18n } = useTranslation();

  return (
    <Modal
      isOpen={isShowLanguageModal}
      onClose={() => dispatch(clientAction.handleShowLanguageModal(false))}
      isCentered
      size={["full", "full", "md", "md"]}
    >
      <ModalOverlay />
      <ModalContent p={"30px"}>
        <ModalCloseButton />
        <Center flexDir={"column"}>
          <Box fontSize={"19px"} fontWeight={600}>
            <Text>{t('select_language')}</Text>
          </Box>
          {languageList.map((language, i) => (
            <Flex key={i}
              py={"10px"}
              flexDir={"column"}
              gap={"16px"}
              alignSelf={"flex-start"}
              borderBottom={"1px solid #d9dee4"}
              w={"100%"}
              fontSize={"16px"}
              onClick={() => changeLanguage(i18n, language)}
            >
              <Text>{t(language)}</Text>
              <Flex alignItems={"center"}>
                <Image
                  alt={language}
                  src={`/images/${language.toLowerCase()}.png`}
                  w={"40px"} h={"40px"}
                  mr={"30px"}
                  borderRadius={"3px"}
                />
                <Text cursor={"pointer"}>{t(language)}</Text>
              </Flex>
            </Flex>
          ))}
        </Center>
      </ModalContent>
    </Modal>
  );
};

export default SelectLanguageModal;

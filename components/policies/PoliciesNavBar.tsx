import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { RootState } from "../../redux/store";

const PoliciesNavBar = ({ ...props }) => {
  const { currentPolicies } = useSelector((state: RootState) => state.client);
  const router = useRouter();
  const { t } = useTranslation()

  return (
    <Flex
      h={"50px"}
      display={["flex", "flex", "none", "none"]}
      mb={"10px"}
      alignItems={"center"}
      fontSize={"14px"}
      fontWeight={"bold"}
      overflow={"auto"}
      {...props}
    >
      <Box
        px={5}
        minW={"fit-content"}
        fontSize={14}
        onClick={() => router.push('/policies/terms')}
        textTransform={"uppercase"}
        color={
          currentPolicies === "terms"
            ? "#caffe1" : "white"
        }
      >
        {t('terms_and_condition')}
      </Box>
      <Box
        px={5}
        minW={"fit-content"}
        fontSize={14}
        onClick={() => router.push('/policies/privacy')}
        textTransform={"uppercase"}
        color={
          currentPolicies === 'privacy'
            ? "#caffe1" : "white"
        }
      >
        {t('privacy_policy')}
      </Box>
      <Box
        px={5}
        minW={"fit-content"}
        fontSize={14}
        onClick={() => router.push('/policies/disconnect')}
        textTransform={"uppercase"}
        color={
          currentPolicies === "disconnect"
            ? "#caffe1" : "white"
        }
      >
       {t('disconnection_policy')}
      </Box>
    </Flex>
  );
};

export default PoliciesNavBar;

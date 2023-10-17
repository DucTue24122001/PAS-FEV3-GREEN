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
      bgColor={"#f2f5f9"}
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
            ? "#caffe1" : "#303030"
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
            ? "#caffe1" : "#303030"
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
            ? "#caffe1" : "#303030"
        }
      >
       {t('disconnection_policy')}
      </Box>
    </Flex>
  );
};

export default PoliciesNavBar;

import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { RootState } from "../../redux/store";
import PoliciesNavBar from "./PoliciesNavBar";

const PoliciesLayout = ({ children }: any) => {
  const router = useRouter();
  const { currentPolicies } = useSelector((state: RootState) => state.client);
  const { t } = useTranslation();

  return (
    <Flex
      minH={"90vh"}
      alignItems={"center"}
      py={["0px", "0px", "20px", "20px"]}
      flexDir={"column"}
    >
      <PoliciesNavBar alignSelf={"flex-start"} w={"100%"} />
      <Flex w={["100%","100%","100%", "100%", "100%","1500px"]} gap={["20px", "20px", "60px", "60px"]} flexDir={"column"} pb={10} px={2}>
        <Flex h={"fit-content"} display={["none", "none", "flex", "flex"]}>
        <Box
            px={"16px"}
            py={"15px"}
            borderRight={`1px solid #c6c6c6`}
            onClick={() => router.push("/policies/terms")}
            cursor={"pointer"}
            transition={".3s"}
            _hover={{ bgColor: "#abb1ff" }}
          >
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"14px"}
              color={
                currentPolicies === "terms" ? "#4956ff" : "white"
              }
            >
              {t("terms_and_condition")}
            </Text>
          </Box>
          <Box
            px={"16px"}
            py={"15px"}
            borderRight={`1px solid #c6c6c6`}
            onClick={() => router.push("/policies/privacy")}
            cursor={"pointer"}
            transition={".3s"}
            _hover={{ bgColor: "#abb1ff" }}
          >
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"14px"}
              color={
                currentPolicies === "privacy"
                  ? "#4956ff" : "white"
              }
            >
              {t("privacy_policy")}
            </Text>
          </Box>  
          <Box
            px={"16px"}
            py={"15px"}
            borderRight={`1px solid #c6c6c6`}
            onClick={() => router.push("/policies/disconnect")}
            cursor={"pointer"}
            transition={".3s"}
            _hover={{ bgColor: "#abb1ff" }}
          >
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"14px"}
              color={
                currentPolicies === "disconnect"
                  ? "#4956ff" : "white"
              }
            >
              {t("disconnection_policy")}
            </Text>
          </Box>
        </Flex>
        {children}
      </Flex>
    </Flex>
  );
};

export default PoliciesLayout;

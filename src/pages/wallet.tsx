import React from "react";
import UserInfoBar from "../../components/UserInfoBar";
import { Box } from "@chakra-ui/react";
import ClientService from "../../http-client/ClientService";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Wallet = () => {
  const isAuth = ClientService.isAuthenticated();
  const router = useRouter();
  const { t } = useTranslation();

  const navigateHandler = (url: string) => {
    if (isAuth) {
      router.push(url);
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <UserInfoBar />
      <Box px={"30px"} w={"100%"}>
        <Box
          pb={"15px"}
          borderBottom={"1px dotted #e6e7ff"}
          fontSize={"14px"}
          pt={"10px"}
        >
          <Box sx={profileBtn} onClick={() => navigateHandler("/deposit")}>
            {t("deposit")}
          </Box>
          <Box sx={profileBtn} onClick={() => navigateHandler("/withdraw")}>
            {t("withdraw")}
          </Box>
          <Box sx={profileBtn} onClick={() => navigateHandler("/record")}>
            {t("records")}
          </Box>
          <Box sx={profileBtn} onClick={() => navigateHandler("/add-bank")}>
            {t("bank_account")}
          </Box>
          <Box sx={profileBtn} onClick={() => navigateHandler("/report")}>
            {t("transaction_report")}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Wallet;

const profileBtn = {
  textAlign: "center",
  mt: "15px",
  borderRadius: "5px",
  bgGradient: "linear(#000ebe, #000870, #000321)",
  border: "1px groove #0e20ff",
  fontWeight: "bold",
  h: "36px",
  lineHeight: "36px",
  color: "#fff",
  textTransform: "uppercase",
  cursor: "pointer",
  transition: ".3s",
  _hover: {
    boxShadow:
      "0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)",
  },
};

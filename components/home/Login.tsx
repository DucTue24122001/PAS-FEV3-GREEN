import { Box, Flex, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import UserInfoBar from "../UserInfoBar";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { checkToken } = useSelector((state: RootState) => state.account);
  const [token, setToken] = useState<any>(null)
  const {t} = useTranslation()
  useEffect(() => {
    if (typeof window !== undefined) {
      const tokenLocal = localStorage.getItem('token')
      setToken(tokenLocal)
    }
  })
  return (
    <>
      {token === null ? (
        <Link href="/login">
          <Flex
            justifyContent={"center"}
            textTransform={"uppercase"}
            cursor={"pointer"}
            w={"100%"}
            maxH={"45px"}
            lineHeight={"45px"}
            color={"#fff"}
            fontSize={"13px"}
            fontWeight={600}
            boxShadow={"0 2px 4px #0007"}
            bg={"linear-gradient(180deg, #012610 15%, #010701 60%, #000000);"}
            transition={".2 ease-in-out"}
          >
            {t('login')}
          </Flex>
        </Link>
      ) : (
        <UserInfoBar />
      )}
    </>
  );
};

export default Login;

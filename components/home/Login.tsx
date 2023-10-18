import { Center, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UserInfoBar from "../UserInfoBar";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Login = () => {
  const [token, setToken] = useState<any>(null)
  const router = useRouter()
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
            bg={"linear-gradient(180deg, #000dab 15%, #010701 60%, #000000);"}
            transition={".2 ease-in-out"}>
            <Center w={"50%"} borderRight={"1px solid #0013f9"}
              onClick={() => router.push("/login")}>
              {t('login')}
            </Center>
            <Center w={"50%"}
              onClick={() => router.push("/register")}>
              {t('register')}
            </Center>
          </Flex>
      ) : (
        <UserInfoBar />
      )}
    </>
  );
};

export default Login;

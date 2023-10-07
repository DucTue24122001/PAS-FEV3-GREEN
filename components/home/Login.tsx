import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
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
        Login
      </Flex>
    </Link>
  );
};

export default Login;

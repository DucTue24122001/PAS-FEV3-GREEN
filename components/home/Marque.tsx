import { Flex } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <Flex h={"30px"} lineHeight={"30px"} w={"100%"}>
      <Marquee speed={40} style={{color:"#f5ffe1", fontSize:"13px"}}>
        Luckymyanmar club online game ,You can open an account with just a
        deposit of at least 5000 kyats. You can customize the deposit and
        withdrawal.
      </Marquee>
    </Flex>
  );
};

export default Marque;

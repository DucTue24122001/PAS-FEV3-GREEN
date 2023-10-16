import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import GameLive from "../../../components/home/CategoryGame/GameLive";
import GameType from "../../../components/home/CategoryGame/GameType";
import { useRouter } from "next/router";
import HomeSlider from "../../../components/home/HomeSlider";
import Login from "../../../components/home/Login";
import Marque from "../../../components/home/Marque";
import CategoryGame from "../../../components/home/CategoryGame/CategoryGame";

const Page = () => {
  const router = useRouter();
  const  pages : any = router.query.page;

  

  const checkCategory = () => {
    switch (pages) {
      case "LIVEARENA":
        return false;
      case "LIVE":
        return false;
      case "SPORTS":
        return false;
      case "LOTTERY":
        return false;
      case "FH":
        return true;
      case "SLOT":
        return true;
      case "ARCADE":
        return true;
      case "RNGTABLE":
        return true;
      default:
        return <></>;
    }
  };

  return (
    <>
      <Flex flexDir={"column"}>
        <HomeSlider />
        <Login />
        <Marque />
        <CategoryGame />
        <Flex >

        {checkCategory() !== true ? (
          <GameLive/>
        ) : (
          <GameType/>
        )}
        </Flex>
      </Flex>
    </>
  );
};

export default Page;

import React, { useEffect, useState } from "react";

import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import httpClient from "../../../http-client/httpClient";
import { useTenancy } from "../../../hook/TenancyProvider";
import { useDispatch, useSelector } from "react-redux";
import { accountAction } from "../../../redux/account-slice";
import { RootState } from "../../../redux/store";
import SportIcon from "../../../public/nav-svg/SPORTS.svg";
import CasinoIcon from "../../../public/nav-svg/LIVE.svg";
import SlotIcon from "../../../public/nav-svg/SLOT.svg";
import FishingIcon from "../../../public/nav-svg/FH.svg";
import LotteryIcon from "../../../public/nav-svg/LOTTERY.svg";
import ArcadeIcon from "../../../public/nav-svg/ARCADE.svg";
import TableIcon from "../../../public/nav-svg/RNGTABLE.svg";
import Livearena from "../../../public/nav-svg/LIVEARENA.svg";
import { useRouter } from "next/router";

const CategoryGame = () => {
  const { categoryData }: any = useSelector(
    (state: RootState) => state.account
    );
  const [pos, setPos] = useState<any>(0);
  const dispatch = useDispatch();
  const tenancy = useTenancy();
  const router = useRouter()
  const [gametype, setGametype] = useState("")
  const handleClickCategory = (i: any, gametype:any) => {
    setPos(i);
    setGametype(gametype)
    localStorage.setItem("NAV_NAME", gametype)
    router.push(`/category/${gametype}`)
  };
  
  
  useEffect(() => {
    (async () => {
      try {
        const res: any = await httpClient.post(`/MPS/ByGameTypeAndPlatform`, {
          platform: "",
          gametype: "",
          tenancyName: tenancy?.tenancyName,
        });
        dispatch(accountAction.setCategoryData(res.result));
        setGametype(res.result.gameType[0].game_type)
        
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  function getIconFromGameType(gameType:any) {
    switch (gameType) {
      case "SPORTS": {
        return (
          <SportIcon
            width={["20","50","50","100"]}
            height={["44","88","88","88"]}
            viewBox="0 0 32 32"
            fill={"#44e42e"}
          />
        );
      }
      case "LIVE": {
        return (
          <CasinoIcon
          width={["20","50","50","100"]}
          height={["44","88","88","88"]}
            viewBox="0 0 32 32"
            fill={"#44e42e"}
          />
        );
      }
      case "SLOT": {
        return (
          <SlotIcon
          width={["20","50","50","100"]}
          height={["44","88","88","88"]}
            viewBox="0 0 32 32"
            fill={"#44e42e"}
          />
        );
      }
      case "FH": {
        return (
          <FishingIcon
          width={["20","50","50","100"]}
          height={["44","88","88","88"]}
            viewBox="0 0 32 32"
            fill={"#44e42e"}
          />
        );
      }
      case "LOTTERY": {
        return (
          <LotteryIcon
          width={["20","50","50","100"]}
          height={["44","88","88","88"]}
            viewBox="0 0 32 32"
            fill={"#44e42e"}
          />
        );
      }
      case "ARCADE": {
        return (
          <ArcadeIcon
          width={["20","50","50","100"]}
          height={["44","88","88","88"]}
            viewBox="0 0 32 32"
            fill={"#44e42e"}
          />
        );
      }
      case "RNGTABLE": {
        return (
          <TableIcon
          width={["20","50","50","100"]}
          height={["44","88","88","88"]}
            viewBox="0 0 32 32"
            fill={"#44e42e"}
          />
        );
      }
      case "LIVEARENA": {
        return (
          <Livearena
          width={["20","20","20","100"]}
            height={["44","44","44","88"]}
            viewBox="0 0 32 32"
            fill={"#44e42e"}
          />
        );
      }
      default: {
        return <></>;
      }
    }
  }
  
  

  
  return (
    <Flex w={"100%"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} >
      <Flex w={"100%"} justifyContent={"center"} alignItems={"center"} bg={"linear-gradient(180deg, #061b10 25%, #00110a 65%, #000000);"}>

      <Grid w={"1024px"} templateColumns={"repeat(8, 1fr)"} overflowX={["scroll","scroll","scroll","unset"]} gap={0}>
        {categoryData?.gameType?.map((item: any, i: any) => (
          <Flex
            key={i}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            bg={
              router.query.page !== item.game_type
                ? "linear-gradient(180deg, #061b10 25%, #00110a 65%, #000000);"
                : "linear-gradient(180deg, #0b2d1b 25%, #012616 65%, #000802)"
            }
            p={"5px 0"}
            display={"inline-block"}
            textAlign={"center"}
            cursor={"pointer"}
            border={router !== item.game_type ? "1px solid #03110a" : "1px solid #0a502b"}
            transition={"all 0.3 ease-out"}
            onClick={() => handleClickCategory(i, item.game_type)}
            w={["80px","100px","100px","auto"]}
          >
            <Flex justifyContent={"center"} alignItems={"center"} 
              p={"20px 20px"}
            >
              {getIconFromGameType(item.game_type)}
            </Flex>
            <Text
              color={"#fff"}
              textTransform={"uppercase"}
              display={"block"}
              fontSize={"12px"}
              fontWeight={400}
              textShadow={"0 0 4px #00d741"}
            >
              {item.game_type_name}
            </Text>
          </Flex>
        ))}
      </Grid>
      </Flex>
      {/* {checkCategory() !== true ? <GameLive gametype={gametype} /> : <GameType gametype={gametype}/> } */}
    </Flex>
  );
};

export default CategoryGame;

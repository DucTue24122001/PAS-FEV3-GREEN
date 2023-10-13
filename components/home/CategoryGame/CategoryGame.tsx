import React, { useEffect, useState } from "react";
import liveIcon from "../../../public/images/Live-icon.png";
import slotIcon from "../../../public/images/Slot-icon.png";
import sportsIcon from "../../../public/images/Sport-icon.png";
import fishingIcon from "../../../public/images/Fish-icon.png";
import cookIcon from "../../../public/images/Cockfight-icon.png";

import Sexy from "../../../public/images/lm-sexy.png";
import Dream from "../../../public/images/dream-gaming.png";
import Gaming from "../../../public/images/gaming.png";
import Casino from "../../../public/images/casino.png";
import Sbobet from "../../../public/images/sbobet-casino.png";
import Evulation from "../../../public/images/evolution-gaming.png";

import jiliSlot from "../../../public/images/jili_slot.png";
import kaSlot from "../../../public/images/ka_slot.png";
import fcSlot from "../../../public/images/fc_slot.png";
import egameSlot from "../../../public/images/egame_slot.png";
import jokerSlot from "../../../public/images/joker_slot.png";
import kingmakerSlot from "../../../public/images/kingmaker-slot.png";
import pragmaticSlot from "../../../public/images/pragmaticPlay-slot.png";
import spadeSlot from "../../../public/images/SpadeGaming-slot.png";
import jdbSlot from "../../../public/images/jdb-slot.png";
import wmSlot from "../../../public/images/WorldMatch-slot.png";
import yggSlot from "../../../public/images/Ygg-slot.png";
import cq9Slot from "../../../public/images/CQ9-slot.png";
import redtigerSlot from "../../../public/images/RedTiger-slot.png";
import rtgSlot from "../../../public/images/RTG-slot.png";
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
import { colors } from "../../chakra-ui/colors";

const CategoryGame = () => {
  const [pos, setPos] = useState<any>(0);
  const [data, setData] = useState(categoryDummy[0].item);
  const [title, setTitle] = useState(categoryDummy[0].name);
  const dispatch = useDispatch();
  const handleClick = (i: any, item: any, name: any) => {
    setPos(i);
    setData(item);
    setTitle(name);
  };
  const tenancy = useTenancy();
  const { categoryData }: any = useSelector(
    (state: RootState) => state.account
  );
  console.log(categoryData);

  useEffect(() => {
    (async () => {
      try {
        const res: any = await httpClient.post(`/MPS/ByGameTypeAndPlatform`, {
          platform: "",
          gametype: "",
          tenancyName: tenancy?.tenancyName,
        });
        dispatch(accountAction.setCategoryData(res.result));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  function getIconFromGameType(gameType: any) {
    switch (gameType) {
      case "SPORTS": {
        return (
          <SportIcon
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill={
              gameType
                ? tenancy?.mainColor || colors.global
                : "rgba(255, 255, 255, 0.7)"
            }
          />
        );
      }
      case "LIVE": {
        return (
          <CasinoIcon
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill={
              gameType
                ? tenancy?.mainColor || colors.global
                : "rgba(255, 255, 255, 0.7)"
            }
          />
        );
      }
      case "SLOT": {
        return (
          <SlotIcon
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill={
              gameType
                ? tenancy?.mainColor || colors.global
                : "rgba(255, 255, 255, 0.7)"
            }
          />
        );
      }
      case "FH": {
        return (
          <FishingIcon
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill={
              gameType
                ? tenancy?.mainColor || colors.global
                : "rgba(255, 255, 255, 0.7)"
            }
          />
        );
      }
      case "LOTTERY": {
        return (
          <LotteryIcon
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill={
              gameType
                ? tenancy?.mainColor || colors.global
                : "rgba(255, 255, 255, 0.7)"
            }
          />
        );
      }
      case "ARCADE": {
        return (
          <ArcadeIcon
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill={
              gameType
                ? tenancy?.mainColor || colors.global
                : "rgba(255, 255, 255, 0.7)"
            }
          />
        );
      }
      case "RNGTABLE": {
        return (
          <TableIcon
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill={
              gameType
                ? tenancy?.mainColor || colors.global
                : "rgba(255, 255, 255, 0.7)"
            }
          />
        );
      }
      case "LIVEARENA": {
        return (
          <Livearena
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill={
              gameType
                ? tenancy?.mainColor || colors.global
                : "rgba(255, 255, 255, 0.7)"
            }
          />
        );
      }
      default: {
        return <></>;
      }
    }
  }

  return (
    <Flex w={"100%"} flexDir={"column"}>
      <Grid w={"100%"} templateColumns={"repeat(5, 1fr)"} gap={0}>
        {categoryData?.gameType?.map((item: any, i: any) => (
          <Flex
            key={i}
            onClick={() => handleClick(i, item?.item, item.name)}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            bg={
              pos !== i
                ? "linear-gradient(180deg, #061b10 25%, #00110a 65%, #000000);"
                : "linear-gradient(180deg, #0b2d1b 25%, #012616 65%, #000802)"
            }
            p={"5px 0"}
            display={"inline-block"}
            textAlign={"center"}
            cursor={"pointer"}
            border={pos !== i ? "1px solid #03110a" : "1px solid #0a502b"}
            transition={"all 0.3 ease-out"}
          >
            <Flex justifyContent={"center"} alignItems={"center"}>
              {/* {getIconFromGameType(item.game_type)} */}
            </Flex>
            <Text
              color={"#fff"}
              textTransform={"uppercase"}
              display={"block"}
              fontSize={"12px"}
              fontWeight={400}
              textShadow={"0 0 4px #00d741"}
            >
              {item.name}
            </Text>
          </Flex>
        ))}
      </Grid>
      {/* <Text
        fontSize={"28px"}
        fontWeight={600}
        color={"#fff"}
        textAlign={"center"}
        letterSpacing={"3px"}
        mt={2}
      >{`- ${title} -`}</Text>
      <Grid
        w={"100%"}
        templateColumns={"repeat(3, 1fr)"}
        gap={2}
        p={"0 10px 70px 10px"}
      >
        {data !== undefined &&
          data?.map((items: any, i: any) => (
            <Flex key={i} justifyContent={"center"}>
              <Flex>
                <Image src={items.img} alt="gift" objectFit={"contain"} />
              </Flex>
            </Flex>
          ))}
      </Grid> */}
    </Flex>
  );
};

export default CategoryGame;

const categoryDummy = [
  {
    url: liveIcon.src,
    name: "Live",
    item: [
      {
        img: Sexy.src,
      },
      {
        img: Dream.src,
      },
      {
        img: Gaming.src,
      },
      {
        img: Casino.src,
      },
      {
        img: Sbobet.src,
      },
      {
        img: Evulation.src,
      },
    ],
  },
  {
    url: slotIcon.src,
    name: "Slot",
    item: [
      {
        img: jiliSlot.src,
      },
      {
        img: kaSlot.src,
      },
      {
        img: fcSlot.src,
      },
      {
        img: egameSlot.src,
      },
      {
        img: jokerSlot.src,
      },
      {
        img: kingmakerSlot.src,
      },
      {
        img: pragmaticSlot.src,
      },
      {
        img: spadeSlot.src,
      },
      {
        img: jdbSlot.src,
      },
      {
        img: wmSlot.src,
      },
      {
        img: yggSlot.src,
      },
      {
        img: cq9Slot.src,
      },
      {
        img: redtigerSlot.src,
      },
      {
        img: rtgSlot.src,
      },
    ],
  },
  {
    url: sportsIcon.src,
    name: "Sport",
    item: [
      {
        img: Sbobet.src,
      },
    ],
  },
  {
    url: fishingIcon.src,
    name: "Fishing",
    item: [
      {
        img: Sexy.src,
      },
      {
        img: Dream.src,
      },
      {
        img: Gaming.src,
      },
      {
        img: Casino.src,
      },
      {
        img: Sbobet.src,
      },
      {
        img: Evulation.src,
      },
    ],
  },
  {
    url: cookIcon.src,
    name: "Cook",
    item: [
      {
        img: Sexy.src,
      },
      {
        img: Dream.src,
      },
      {
        img: Gaming.src,
      },
      {
        img: Casino.src,
      },
      {
        img: Sbobet.src,
      },
      {
        img: Evulation.src,
      },
    ],
  },
];

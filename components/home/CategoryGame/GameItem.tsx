import React from "react";
import game1 from "../../../public/images/game1.jpg";
import game2 from "../../../public/images/game2.jpg";
import game3 from "../../../public/images/game3.jpg";
import game4 from "../../../public/images/game4.jpg";
import game5 from "../../../public/images/game5.jpg";
import game6 from "../../../public/images/game6.jpg";
import game7 from "../../../public/images/game7.jpg";
import game8 from "../../../public/images/game8.jpg";
import game9 from "../../../public/images/game9.jpg";
import game10 from "../../../public/images/game10.jpg";
import game11 from "../../../public/images/game11.jpg";
import game12 from "../../../public/images/game12.jpg";
import game13 from "../../../public/images/game13.jpg";
import game14 from "../../../public/images/game14.jpg";
import game15 from "../../../public/images/game15.jpg";
import game16 from "../../../public/images/game16.jpg";
import game17 from "../../../public/images/game17.jpg";
import game18 from "../../../public/images/game18.jpg";
import game19 from "../../../public/images/game19.jpg";
import game20 from "../../../public/images/game20.jpg";
import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import UserInfoBar from "../../UserInfoBar";
import jiliSlot from "../../../public/images/jili_slot.png";

const GameItem = () => {
  return (
    <Flex flexDir={"column"} w={"100%"}>
      <UserInfoBar />
      <Flex justifyContent={"center"}>
        <Image src={gameDummy[0].src} alt="gift" />
      </Flex>
      <Grid templateColumns={"repeat(4,1fr)"} gap={8} px={"200px"} pb={"100px"}>
        {gameDummy[0].game.map((item, i) => (
          <Flex
            key={i}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            w={"233px"}
            margin={"auto"}
          >
            <Image h={"233px"} src={item.img} alt="gift" objectFit={"contain"} />
            <Text w={"100%"} bg={"#fff"} p={"15px 0"} textAlign={"center"} fontSize={"16px"} fontWeight={700} borderBottomLeftRadius={10} borderBottomRightRadius={10}>
              {item.name}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default GameItem;
const gameDummy = [
  {
    src: jiliSlot.src,
    game: [
      {
        img: game1.src,
        name: "Bombing Fishing",
      },
      {
        img: game2.src,
        name: "Bombing Fishing",
      },
      {
        img: game3.src,
        name: "Bombing Fishing",
      },
      {
        img: game4.src,
        name: "Bombing Fishing",
      },
      {
        img: game5.src,
        name: "Bombing Fishing",
      },
      {
        img: game6.src,
        name: "Bombing Fishing",
      },
      {
        img: game7.src,
        name: "Bombing Fishing",
      },
      {
        img: game8.src,
        name: "Bombing Fishing",
      },
      {
        img: game9.src,
        name: "Bombing Fishing",
      },
      {
        img: game10.src,
        name: "Bombing Fishing",
      },
      {
        img: game11.src,
        name: "Bombing Fishing",
      },
      {
        img: game12.src,
        name: "Bombing Fishing",
      },
      {
        img: game13.src,
        name: "Bombing Fishing",
      },
      {
        img: game14.src,
        name: "Bombing Fishing",
      },
      {
        img: game15.src,
        name: "Bombing Fishing",
      },
      {
        img: game16.src,
        name: "Bombing Fishing",
      },
      {
        img: game17.src,
        name: "Bombing Fishing",
      },
      {
        img: game18.src,
        name: "Bombing Fishing",
      },
      {
        img: game19.src,
        name: "Bombing Fishing",
      },
      {
        img: game20.src,
        name: "Bombing Fishing",
      },
    ],
  },
];

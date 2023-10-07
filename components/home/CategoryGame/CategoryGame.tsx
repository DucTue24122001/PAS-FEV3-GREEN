import React, { useState } from 'react'
import liveIcon from "../../../public/images/Live-icon.png"
import slotIcon from "../../../public/images/Slot-icon.png"
import sportsIcon from "../../../public/images/Sport-icon.png"
import fishingIcon from "../../../public/images/Fish-icon.png"
import cookIcon from "../../../public/images/Cockfight-icon.png"

import Sexy from "../../../public/images/lm-sexy.png"
import Dream from "../../../public/images/dream-gaming.png"
import Gaming from "../../../public/images/gaming.png"
import Casino from "../../../public/images/casino.png"
import Sbobet from "../../../public/images/sbobet-casino.png"
import Evulation from "../../../public/images/evolution-gaming.png"
import { Flex, Grid, Image, Text } from '@chakra-ui/react'

const CategoryGame = () => {
    const [pos, setPos] = useState<any>(0)
  return (
    <Flex w={"100%"} >
        <Grid w={"100%"} templateColumns={"repeat(5, 1fr)"} gap={0}>
            {categoryDummy.map((item, i) => (
                <Flex key={i} onClick={() => setPos(i)} justifyContent={"center"} alignItems={"center"} flexDir={"column"} bg={pos !== i ? "linear-gradient(180deg, #061b10 25%, #00110a 65%, #000000);" : "linear-gradient(180deg, #0b2d1b 25%, #012616 65%, #000802)"} p={"5px 0"} display={"inline-block"} textAlign={"center"} cursor={"pointer"} border={pos !== i ? "1px solid #03110a" : "1px solid #0a502b"} transition={"all 0.3 ease-out"}>
                    <Flex justifyContent={"center"} alignItems={"center"}>
                        <Image textAlign={"center"} src={item.url} alt={item.name} maxW={["47px","47px","100px","100px"]} maxH={["50px","50px","88px","88px"]} objectFit={"contain"} />
                    </Flex>
                    <Text color={"#fff"} textTransform={"uppercase"} display={"block"} fontSize={"12px"} fontWeight={400} textShadow={"0 0 4px #00d741"}>{item.name}</Text>
                </Flex>
            ))}
        </Grid>
    </Flex>
  )
}

export default CategoryGame


const categoryDummy = [
    {
        url:liveIcon.src,
        name:"Live",
        item:[
            {
                img:Sexy.src
            },
            {
                img:Dream.src
            },
            {
                img:Gaming.src
            },
            {
                img:Casino.src
            },
            {
                img:Sbobet.src
            },
            {
                img:Evulation.src
            },
        ]
    },
    {
        url:slotIcon.src,
        name:"Slot",
        item:[
            {
                img:Sexy.src
            },
            {
                img:Dream.src
            },
            {
                img:Gaming.src
            },
            {
                img:Casino.src
            },
            {
                img:Sbobet.src
            },
            {
                img:Evulation.src
            },
        ]
    },
    {
        url:sportsIcon.src,
        name:"Sport",
        item:[
            {
                img:Sexy.src
            },
            {
                img:Dream.src
            },
            {
                img:Gaming.src
            },
            {
                img:Casino.src
            },
            {
                img:Sbobet.src
            },
            {
                img:Evulation.src
            },
        ]
    },
    {
        url:fishingIcon.src,
        name:"Fishing",
        item:[
            {
                img:Sexy.src
            },
            {
                img:Dream.src
            },
            {
                img:Gaming.src
            },
            {
                img:Casino.src
            },
            {
                img:Sbobet.src
            },
            {
                img:Evulation.src
            },
        ]
    },
    {
        url:cookIcon.src,
        name:"Cook",
        item:[
            {
                img:Sexy.src
            },
            {
                img:Dream.src
            },
            {
                img:Gaming.src
            },
            {
                img:Casino.src
            },
            {
                img:Sbobet.src
            },
            {
                img:Evulation.src
            },
        ]
    },
]
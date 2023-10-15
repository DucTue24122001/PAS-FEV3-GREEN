import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useTenancy } from "../../../hook/TenancyProvider";
import httpClient from "../../../http-client/httpClient";
import { useRouter } from "next/router";
import GameTypeItem from "./GameTypeItem";

const GameType = () => {
  const { categoryData }: any = useSelector(
    (state: RootState) => state.account
  );
  const [isData, setIsData] = useState([]);
  const [isPlatform, setIsPlatform] = useState();
  const tenancy = useTenancy();
  const router = useRouter();
  const gametype: any = router.query.page;

  const findGameType = categoryData?.gameType?.find(
    (item: any) => item?.game_type === gametype
  );

  console.log(isPlatform);

  console.log(findGameType);

  console.log(isData);

  const handleClick = async (platform: any) => {
    router.push(`/category/${gametype}?platform=${platform}`);
    try {
      const res: any = await httpClient.post(`/MPS/ByGameTypeAndPlatform`, {
        platform: platform,
        gametype: gametype,
        status: "HOT",
        tenancyName: tenancy?.tenancyName,
      });
      setIsData(res?.result);
      setIsPlatform(platform);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      w={"1024px"}
      pb={20}
      pt={5}
    >
      <Grid
        mt={2}
        mb={5}
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={["15px 10px", 3, 3, 5]}
      >
        {router.query.platform !== undefined ? (
          <GameTypeItem />
        ) : (
          <>
            {findGameType?.platforms.map((platform: any, i: number) => (
              <Box
                key={i}
                bgColor={"#fff"}
                borderRadius={10}
                boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
                onClick={() => handleClick(platform.platform)}
                cursor={"pointer"}
              >
                <Image
                  alt={"gameImg"}
                  w={"100%"}
                  h={["112px", "140px", "173px", "209px"]}
                  borderTopRightRadius={5}
                  borderTopLeftRadius={5}
                  objectFit={"contain"}
                  src={`https://pasystem.s3.ap-southeast-1.amazonaws.com/platforms/${platform.platform}.jpg`}
                ></Image>
                <Flex
                  borderBottomRightRadius={5}
                  borderBottomLeftRadius={5}
                  justifyContent={"center"}
                  w={"100%"}
                  p={["5px 15px", "10px 15px", "10px 15px", "10px 15px"]}
                  fontSize={["10px", "14px", "14px", "16px"]}
                  fontWeight={[0, 700, 700, 700]}
                >
                  <Text color={"#000000F5"} noOfLines={1}>
                    {platform.platform_name}
                  </Text>
                </Flex>
              </Box>
            ))}
          </>
        )}
      </Grid>
    </Flex>
  );
};

export default GameType;

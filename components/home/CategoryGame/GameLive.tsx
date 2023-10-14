import React, { useEffect, useState } from "react";
import { useTenancy } from "../../../hook/TenancyProvider";
import httpClient from "../../../http-client/httpClient";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const GameLive = () => {
  const tenancy = useTenancy();
  const [data, setData] = useState([]);
  const router = useRouter();
  const gametype:any = router.query.page

  useEffect(() => {
    (async () => {
      try {
        const res: any = await httpClient.post(`/MPS/ByGameTypeAndPlatform`, {
          platform: "",
          gametype: gametype,
          tenancyName: tenancy?.tenancyName,
        });
        setData(res?.result?.gameList);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [gametype]);

  const handleClickUrl = async (platform: any, game_code: any) => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/login");
    } else {
      try {
        const res: any = await httpClient.post(`/MPS/GetMPSGameUrl`, {
          platform: platform,
          game_code: game_code,
        });
        window.open(res.result);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Flex justifyContent={"center"} alignItems={"center"} px={[2, 2, 2, 0]} pb={20} pt={5}>
      <Grid
        mt={5}
        mb={5}
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={[2, 3, 5, 5]}
      >
        {data?.map((game: any, i: number) => (
          <Box
            key={i}
            bg={"#fff"}
            borderRadius={10}
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            onClick={() => handleClickUrl(game.platform, game.game_code)}
            cursor={"pointer"}
          >
            <Image
              alt={"gameImg"}
              w={"100%"}
              h={["115px", "140px", "173px", "209px"]}
              borderTopRightRadius={5}
              borderTopLeftRadius={5}
              objectFit={"cover"}
              src={game?.imageURL}
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
                {game?.game_name_en}
              </Text>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
};

export default GameLive;

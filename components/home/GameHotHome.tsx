import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import httpClient from "../../http-client/httpClient";
import { useRouter } from "next/router";
import { HiWrenchScrewdriver } from "react-icons/hi2";

const GameHotHome = () => {
  const { categoryData }: any = useSelector(
    (state: RootState) => state.account
  );
  const router = useRouter();

  const handleClickUrl = async (platform: any, gamecode: any) => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      try {
        const res: any = await httpClient.post(`/MPS/GetMPSGameUrl`, {
          platform: platform,
          game_code: gamecode,
        });
        window.open(res?.result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Flex pt={10} pb={20} justifyContent={"center"} px={[2, 2, 2, 0]}>
      <Flex flexDir={"column"} maxW={"1024px"}>
        {categoryData?.gameType?.map((item: any, i: number) =>
          categoryData?.gameList?.filter(
            (game: any) => game.game_type === item.game_type
          ).length !== 0 ? (
            <Flex key={i} flexDirection={"column"} mb={5}>
              <Flex alignItems={"center"} mb={2}>
                <Image
                  h={"24px"}
                  w={"24px"}
                  src={`./nav-svg/${item.game_type}.svg`}
                  alt=""
                ></Image>
                <Text
                color={"#fff"}
                  fontSize={"1.17em"}
                  ml={2}
                  textTransform={"capitalize"}
                  fontWeight={600}
                >
                  {item.game_type_name_home}
                </Text>
              </Flex>
              <Grid
                templateColumns={[
                  "repeat(3, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(4, 1fr)",
                  "repeat(4, 1fr)",
                ]}
                gap={[2, 5, 5, 5]}
              >
                {categoryData?.gameList
                  ?.filter((game: any) => game.game_type === item.game_type)
                  .map((items: any, i: number) => (
                    <Box
                      key={i}
                      bgColor={"#fff"}
                      borderRadius={10}
                      boxShadow={"0 3px 6px rgba(48,48,48,.1)"}
                      onClick={
                        items?.playable !== false
                          ? () =>
                              handleClickUrl(items?.platform, items?.game_code)
                          : undefined
                      }
                      cursor={
                        items.playable !== false ? "pointer" : "not-allowed"
                      }
                      position={"relative"}
                    >
                      {items.game_type === "FH" ||
                      items.game_type === "SLOT" ? (
                        <Flex
                          alignItems={"center"}
                          justifyContent={"center"}
                          position={"absolute"}
                          w={["40px", "60px", "60px", "60px"]}
                          h={["25px", "40px", "40px", "40px"]}
                          top={0}
                          left={"50%"}
                          transform={"translateX(-50%)"}
                          borderRadius={["10px", "10px", "10px", "20px"]}
                          bg={"rgba(0,0,0,.7);"}
                        >
                          <Image
                            w={"35px"}
                            h={"23px"}
                            objectFit={"contain"}
                            src={`https://pasystem.s3.ap-southeast-1.amazonaws.com/platforms/${items.platform}-logo.png`}
                            alt="gift"
                          />
                        </Flex>
                      ) : null}

                      <Box
                        position={"absolute"}
                        w={"100%"}
                        borderRadius={5}
                        h={"100%"}
                        bgColor={
                          items.playable !== false
                            ? ""
                            : [
                                "rgba(0,0,0,.55)",
                                "rgba(0,0,0,.4)",
                                "rgba(0,0,0,.4)",
                                "rgba(0,0,0,.4)",
                              ]
                        }
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        fontSize={[28, 30, 30, 35]}
                      >
                        {items?.playable !== false ? (
                          ""
                        ) : (
                          <HiWrenchScrewdriver color="#44e42e" />
                        )}
                      </Box>
                      <Image
                        alt={items?.game_name_en}
                        w={"100%"}
                        h={["115px", "140px", "173px", "233px"]}
                        borderTopRightRadius={5}
                        borderTopLeftRadius={5}
                        objectFit={"cover"}
                        src={items?.imageURL}
                        // onClick={showLoginModal}
                      />
                      <Flex
                        borderBottomRightRadius={5}
                        borderBottomLeftRadius={5}
                        justifyContent={"center"}
                        w={"100%"}
                        p={["5px 15px", "10px 15px", "10px 15px", "10px 15px"]}
                        fontSize={["10px", "14px", "14px", "16px"]}
                        fontWeight={[0, 700, 700, 700]}
                        // onClick={showLoginModal}
                      >
                        <Text color={"#000000F5"} noOfLines={1}>
                          {items.game_name_en}
                        </Text>
                      </Flex>
                    </Box>
                  ))}
              </Grid>
            </Flex>
          ) : (
            ""
          )
        )}
      </Flex>
    </Flex>
  );
};

export default GameHotHome;

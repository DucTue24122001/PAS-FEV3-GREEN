import {
  Box,
  Flex,
  Grid,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import httpClient from "../../../http-client/httpClient";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useTenancy } from "../../../hook/TenancyProvider";
import ClientService from "../../../http-client/ClientService";

const settings = {
  centerMode: false,
  infinite: false,
  slidesToShow: 8,
  slidesToScroll: 8,
  dots: false,
  draggable: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
};
const filters = [
  { id: 1, name: "all", value: "" },
  { id: 2, name: "hot", value: "HOT" },
];
const GameTypeItem = ({ data, findGameType }: any) => {
  const [filterData, setFillterData] = useState([]);
  const [searchValue, setSearchvalue] = useState<any>("");
  const [selectFilter, setSelectFilter] = useState("");
  const [isBorder, setIsBorder] = useState(false);
  const slider: any = useRef(null);
  const router = useRouter();
  const { t }: any = useTranslation();
  const tenancy = useTenancy();
  const gametype = router.query.page;
  const platform = router.query.platform;

  const getDataFill = async () => {
    try {
      const res: any = await httpClient.post(`/MPS/ByGameTypeAndPlatform`, {
        platform: platform,
        gametype: gametype,
        status: selectFilter,
        tenancyName: tenancy?.tenancyName,
      });
      setFillterData(res?.result?.gameList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (tenancy) {
      getDataFill();
    }
  }, [router, tenancy, selectFilter]);
  const handleClickGameAll = () => {
    setIsBorder(true);
    router.push(`/category/${gametype}?platform=&`);
  };
  const handleBorderGame = async (platform: any) => {
    setIsBorder(false);
    router.push(`/category/${gametype}?platform=${platform}`);
  };
  const handleClickUrl = async (platform: any, game_code: any) => {
    const token = localStorage.getItem("token");
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

  const searchFilter = useMemo(() => {
    if (searchValue) {
      return filterData?.filter((item: any) =>
        item.game_name_en.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    return filterData;
  }, [searchValue, filterData]);
  return (
    <Flex
      flexDirection={"column"}
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex w={["100%", "100%", "100%", "1024px"]}>
        <Box
          w={["100%", "100%", "100%", "1024px"]}
          borderRadius={10}
          pos={"relative"}
          p={"0 30px"}
          bg={"#fff"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Slider ref={slider} {...settings}>
            <Flex>
              <Flex
                h={["125px", "113px", "108px", "125px"]}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius="10px"
                border={isBorder ? "1px solid #44e42e" : ""}
                _hover={{ bg: "#f5f4f4", borderRadius: "10px", border: "none" }}
                onClick={() => handleClickGameAll()}
              >
                <Text
                  p={[
                    "10px 30px",
                    "20px 40px",
                    "20px 30px",
                    "20px 55px",
                    "20px 44px",
                  ]}
                  borderRight={"1px solid #0000001a"}
                  color={isBorder ? "#44e42e" : ""}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                >
                  {t("all")}
                </Text>
              </Flex>
            </Flex>

            {findGameType?.platforms?.map((item: any, i: number) => (
              <Box key={i}>
                <Flex
                  borderRadius="10px"
                  onClick={() => handleBorderGame(item.platform)}
                  border={platform === item.platform ? "1px solid #44e42e" : ""}
                  justifyContent={"center"}
                  alignItems={"center"}
                  p={"30px 0px"}
                  _hover={{ bg: "#f5f4f4" }}
                  h={["125px", "125px", "108px", "125px"]}
                >
                  <Flex
                    w={"100%"}
                    flexDir={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    textAlign={"center"}
                    borderRight={"1px solid #0000001a"}
                  >
                    <Image
                      h={["30px", "30px", "40px", "40px"]}
                      w={["30px", "30px", "40px", "40px"]}
                      objectFit={"contain"}
                      src={`https://pasystem.s3.ap-southeast-1.amazonaws.com/platforms/${item.platform}-logo.png`}
                    />
                    <Text
                      fontSize={["12px", "12px", "12px", "16px"]}
                      mt={2}
                      fontWeight={700}
                      color={platform === item.platform ? "#44e42e" : ""}
                    >
                      {item.platform_name}
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </Slider>
          <Box
            position={"absolute"}
            fontSize={"24px"}
            color={"#00000047"}
            left={"0px"}
            top={"30%"}
            onClick={() => slider?.current?.slickPrev()}
          >
            <ChevronLeftIcon />
          </Box>
          <Box
            position={"absolute"}
            fontSize={"24px"}
            color={"#00000047"}
            top={"30%"}
            right={"0px"}
            onClick={() => slider?.current?.slickNext()}
          >
            <ChevronRightIcon />
          </Box>
        </Box>
      </Flex>
      <Flex
        mt={5}
        justifyContent={"space-between"}
        w={["100%", "100%", "100%", "1024px"]}
        p={"0 10px"}
        flexDir={["column","row","row","row"]}
      >
        <Flex>
          <Flex
            alignItems={"center"}
            onClick={() => router.push(`/category/${gametype}`)}
            cursor={"pointer"}
          >
            <ChevronLeftIcon color={"#fff"} fontSize={"22px"} />
            <Text fontWeight={700} color={"#fff"}>
              {t("back")}
            </Text>
          </Flex>
          <Select
            _focusVisible={{ outline: "none" }}
            ml={"2rem"}
            w={["15rem", "15rem", "15rem", "15rem"]}
            bg={"#fff"}
            size={"lg"}
            value={t("filter_game")}
            onChange={(e) => setSelectFilter(e.target.value)}
          >
            <option>
              {t("filter_game")}{" "}
              <Text fontWeight={700}>
                {selectFilter === "" ? t("all") : t("hot")}
              </Text>
            </option>
            {filters.map((item: any) => (
              <option key={item.id} value={item.value}>
                {t(`${item.name}`)}
              </option>
            ))}
          </Select>
        </Flex>

        <InputGroup width={["100%", "25%", "40%", "45%"]} color={"#858181"} mt={[5, 0,0,0]}>
          <Input
            _focusVisible={{ outline: "none" }}
            variant={"outline"}
            bg={"#fff"}
            type="text"
            size={"lg"}
            onChange={(e) => setSearchvalue(e.target.value)}
            placeholder={t("search_game")}
          />
          <InputLeftElement mt={1}>
            <SearchIcon />
          </InputLeftElement>
        </InputGroup>
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        px={[2, 2, 2, 0]}
        pt={5}
        maxW={"1024px"}
      >
        <Grid
          templateColumns={[
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={[2, 3, 3, 5]}
          padding={"0 5px"}
        >
          {searchFilter?.map((game: any, i: number) => (
            <Box
              key={i}
              bgColor={"white"}
              borderRadius={10}
              boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
              onClick={
                game?.playable !== false
                  ? () => handleClickUrl(game?.platform, game?.game_code)
                  : undefined
              }
              cursor={game.playable !== false ? "pointer" : "not-allowed"}
              position={"relative"}
            >
              <Box
                position={"absolute"}
                w={"100%"}
                h={"100%"}
                borderRadius={5}
                bgColor={
                  game.playable !== false
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
                {game?.playable !== false ? (
                  ""
                ) : (
                  <HiWrenchScrewdriver color="#44e42e" />
                )}
              </Box>
              <Image
                alt={game?.game_name_en}
                w={"100%"}
                h={["115px", "140px", "173px", "215px"]}
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
    </Flex>
  );
};

export default GameTypeItem;

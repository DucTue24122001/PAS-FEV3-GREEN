import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import pro1 from "../../public/images/pro1.jpg";
import pro2 from "../../public/images/pro2.jpg";
import pro3 from "../../public/images/pro3.jpg";
import pro4 from "../../public/images/pro4.jpg";
import httpClient from "../../http-client/httpClient";
import { useTenancy } from "../../hook/TenancyProvider";
import { useDispatch } from "react-redux";
import { clientAction } from "../../redux/client-slice";
import PromotionModal from "../../components/promotion/PromotionModal";

const Promotion = () => {
  const [data, setData] = useState<any>(null);
  const tenancy = useTenancy();
  const dispatch = useDispatch()
  console.log(data);
  

  useEffect(() => {
    (async () => {
      try {
        const respon: any = await httpClient.post(
          "/services/app/promotion/GetAllPromotion",
          {
            tenancyName: tenancy?.tenancyName,
          }
        );
        setData(respon.result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const selectPromo = (item: any) => {
    dispatch(clientAction.handleShowPromoModal(true))
    dispatch(clientAction.setCurrentPromo(item))
  }

  return (
    <Flex justifyContent={"center"} alignItems={"center"} w={"100%"}>
      <Flex w={"820px"} flexDir={"column"} pb={20}>
        {data?.map((item: any, i: any) => (
          <Flex
            key={i}
            m={"10px 10px"}
            cursor={"pointer"}
            transition={"all 0.25s ease 0s"}
            _hover={{ transform: "scale(1.03)" }}
            flexDir={"column"}
            onClick={() => selectPromo(item)}
          >
            <Image
              w={"100%"}
              maxH={"200px"}
              src={item.urlImage}
              alt={item.name}
              objectFit={"cover"}
              bgPos={"center"}
              borderTopRightRadius={10}
              borderTopLeftRadius={10}
              
            />
            <Flex p={"10px 30px"} flexDir={"column"} bg={"#fff"} borderBottomRightRadius={10} borderBottomLeftRadius={10}>
              <Text textTransform={"uppercase"} fontWeight={700} fontSize={"18px"} color={"#004e27"} >{item.name}</Text>
              <Text>{item.content}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <PromotionModal />
    </Flex>
  );
};

export default Promotion;

const proDummy = [
  {
    img: pro1.src,
    title: "150% WELCOME BONUS",
    des: "Get 150% welcome bonus of up to $100 when you top up!",
  },
  {
    img: pro2.src,
    title: "DEPOSIT 5 FREE 8",
    des: "Deposit $5 and get extra $8 for free all day long!",
  },
  {
    img: pro3.src,
    title: "150% WELCOME BONUS",
    des: "Get 150% welcome bonus of up to $100 when you top up!",
  },
  {
    img: pro4.src,
    title: "150% WELCOME BONUS",
    des: "Get 150% welcome bonus of up to $100 when you top up!",
  },
];

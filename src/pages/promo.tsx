import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import httpClient from "../../http-client/httpClient";
import { useTenancy } from "../../hook/TenancyProvider";
import { useDispatch, useSelector } from "react-redux";
import { clientAction } from "../../redux/client-slice";
import PromotionModal from "../../components/promotion/PromotionModal";
import { RootState } from "../../redux/store";
import { useTranslation } from "react-i18next";

const Promotion = () => {
  const {promotionCheck} = useSelector((state: RootState) => state.client)
  const [data, setData] = useState<any>(null);
  const tenancy = useTenancy();
  const dispatch = useDispatch()
  const {t} = useTranslation()

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
  }, [promotionCheck]);
  const selectPromo = (item: any) => {
    dispatch(clientAction.handleShowPromoModal(true))
    dispatch(clientAction.setCurrentPromo(item))
  }

  return (
    <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} overflow={"clip"}>
      <Flex w={"820px"} flexDir={"column"} pb={20}>
        <Text pt={"16px"} pb={"12.7px"} alignItems={'center'}
          color={"#e6e7ff"} fontSize={"22px"} fontWeight={500} textAlign={'center'}>
          {t('promotion')}
        </Text>
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
              <Text textTransform={"uppercase"} fontWeight={700} fontSize={"18px"} color={"#2132ff"} >{item.name}</Text>
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
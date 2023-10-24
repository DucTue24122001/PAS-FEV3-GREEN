import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Image,
  Input,
  Link,
  ListItem,
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import ClientService from "../../http-client/ClientService";
import { clientAction } from "../../redux/client-slice";
import { checkIsTimeoutToken, numberWithCommas, toNormalNum } from "../../util/function";
import httpClient from "../../http-client/httpClient";
import DefaultButton from "../constants/DefaultButton";
import { ErrorText } from "../constants/NotificationText";
import { RootState } from "../../redux/store";
import { useTenancy } from "../../hook/TenancyProvider";
import { Respond } from "../../util/type";
import { DefaultInput } from "../constants/DefaultInput";
import { PromoEnum, StatusPromotion } from "../../util/enum";

const PromotionModal = () => {
  const { isShowPromoModal, currentPromo, currentBonus, currentTurnover, currentMinDeposit, currentMaxBonus } = useSelector((state: RootState) => state.client)
  const dispatch = useDispatch()
  const [amountInput, setAmountInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const router = useRouter()
  const toast = useToast()
  const {t} = useTranslation()
  const tenancy = useTenancy()

  useEffect(() => {
    setIsLogin(ClientService.isAuthenticated());
  });
  
  const resetModal = () => {
    setAmountInput("")
    setIsError(false)
  }

  const disableModal = () => {
    resetModal()
    dispatch(clientAction.setCurrentPromo({}))
    dispatch(clientAction.handleShowPromoModal(false))
  }

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, validity} = e.target
    const num = toNormalNum(value)
    const formatNum: any = numberWithCommas(num)
    if (validity.valid) {
      setAmountInput(formatNum)
    }
  }

  const error = useMemo(() => {
    switch (true) {
      case amountInput === "":
        return t("amount_input_is_required")
      case +toNormalNum(amountInput) < currentPromo.amountBuy:
        return `${t("amount_number_must_bigger_than")} ${currentPromo.amountBuy}`
      default:
        return ""
    }
  }, [amountInput, currentPromo])

  const submitAmount = async () => {
    if(error && !currentPromo?.type?.includes("FIXED")) {
      setIsError(true)
      return
    }
    setIsLoading(true)
    try {
      const res: Respond = await httpClient.post("/services/app/bankTransaction/AddPromotion", {
        PromotionId: currentPromo.id,
        BuyAmount: toNormalNum(amountInput) || 0
      })
      if (res.success) {
        dispatch(clientAction.buyPromoFunctionHandler({id: currentPromo.id, status: StatusPromotion.PENDING}))
        resetModal()
        toast({
          status: "success",
          title: res.result
        })
      } else {
        toast({
          status: "error",
          title: res.error.message
        })
      }
    } catch (err: any) {
      console.log(err);
      checkIsTimeoutToken(err, router)
      toast({
        status: "error",
        title: err?.response?.data?.error?.message || t('something_went_wrong'),
      })
    } finally {
      setIsLoading(false)
    }
  }

  const terminalPromo = async () => {
    setIsLoading(true)
    try {
      const res: Respond = await httpClient.post("/services/app/bankTransaction/TerminatePromotion", {
        PromotionId: currentPromo.id
      })
      if (res.success) {
        dispatch(clientAction.buyPromoFunctionHandler({id: currentPromo.id, status: ""}))
        resetModal()
        toast({
          status: "success",
          title: res.result
        })
      } else {
        toast({
          status: "error",
          title: res.error.message
        })
      }
    } catch (err: any) {
      console.log(err);
      checkIsTimeoutToken(err, router)
      toast({
        status: "error",
        title: err?.response?.data?.error?.message || t('something_went_wrong'),
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Modal isOpen={isShowPromoModal} onClose={() => disableModal()}
      isCentered size={["full","full","3xl","3xl"]}>
        <ModalOverlay />
        <ModalContent>
          <Flex flexDir={'column'}>
          <Box p={"15px 15px 20px"} w={"100%"} textAlign={"end"} position={'sticky'} top={0}>
            <CloseIcon fontSize={10} cursor={'pointer'} onClick={() => disableModal()}/>
          </Box>
          <Flex pb={30} px={"20px"} flexDir={'column'} overflowY={'auto'} 
            maxH={isLogin && currentPromo?.promotionType !== PromoEnum.REBATE ? 
              (amountInput ? ["calc(100vh - 335px)","calc(100vh - 335px)",500,500] : ["calc(100vh - 225px)","calc(100vh - 225px)",500,500]) :
              ["calc(100vh - 150px)","calc(100vh - 150px)",500,500]}>
            <Image alt={"img"} src={currentPromo?.urlImage}/>
            <Text textTransform={"uppercase"} fontSize={18} fontWeight={700} color={'#2132ff'} my={"20px"}>
              {currentPromo?.name}
            </Text>
            <Text fontFamily={"'Verdana',sans-serif"} fontSize={"16px"}>
              {currentPromo?.content}
            </Text>
            <Text fontFamily={"'Verdana',sans-serif"} fontWeight={700} mt={"22px"}>{t('promotion_details')}:</Text>
            <Flex w={"100%"} flexDir={'column'} mt={"10px"}>
              {currentPromo?.detailPromotion && currentPromo.detailPromotion.map((detail, i) => (
                <Flex key={i} borderBottom={i !== currentPromo.detailPromotion.length - 1 ? "2px solid #aeaeae" : undefined}
                  justifyContent={'space-between'} textTransform={"capitalize"}>
                  <Text w={"50%"} p={"10px"}>{detail.text}</Text>
                  <Text p={"10px"}>{detail.value}</Text>
                </Flex>
              ))}
            </Flex>
            <Text mt={"22px"} fontWeight={700}>{t('terms_&_condition')}:</Text>
            <UnorderedList ml={10}>
              <ListItem>{t('the_player_may_only')}</ListItem>
              <ListItem>{t('this_promotion')}</ListItem>
              <ListItem>{t('only_one_account')}</ListItem>
              <ListItem>{t('any_bet_place')}</ListItem>
              <ListItem>{tenancy?.appName} {t('reserves_the_right')}</ListItem>
              <ListItem>{tenancy?.appName}’s <Link color={'#2132ff'} onClick={() => router.push(`/polivies/terms`)}>{t('terms_&_condition')}</Link> {t('applies')}.</ListItem>
            </UnorderedList>
          </Flex>
          {isLogin && currentPromo?.promotionType !== PromoEnum.REBATE && <Center flexDir={'column'} pb={3} position={"sticky"} bottom={0} borderTop={"1px solid #e8e8e8"}>
          <Center gap={3} pt={3}>
            {(!currentPromo?.type?.includes("FIXED") && !currentPromo?.statusPromotion) && 
              <DefaultInput w={"100%"} placeholder={t('amount')} pattern="[0-9,]*" onChange={inputHandler} value={amountInput}/>}
            {(!currentPromo?.statusPromotion || currentPromo?.statusPromotion === StatusPromotion.COMPLETED) && <DefaultButton w={"100%"} onClick={submitAmount}>
              {isLoading ? <Spinner size={"sm"}/> : t('apply')}
            </DefaultButton>}
            {currentPromo?.statusPromotion === StatusPromotion.PENDING && 
            <DefaultButton bgColor={"#aeaeae"} color={"white"} disabled={true}
              cursor={"not-allowed"}>
              Waiting for approve...
            </DefaultButton>}
            {currentPromo?.statusPromotion === StatusPromotion.ACCEPTED && 
            <DefaultButton w={"100px"} bgColor={"global.error"} color={"white"} onClick={terminalPromo}>
              {isLoading ? <Spinner size={"sm"}/> : "Terminate"}
            </DefaultButton>}
          </Center>
          {isError && <ErrorText>{error}</ErrorText>}
          {!currentPromo?.type?.includes("FIXED") && amountInput.length !== 0 && <Center gap={3} pt={3}>
            <Flex sx={promoCalculateItem}>
              <Text>{t('promotion_bonus')}</Text>
              <Text sx={promoCalculateText}>{(currentMaxBonus > 0 && (+toNormalNum(amountInput) * currentBonus / 100) > currentMaxBonus) ? currentMaxBonus : numberWithCommas(+toNormalNum(amountInput) * currentBonus / 100)}</Text>
            </Flex>
            <Flex sx={promoCalculateItem}>
              <Text>{t('wager_requirement')}</Text>
              <Text sx={promoCalculateText}>{(currentMaxBonus > 0 && (+toNormalNum(amountInput) * currentBonus / 100) > currentMaxBonus) ?
                numberWithCommas((+toNormalNum(amountInput) + currentMaxBonus) * currentTurnover) :
                numberWithCommas((+toNormalNum(amountInput) + (+toNormalNum(amountInput) * currentBonus / 100)) * currentTurnover)}
                </Text>
            </Flex>
          </Center>}
          {currentPromo?.type?.includes("FIXED") && <Center gap={3} pt={3}>
            <Flex sx={promoCalculateItem}>
              <Text>{t('promotion_bonus')}</Text>
              <Text sx={promoCalculateText}>
                {currentMaxBonus}
              </Text>
            </Flex>
            <Flex sx={promoCalculateItem}>
              <Text>{t('wager_requirement')}</Text>
              <Text sx={promoCalculateText}>{numberWithCommas((currentMinDeposit + currentBonus) * currentTurnover)}</Text>
            </Flex>
          </Center>}
          </Center>}
          <Center py={"18px"} w={"100%"} gap={1} bgColor={"#303030"}
            position={"sticky"} bottom={0}
            borderRadius={"0 0 5px 5px"} flexDir={["column","column","row","row"]}>
            <Text color={"white"}>{t('need_assistance')}</Text>
            <Text fontWeight={700} fontSize={16} color={'#4956ff'} cursor={'pointer'}>
              {t('customer_care')}
            </Text>
          </Center> 
          </Flex>
        </ModalContent>
    </Modal>
  );
};

export default PromotionModal;

const promoCalculateItem = {
  p: "5px 10px",
  borderRadius: 5,
  fontWeight: 700,
  bgColor: "#d9dee4",
  flexDir: "column",
  w: ["150px", "200px", "200px", "200px"],
};
const promoCalculateText = {
  fontFamily: "Teko,sans-serif",
  color: "green",
  fontSize: "28px",
  fontWeight: 500,
};

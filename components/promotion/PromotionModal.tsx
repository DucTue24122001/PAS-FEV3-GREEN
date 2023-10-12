import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Image,
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
import { numberWithCommas, toNormalNum } from "../../util/function";
import httpClient from "../../http-client/httpClient";
import { PageEnum, PoliciesEnum, StatusPromotion } from "../constants/enum";
import checkTimeoutToken from "../../hook/checkTimeoutToken";
import SecondaryInput from "../constants/SecondaryInput";
import DefaultButton from "../constants/DefaultButton";
import { ErrorText } from "../constants/NotificationText";
import { RootState } from "../../redux/store";

const PromotionModal = () => {
  const { isShowPromoModal, currentPromo, currentBonus, currentTurnover, currentMaxBonus, currentMinDeposit }:any = useSelector((state: RootState) => state.client)
  const dispatch = useDispatch();
  const [amountInput, setAmountInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const toast = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    setIsLogin(ClientService.isAuthenticated());
  });

  const resetModal = () => {
    setAmountInput("");
    setIsError(false);
  };

  const disableModal = () => {
    resetModal();
    dispatch(clientAction.handleShowPromoModal(false));
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, validity } = e.target;
    const num = toNormalNum(value);
    const formatNum: any = numberWithCommas(num);
    if (validity.valid) {
      setAmountInput(formatNum);
    }
  };

  const error = useMemo(() => {
    switch (true) {
      case amountInput === "":
        return "amount_input_is_required";
      case +toNormalNum(amountInput) < currentPromo.amountBuy:
        return `Amount number must bigger than ${currentPromo.amountBuy}`;
      default:
        return "";
    }
  }, [amountInput, currentPromo]);

  const submitAmount = async () => {
    if (error && !currentPromo?.type?.includes("FIXED")) {
      setIsError(true);
      return;
    }
    setIsLoading(true);
    try {
      const res: any = await httpClient.post(
        "/services/app/bankTransaction/AddPromotion",
        {
          PromotionId: currentPromo.id,
          BuyAmount: toNormalNum(amountInput) || 0,
        }
      );
      if (res.success) {
        dispatch(
          clientAction.buyPromoFunctionHandler({
            id: currentPromo.id,
            status: StatusPromotion.PENDING,
          })
        );
        resetModal();
        toast({
          status: "success",
          title: res.result,
        });
      } else {
        toast({
          status: "error",
          title: res.error.message,
        });
      }
    } catch (err: any) {
      console.log(err);
      checkTimeoutToken({ err, router, dispatch });
      toast({
        status: "error",
        title:
          err?.response?.data?.error?.message ||
          "Something went wrong, please try again latter",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const terminalPromo = async () => {
    setIsLoading(true);
    try {
      const res: any = await httpClient.post(
        "/services/app/bankTransaction/TerminatePromotion",
        {
          PromotionId: currentPromo.id,
        }
      );
      if (res.success) {
        dispatch(
          clientAction.buyPromoFunctionHandler({
            id: currentPromo.id,
            status: "",
          })
        );
        resetModal();
        toast({
          status: "success",
          title: res.result,
        });
      } else {
        toast({
          status: "error",
          title: res.error.message,
        });
      }
    } catch (err: any) {
      console.log(err);
      checkTimeoutToken({ err, router, dispatch });
      toast({
        status: "error",
        title:
          err?.response?.data?.error?.message ||
          "Something went wrong, please try again latter",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const modalHeightCalculation = () => {
    switch (true) {
      case !!amountInput:
      case currentPromo?.type?.includes("FIXED") && isLogin:
        return ["calc(100vh - 260px)", "calc(100vh - 260px)", 500, 500];
      case !isLogin:
        return ["100vh", "100vh", 500, 500];
      default:
        return ["calc(100vh - 180px)", "calc(100vh - 180px)", 500, 500];
    }
  };

  return (
    <Modal
      isOpen={isShowPromoModal}
      onClose={disableModal}
      isCentered
      size={["full", "full", "3xl", "3xl"]}
    >
      <ModalOverlay />
      <ModalContent>
        <Flex flexDir={"column"}>
          <Box
            p={"15px 15px 20px"}
            w={"100%"}
            textAlign={"end"}
            position={"sticky"}
            top={0}
          >
            <CloseIcon
              fontSize={10}
              cursor={"pointer"}
              onClick={() => disableModal()}
            />
          </Box>
          <Flex
            pb={30}
            px={"20px"}
            flexDir={"column"}
            overflowY={"auto"}
            maxH={modalHeightCalculation()}
            className={"promotion-scroll"}
          >
            <Image alt={"img"} src={currentPromo?.urlImage} objectFit={"contain"} />
            <Text
              textTransform={"uppercase"}
              fontSize={18}
              fontWeight={700}
              color={"blue.12"}
              my={"20px"}
            >
              {currentPromo?.name}
            </Text>
            <Text fontFamily={"'Verdana',sans-serif"} fontSize={"16px"}>
              {currentPromo?.content}
            </Text>
            <Text
              fontFamily={"'Verdana',sans-serif"}
              fontWeight={700}
              mt={"22px"}
            >
              {t("promotion_details")}:
            </Text>
            <Flex w={"100%"} flexDir={"column"} mt={"10px"}>
              {currentPromo?.detailPromotion &&
                currentPromo.detailPromotion.map((detail: any, i: any) => (
                  <Flex
                    key={i}
                    borderBottom={
                      i !== currentPromo.detailPromotion.length - 1
                        ? "2px solid #aeaeae"
                        : undefined
                    }
                    justifyContent={"space-between"}
                  >
                    <Text w={"50%"} p={"10px"}>
                      {detail.text}
                    </Text>
                    <Text p={"10px"}>{detail.value}</Text>
                  </Flex>
                ))}
            </Flex>
            <Text mt={"22px"} fontWeight={700}>
              {t("terms_&_condition")}:
            </Text>
            <UnorderedList ml={10}>
              <ListItem>{t("the_player_may_only")}.</ListItem>
              <ListItem>{t("this_promotion")}</ListItem>
              <ListItem>{t("only_one_account")}</ListItem>
              <ListItem>{t("any_bet_place")}</ListItem>
              <ListItem>{t("reserves_the_right")}</ListItem>
              <ListItem>
                388Games’s{" "}
                <Link
                  color={"blue.12"}
                  onClick={() =>
                    router.push(`/${PageEnum.POLICIES}/${PoliciesEnum.Terms}`)
                  }
                >
                  {t("terms_&_condition")}
                </Link>{" "}
                {t("applies")}.
              </ListItem>
            </UnorderedList>
          </Flex>
          {isLogin && (
            <Center flexDir={"column"} pb={3} position={"sticky"} bottom={0}>
              <Center gap={3} pt={3}>
                {!currentPromo?.type?.includes("FIXED") &&
                  !currentPromo?.statusPromotion && (
                    <SecondaryInput
                      w={"200px"}
                      placeholder={t("amount")}
                      pattern="[0-9,]*"
                      onChange={inputHandler}
                      value={amountInput}
                    />
                  )}
                {!currentPromo?.statusPromotion && (
                  <DefaultButton
                    w={["100px", "200px", "200px", "200px"]}
                    bgGradient={"linear-gradient(#004e27,#081e0e,#020103);"}
                    color={"white"}
                    onClick={submitAmount}
                  >
                    {isLoading ? <Spinner size={"sm"} /> : t("apply")}
                  </DefaultButton>
                )}
                {currentPromo?.statusPromotion === StatusPromotion.PENDING && (
                  <DefaultButton
                    bgColor={"lightGray"}
                    color={"white"}
                    disabled={true}
                    cursor={"not-allowed"}
                  >
                    Waiting for approve...
                  </DefaultButton>
                )}
                {currentPromo?.statusPromotion === StatusPromotion.ACCEPTED && (
                  <DefaultButton
                    w={"100px"}
                    bgColor={"error"}
                    color={"white"}
                    onClick={terminalPromo}
                  >
                    {isLoading ? <Spinner size={"sm"} /> : "Terminate"}
                  </DefaultButton>
                )}
              </Center>
              {isError && <ErrorText>{t(`${error}`)}</ErrorText>}
              {amountInput.length !== 0 && (
                <Center gap={3} pt={3}>
                  <Flex sx={promoCalculateItem}>
                    <Text>{t("promotion_bonus")}</Text>
                    <Text sx={promoCalculateText}>
                      {numberWithCommas(
                        (+toNormalNum(amountInput) * currentBonus) / 100
                      )}
                    </Text>
                  </Flex>
                  <Flex sx={promoCalculateItem}>
                    <Text>{t("wager_requirement")}</Text>
                    <Text sx={promoCalculateText}>
                      {numberWithCommas(
                        +toNormalNum(amountInput) * currentTurnover
                      )}
                    </Text>
                  </Flex>
                </Center>
              )}
              {currentPromo?.type?.includes("FIXED") && (
                <Center gap={3} pt={3}>
                  <Flex sx={promoCalculateItem}>
                    <Text>Promotion Bonus</Text>
                    <Text sx={promoCalculateText}>{currentMaxBonus}</Text>
                  </Flex>
                  <Flex sx={promoCalculateItem}>
                    <Text>Wager Requirement</Text>
                    <Text sx={promoCalculateText}>
                      {numberWithCommas(currentMinDeposit * currentTurnover)}
                    </Text>
                  </Flex>
                </Center>
              )}
            </Center>
          )}
          <Center
            py={["5px", "5px", "18px", "18px"]}
            w={"100%"}
            gap={1}
            bgColor={"secondary"}
            position={"sticky"}
            bottom={0}
            borderRadius={"0 0 5px 5px"}
            flexDir={["column", "column", "row", "row"]}
          >
            <Text color={"#104026"}>{t("need_assistance")}</Text>
            <Text
              fontWeight={700}
              fontSize={[14, 14, 16, 16]}
              color={"blue.12"}
              cursor={"pointer"}
            >
              {t("customer_care")}
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
  color: "blue.12",
  fontSize: "28px",
  fontWeight: 500,
};

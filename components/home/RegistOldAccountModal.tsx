import { Center, Flex, Image, Input, InputGroup, InputLeftAddon, Modal, ModalCloseButton, ModalContent, ModalOverlay, Spinner, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import logo from "../../public/images/Eurobet_Logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useTenancy } from '../../hook/TenancyProvider'
import { RootState } from '../../redux/store'
import { clientAction } from '../../redux/client-slice'
import httpClient from '../../http-client/httpClient'
import ClientService from '../../http-client/ClientService'
import { RegistFormEnum } from '../constants/enum'

const RegistOldAccountModal = () => {
  const { isShowRegistOldAccountModal, oldAccountRegistInfo } = useSelector((state: RootState) => state.client)
  const dispatch = useDispatch()
  const {t} = useTranslation()
  const router = useRouter()
  const [errorForm, setErrorForm] = useState({
    name: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const toast = useToast({
    duration: 3000,
    isClosable: true,
  });
  const [oldAccountInputForm, setOldAccountInputForm] = useState({
    name: "",
    phoneNumber: ""
  })
  const tenancy = useTenancy()

  const resetForm = () => {
    setOldAccountInputForm({
      name: "",
      phoneNumber: "",
    })
    dispatch(clientAction.setOldAccountRegistInfo({
      name: "",
      userName: "",
      phoneNumber: "",
      password: "",
      emailAddress: "",
    }))
    setError("")
    setIsError(false)
  }

  useEffect(() => {
    setErrorForm({...errorForm, 
      phone: (oldAccountRegistInfo.phoneNumber || oldAccountInputForm.phoneNumber) ? "" : t('phone_number_required'),
      name: (oldAccountRegistInfo.name || oldAccountInputForm.name) ? "" : t('name_required'),
    })
  }, [oldAccountRegistInfo, oldAccountInputForm])
  

  const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, validity } = e.target;
    if (validity.valid) {
      setOldAccountInputForm({ ...oldAccountInputForm, [name]: value });
    }
  }

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const isFormValid = Object.values(errorForm).every(
        (item) => item.length === 0
      );
      if (!isFormValid) {
        setIsError(true);
        return;
      }
      setIsLoading(true);
      const res: any = await httpClient.post("/Account/Register", {
        ...oldAccountRegistInfo,
        phoneNumber: "+" + tenancy?.areaCode + (oldAccountRegistInfo.phoneNumber || oldAccountInputForm.phoneNumber),
        name: oldAccountRegistInfo.name || oldAccountInputForm.name,
        TenancyName: tenancy?.tenancyName
      });
      if (res.success) {
        ClientService.login(res.result.token);
        toast({
          status: "success",
          title: "Account has been created",
        });
        dispatch(clientAction.handleShowRegistOldAccountModal(false));
        resetForm();
        router.push("/");
      } else {
        setIsError(true);
        setError(res.error.message);
      }
    } catch (err: any) {
      console.log(err);
      toast({
        status: "error",
        title:
          err?.response?.data?.error?.message ||
          t('something_went_wrong'),
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Modal isOpen={isShowRegistOldAccountModal} onClose={() => null} 
      isCentered size={["full", "full", "md", "md"]}>
      <ModalOverlay />
      <ModalContent p={"15px"}>
        <ModalCloseButton right={35} top={[55, 55, 35, 35]} onClick={() => {
          resetForm()
          dispatch(clientAction.handleShowRegistOldAccountModal(false))
        }}/>
        <form onSubmit={submitHandler}>
          <Center
            padding={["20px 0px", "20px 0px", "20px", "20px"]}
            gap={["10px", "10px", "15px", "15px"]}
            flexDir={"column"}
            h={["90vh", "90vh", "100%", "100%"]}
          >
            <Image alt={"logo"} src={logo.src} h={35} mb={[0, 0, 5, 5]} />
            <Text textAlign={'center'} fontSize={16}>
              {t("welcome")} <span style={{color: "#2132ff", fontWeight:700}}>{oldAccountRegistInfo.userName}</span>, {t("enter_your_detail")}
            </Text>
            {!oldAccountRegistInfo.name && <Input variant={"default"}
                  border={"1px solid #2132ff"}
                  name={RegistFormEnum.Name}
                  placeholder={t("same_bank")}
                  value={oldAccountInputForm.name}
                  onChange={formHandler}
                />}
              {isError && (
                  <Text fontSize={"14px"} color={"global.error"} alignSelf={'flex-start'}>
                    {errorForm.name}
                  </Text>
                )}
            {!oldAccountRegistInfo.phoneNumber && <InputGroup>
                  <InputLeftAddon
                    h={"40px"}
                    // eslint-disable-next-line react/no-children-prop
                    children={"+" + (tenancy ? tenancy.areaCode : "95")}
                  />
                  <Input variant={"default"}
                    name={RegistFormEnum.Phone}
                    value={oldAccountInputForm.phoneNumber}
                    pattern="[0-9]*"
                    onChange={formHandler}
                    placeholder={t("mobile_number")}
                    _focusVisible={{ outline: "none" }}
                    border={"1px solid #2132ff"}
                  />
            </InputGroup>}
            {isError && (
                  <Text fontSize={"14px"} color={"global.error"} alignSelf={'flex-start'}>
                    {errorForm.phone}
                  </Text>
                )}
            <Flex flexDirection={"row"}>
                <Text fontSize={"0.9rem"} lineHeight={"22.5px"}>
                  {t("age_verification")}{" "}
                  <span
                    style={{
                      cursor: "pointer",
                      fontWeight: 700,
                      color: "#2132ff",
                      fontSize: "0.9rem",
                      lineHeight: "22.5px",
                      textTransform: "uppercase",
                    }}
                    onClick={() => {
                      window.open(
                        `/policies/terms`
                      );
                    }}
                  >
                    {t("terms_and_condition")}
                  </span>
                </Text>
              </Flex>
              <button className='login_btn' type={"submit"}>
                {isLoading ? <Spinner/> : "CONTINUE"}
              </button>
              {error && (
                <Text fontSize={"14px"} color={"global.error"} alignSelf={'flex-start'}>
                  {error}
                </Text>
              )}
          </Center>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default RegistOldAccountModal
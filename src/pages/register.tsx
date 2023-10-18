/* eslint-disable react/no-children-prop */
import { Box, Heading, Image, useToast, Text, Input, InputGroup, InputLeftAddon, Checkbox, Flex, Button, Spinner } from '@chakra-ui/react'
import React, { ChangeEvent, useEffect, useState } from 'react'
import logo from "../../public/images/LuckyMyanmar.png"
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useTenancy } from '../../hook/TenancyProvider'
import { useDispatch } from 'react-redux'
import ClientService from '../../http-client/ClientService'
import httpClient from '../../http-client/httpClient'
import { CloseIcon } from '@chakra-ui/icons'

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const tenancy = useTenancy()
  const { t } = useTranslation();
  const [registForm, setRegistForm] = useState({
    userName: "",
    name: "",
    phoneNumber: "",
    password: "",
    emailAddress: "",
    ReferralCode: "",
  });
  const [isHaveReferralCode, setIsHaveReferralCode] = useState(false)
  const toast = useToast();
  const [confirmPass, setConfirmPass] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");
  const [errorPw, setErrorPw] = useState("");
  const [errorForm, setErrorForm] = useState({
    user: "",
    name: "",
    phone: "",
    // email: "",
  });
  const [isError, setIsError] = useState(false);
  const [isPwError, setIsPwError] = useState(false);
  const dispatch = useDispatch();

  const resetForm = () => {
    setRegistForm({
      ...registForm,
      userName: "",
      name: "",
      phoneNumber: "",
      password: "",
      emailAddress: "",
    });
    setConfirmPass("");
  };

  useEffect(() => {
    setErrorForm({
      ...errorForm,
      user: registForm.userName ? "" : t('username_required'),
      phone: registForm.phoneNumber ? "" : t('phone_number_required'),
      name: registForm.name ? "" : t('name_required'),
      // email: registForm.emailAddress ? "" : "Email is required",
    });
    setErrorPw(() => {
      switch (false) {
        case !restrictSpecialExp.test(registForm.password):
          return t('your_password_must_not_have_special_character')
        case minMaxLengthRegExp.test(registForm.password):
          return t('your_password_maximum')
        case uppercaseRegExp.test(registForm.password) && lowercaseRegExp.test(registForm.password):
          return t('your_password_uppercase_lowercase')
        case digitsRegExp.test(registForm.password):
          return t('your_password_least_one')
        case registForm.password === confirmPass:
          return t('your_confirm_password_not_match')
        default:
          return "";
      }
    });
  }, [registForm, confirmPass, tenancy]);

  const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, validity } = e.target;

    if (validity.valid) {
      setRegistForm({ ...registForm, [name]: value });
    }
  };

  const registerHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const isFormValid = Object.values(errorForm).every(
      (item) => item.length === 0
    );
    if (errorPw || !isFormValid) {
      setIsError(true);
      return;
    }
    setIsLoading(true);
    try {
      const res: any = await httpClient.post("/Account/Register", {
        ...registForm,
        phoneNumber: "+" + tenancy?.areaCode + registForm.phoneNumber,
        emailAddress: registForm.userName + "@default.com",
        tenancyName: tenancy?.tenancyName,
      });
      if (res.success) {
        ClientService.login(res.result.token);
        toast({
          status: "success",
          title: t('account_has_been_created'),
        });
        resetForm();
        setError("");
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
      setIsError(false);
    }
  }

  return (
      <Box className='layout'>
        <Box p={"10px 15px"} pb={"30px"} maxW={"550px"} mx={"auto"} pos={"relative"}>
          <CloseIcon color={"white"} pos={'absolute'} top={"40px"} right={"30px"}
            cursor={'pointer'}
            onClick={() => router.push("/")}/>
          <form onSubmit={registerHandler}>
            <Box m={"20px 0 40px"}>
              <Image alt='logo' src={logo.src} minW={"140px"} maxW={"240px"} w={"30%"} mx={'auto'}
                onClick={() => router.push("/")} cursor={'pointer'}/>
              <Heading as={"h5"} className='text_vip'
                my={"0.8rem"} fontSize={"18px"} fontWeight={500} textAlign={'center'}>{t('register')}</Heading>
            </Box>
            <Box sx={labelContainer}>
              <label htmlFor="user" className='text-vip'>
                <Text className='text_vip' mb={"5px"}>{t('username')}<span style={{color: "#ce4242"}}>*</span></Text>
              </label>
              <Input variant={"default"} id='user' name={RegistFormEnum.Username} placeholder={`${t("username")}`} fontSize={14} letterSpacing={"1px"}
                value={registForm.userName}
                autoComplete='none'
                onChange={formHandler}/>
              {isError && (
                <Text fontSize={"14px"} color={"global.error"}>
                  {errorForm.user}
                </Text>
              )}
            </Box>
            <Box sx={labelContainer}>
              <label htmlFor="password" className='text-vip'>
                <Text className='text_vip' mb={"5px"}>{t("password")}<span style={{color: "#ce4242"}}>*</span></Text>
              </label>
              <Input variant={"default"} id='password' name={RegistFormEnum.Password} placeholder={`${t("password")}`} fontSize={14} letterSpacing={"1px"}
                type='password'
                value={registForm.password}
                autoComplete='none'
                onFocus={() => setIsPwError(true)}
                onChange={formHandler}/>
              {isPwError && (
                <Text fontSize={"14px"} color={"global.error"}>
                  {errorPw}
                </Text>
              )}
            </Box>
            <Box sx={labelContainer}>
              <label htmlFor="confirm-pass" className='text-vip'>
                <Text className='text_vip' mb={"5px"}>{t("confirm_pass")}<span style={{color: "#ce4242"}}>*</span></Text>
              </label>
              <Input variant={"default"} id='confirm-pass' placeholder={`${t("confirm_pass")}`} fontSize={14} letterSpacing={"1px"}
                type='password'
                autoComplete='none'
                onFocus={() => setIsPwError(true)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setConfirmPass(e.target.value)
                }/>
            </Box>
            <Box sx={labelContainer}>
              <label htmlFor="name" className='text-vip'>
                <Text className='text_vip' mb={"5px"}>{t("same_bank")}<span style={{color: "#ce4242"}}>*</span></Text>
              </label>
              <Input variant={"default"} name={RegistFormEnum.Name} id='name' placeholder={`${t("same_bank")}`} fontSize={14} letterSpacing={"1px"}
                autoComplete='none'
                value={registForm.name}
                onChange={formHandler}/>
              {isError && (
                <Text fontSize={"14px"} color={"global.error"}>
                  {errorForm.name}
                </Text>
              )}
            </Box>
            <Box sx={labelContainer}>
              <label htmlFor="phoneNum" className='text-vip'>
                <Text className='text_vip' mb={"5px"}>{t("mobile_number")}<span style={{color: "#ce4242"}}>*</span></Text>
              </label>
              <InputGroup>
                <InputLeftAddon
                  children={"+" + (tenancy?.areaCode || "")}
                />
                <Input variant={"default"} name={RegistFormEnum.Phone} pattern="[0-9]*" id='phoneNum' placeholder={`${t("mobile_number")}`} fontSize={14} letterSpacing={"1px"}
                  autoComplete='none'
                  value={registForm.phoneNumber}
                  onChange={formHandler}/>
              </InputGroup>
              {isError && (
                <Text fontSize={"14px"} color={"global.error"}>
                  {errorForm.phone}
                </Text>
              )}
            </Box>
            <Box sx={labelContainer}>
              <Checkbox _focusVisible={{outline: "none"}} autoFocus={false} outline={"none"}
              colorScheme="green" isChecked={isHaveReferralCode}
              mb={2}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setIsHaveReferralCode(e.target.checked)
                setRegistForm({
                  ...registForm,
                  ReferralCode: ""
                })
              }} className='text_vip'>
                {t('do_you_have_referral_code')}
              </Checkbox>
              {isHaveReferralCode && <Input
                  variant={"default"} 
                  placeholder={t('referral_required')}
                  name={RegistFormEnum.ReferralCode}
                  value={registForm.ReferralCode}
                  onChange={formHandler}
                />}
            </Box>
            <Flex sx={labelContainer} flexDirection={"row"}>
              <Text fontSize={"0.9rem"} lineHeight={"22.5px"} color={'#b7ffd2'}>
                {t("age_verification")}{" "}
                <span
                  style={{
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    lineHeight: "22.5px",
                    textTransform: "uppercase",
                  }}
                  className='text_vip'
                  onClick={() => {
                    window.open(
                      `../policies/terms`
                    );
                  }}
                >
                  {t("terms_and_condition")}
                </span>
              </Text>
            </Flex>
            {error && (
              <Text fontSize={"14px"} color={"global.error"}>
                {error}
              </Text>
            )}
            <Box sx={labelContainer}>
              <button
                className='login_btn'
                type={"submit"}>
                {isLoading ? <Spinner/> : t("join_now")}
              </button>
            </Box>
          </form>
        </Box>
      </Box>
  )
}

export default Register

const uppercaseRegExp = /(?=.*?[A-Z])/;
const restrictSpecialExp = /(?=.*?[#?!@$%^&*-])/;
const lowercaseRegExp = /(?=.*?[a-z])/;
const digitsRegExp = /(?=.*?[0-9])/;
const minMaxLengthRegExp = /.{8,15}/;

enum RegistFormEnum {
  Username = "userName",
  Password = "password",
  Name = "name",
  Email = "emailAddress",
  Phone = "phoneNumber",
  TenancyName = "dhdemo",
  ReferralCode = "ReferralCode",
}

const labelContainer = {
  w:"100%",
  px:"15px",
  mb:"20px",
}
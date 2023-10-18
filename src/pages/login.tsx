import { Box, Center, Checkbox, Flex, Heading, Image, Input, Link, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import logo from "../../public/images/LuckyMyanmar.png"
import httpClient from '../../http-client/httpClient'
import { useTenancy } from '../../hook/TenancyProvider'
import ClientService from '../../http-client/ClientService'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { accountAction } from '../../redux/account-slice'
import { CloseIcon } from '@chakra-ui/icons'

export default function Login () {
  const [loginForm, setLoginForm] = useState({
    usernameOrEmailAddress: "",
    password: "",
  })
  const [isError, setIsError] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);
  const rememberMe = ClientService.getRememberMe();
  const [isCheckRemember, setIsCheckRemember] = useState(false)
  const tenancy = useTenancy()
  const router = useRouter()
  const {t} = useTranslation()
  const dispatch = useDispatch()

  useEffect(() => {
    setLoginForm({
      usernameOrEmailAddress: rememberMe ? rememberMe.username : "",
      password: rememberMe ? rememberMe.password : "",
    })
    setIsCheckRemember(
      rememberMe ? rememberMe.isCheckRemember : false
    )
  }, []);

  const loginInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({...loginForm, [name]: value });
  };

  const loginHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!loginForm.usernameOrEmailAddress || !loginForm.password) {
      setIsError(t("username_password_required"));
      return;
    }
    setIsLoading(true);
    try {
      const data: any = await httpClient.post("/account/login", {
        ...loginForm,
        TenancyName: tenancy?.tenancyName,
      });
      // dispatch(accountAction.setCheckToken(data.result.token))
      if (data.error) {
        setIsError(data.error.message);
      } else {
        if (isCheckRemember) {
          ClientService.saveRememberMe({
            username: loginForm.usernameOrEmailAddress,
            password: loginForm.password,
            isCheckRemember,
          });
        } else {
          ClientService.unsaveRememberMe();
        }
        if (data.result.token) {
          ClientService.login(data.result.token);
          dispatch(accountAction.setToken(data.result.token))
          router.push("/");
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Box pt={"50px"} pb={"70px"}>
      <Box className='layout'>
        <Box p={"10px 15px"} pb={"30px"} maxW={"550px"} mx={"auto"} pos={"relative"}>
          <CloseIcon color={"white"} pos={'absolute'} top={0} right={"30px"} cursor={'pointer'}
            onClick={() => router.push("/")}/>
          <form onSubmit={loginHandler}>
            <Box m={"20px 0 40px"}>
              <Link onClick={() => router.push("/")}>
                <Image alt='logo' src={logo.src} minW={"160px"} maxW={"240px"} w={"40%"} mx={'auto'}/>
              </Link>
              <Heading as={"h5"} className='text_vip'
                my={"0.8rem"} fontSize={"18px"} fontWeight={500} textAlign={'center'}>{t('login')}</Heading>
            </Box>
            <Box sx={labelContainer}>
              <label htmlFor="user" className='text-vip'>
                <Text className='text_vip' mb={"5px"}>{t('username')}</Text>
              </label>
              <Input variant={"default"} id='user' name={"usernameOrEmailAddress"} placeholder={t('username') + " " + "#"} fontSize={14} letterSpacing={"1px"}
                value={loginForm.usernameOrEmailAddress}
                autoComplete='none'
                onChange={loginInputHandler}/>
            </Box>
            <Box sx={labelContainer}>
              <label htmlFor="password" className='text-vip'>
                <Text className='text_vip' mb={"5px"}>{t('password')}</Text>
              </label>
              <Input variant={"default"} type='password' id='password' name={'password'} placeholder={t('password') + " " + "#"} fontSize={14} letterSpacing={"1px"}
                value={loginForm.password}
                onChange={loginInputHandler}/>
            </Box>
            <Box sx={labelContainer} className='text_vip' >
              <Checkbox fontSize={"14px"}
                colorScheme='blue' outline={"none"}
                isChecked={isCheckRemember}
                onChange={(e) =>
                  setIsCheckRemember(e.target.checked)}>
                {t("Remember")}
              </Checkbox>
            </Box>
            <Box w={"100%"} px={"15px"} pt={"20px"}>
              <button className='login_btn' type={"submit"}>
                {isLoading ? <Spinner/> : t('login')}
              </button>
            </Box>
            {isError && <Text textAlign={'center'} color={"global.error"} mt={"10px"}>{isError}</Text>}
          </form>
        </Box>
        <Box>
          <Center>
            <Link textAlign={'center'} color={'#e6e7ff'} fontSize={"14px"} cursor={'pointer'} mb={2}>
              {t('Forgot_Password')}
            </Link>
          </Center>
          <Flex gap={1} alignItems={'center'} justifyContent={'center'} color={'#e6e7ff'} fontSize={"14px"}>
            <Text>{t('not_a_member')},</Text>
            <Link onClick={() => router.push("/register")}>{t('register')}</Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

const labelContainer = {
  w:"100%",
  px:"15px",
  mb:"20px",
}
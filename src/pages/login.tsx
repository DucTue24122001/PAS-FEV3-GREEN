import { Box, Button, Flex, Heading, Image, Input, Spinner, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "../../public/images/LuckyMyanmar.png"
import httpClient from '../../http-client/httpClient'
import { useTenancy } from '../../hook/TenancyProvider'
import ClientService from '../../http-client/ClientService'
import { useRouter } from 'next/router'

export default function Login () {
  const [loginForm, setLoginForm] = useState({
    usernameOrEmailAddress: "",
    password: "",
  })
  const [isError, setIsError] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);
  const tenancy = useTenancy()
  const router = useRouter()

  const loginInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({...loginForm, [name]: value });
  };

  const loginHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!loginForm.usernameOrEmailAddress || !loginForm.password) {
      setIsError(("username_password_required"));
      return;
    }
    setIsLoading(true);
    try {
      const data: any = await httpClient.post("/account/login", {
        ...loginForm,
        TenancyName: tenancy?.tenancyName,
      });
      if (data.error) {
        setIsError(data.error.message);
      } else {
        if (data.result.token) {
          ClientService.login(data.result.token);
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
        <Box p={"10px 15px"} pb={"30px"} maxW={"550px"} mx={"auto"}>
          <form onSubmit={loginHandler}>
            <Box m={"20px 0 40px"}>
              <Link href={"/"}>
                <Image alt='logo' src={logo.src} minW={"160px"} maxW={"240px"} w={"40%"} mx={'auto'}/>
              </Link>
              <Heading as={"h5"} sx={textVip}
                my={"0.8rem"} fontSize={"18px"} fontWeight={500} textAlign={'center'}>Login</Heading>
            </Box>
            <Box w={"100%"} px={"15px"} mb={"20px"}>
              <label htmlFor="user" className='text-vip'>
                <Text sx={textVip} mb={"5px"}>Username</Text>
              </label>
              <Input variant={"default"} id='user' name={"usernameOrEmailAddress"} placeholder=' Username #' fontSize={14} letterSpacing={"1px"}
                onChange={loginInputHandler}/>
            </Box>
            <Box w={"100%"} px={"15px"} mb={"20px"}>
              <label htmlFor="password" className='text-vip'>
                <Text sx={textVip} mb={"5px"}>Password</Text>
              </label>
              <Input variant={"default"} type='password' id='password' name={'password'} placeholder=' Password #' fontSize={14} letterSpacing={"1px"}
                onChange={loginInputHandler}/>
            </Box>
            <Box w={"100%"} px={"15px"} pt={"20px"}>
              <button className='login_btn' type={"submit"}>
                {isLoading ? <Spinner/> : "LOGIN"}
              </button>
            </Box>
            {isError && <Text textAlign={'center'} color={"global.error"} mt={"10px"}>{isError}</Text>}
          </form>
        </Box>
        <Box>
          <Text textAlign={'center'} color={'#b7ffd2'} fontSize={"14px"} cursor={'pointer'}>
            Forget Password
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

const textVip = {
  textShadow:"0 0 4px #00d741",
  letterSpacing:"1px",
  color:"#fff",
  fontSize: "15px"
}
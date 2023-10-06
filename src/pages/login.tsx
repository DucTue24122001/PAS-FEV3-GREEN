import { Box, Button, Flex, Heading, Image, Input, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import logo from "../../public/images/LuckyMyanmar.png"

export default function Login () {
  return (
    <Box pt={"50px"} pb={"70px"}>
      <Box className='layout'>
        <Box p={"10px 15px"} pb={"30px"} w={"550px"} mx={"auto"}>
          <form>
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
              <Input variant={"default"} id='user' name={"user"} placeholder=' Username #' fontSize={14} letterSpacing={"1px"}/>
            </Box>
            <Box w={"100%"} px={"15px"} mb={"20px"}>
              <label htmlFor="password" className='text-vip'>
                <Text sx={textVip} mb={"5px"}>Password</Text>
              </label>
              <Input variant={"default"} id='password' name={'password'} placeholder=' Password #' fontSize={14} letterSpacing={"1px"}/>
            </Box>
          </form>
          <Box w={"100%"} px={"15px"} pt={"20px"}>
            <button className='login_btn'>
              LOGIN
            </button>
          </Box>
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
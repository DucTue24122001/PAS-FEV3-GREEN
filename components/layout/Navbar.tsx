import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import LuckyMyanmar from "../../public/images/LuckyMyanmar.png"

const Navbar = () => {
  return (
    <Flex w={"100%"} minH={"50px"} boxShadow={"0 1px 1px #20ad59aa"} justifyContent={"space-around"} pos={"fixed"} top={0}>
        <Box></Box>
        <Box>
            <Image p={"5px 0"} h={"50px"} src={LuckyMyanmar.src} alt={"gift"} />
        </Box>
        <Box>

        </Box>
    </Flex>
  )
}

export default Navbar
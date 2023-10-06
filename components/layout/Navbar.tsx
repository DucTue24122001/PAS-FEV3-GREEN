import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import LuckyMyanmar from "../../public/images/LuckyMyanmar.png"
import langUkImg from "../../public/images/lang2-uk.png"
import langMmImg from "../../public/images/lang2-myanmar.png"
import { useRouter } from 'next/router'
import { checkDisableLayoutPage } from '../../util/function'

const Navbar = () => {
  const router = useRouter()

  return (
    <Flex w={"100%"} minH={"50px"} boxShadow={"0 1px 1px #20ad59aa"} justifyContent={"space-around"} pos={"sticky"} top={0}
      bgGradient='linear(to-t, #0e5931, #024921)' zIndex={1000} display={checkDisableLayoutPage(router.pathname) ? "none" : "flex"}>
        <Box>
          <Image p={"5px 0"} h={"50px"} src={LuckyMyanmar.src} alt={"gift"} />
        </Box>
        <Flex pos={"absolute"} right={0} mt={"5px"} gap={"12.5px"}>
          <Image alt='en' src={langUkImg.src} sx={langImg}/>
          <Image alt='mm' src={langMmImg.src} sx={langImg}/>
        </Flex>
    </Flex>
  )
}

export default Navbar

const langImg = {
  boxSize: "40px",
  p: "8px",
  filter: "drop-shadow(0 0 5px #000a)",
  cursor: "pointer"
}
import { Box, Center, Image } from '@chakra-ui/react'
import React, { ChangeEvent, useState } from 'react'
import passwordIco from "../public/images/passwordIco.png"
import showPw from "../public/images/eyeopen.png"
import userIco from "../public/images/user_ico.png"
import hidePw from "../public/images/eyeclose.png"
import styles from "../styles/css/LoginModal.module.css"

type PropsType = {
  value?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  name?: string,
  placeholder?: string,
  pattern?: string,
  image?: any,
  w?: string,
}

export const DefaultInput = ({value, name, onChange, placeholder, pattern, image} : PropsType) => {

  return (
    <Box w={'inherit'} pos={"relative"} mb={"12px"}>
      <input type="text" className={styles.login_input} placeholder={placeholder} pattern={pattern}
        onChange={onChange} name={name} value={value}/>
      {image && <Center pos={'absolute'} h={"100%"} top={0} left={"10px"}>
        <Image alt='user-ico' src={image} boxSize={"34px"}/>
      </Center>}
    </Box>
  )
}

export const DefaultPwInput = ({value, name, onChange, placeholder, pattern} : PropsType) => {
  const [isShowPw, setIsShowPw] = useState(false)

  return (
    <Box w={'inherit'} pos={"relative"} mb={"12px"}>
      <input type={isShowPw ? "text" : "password"} className={styles.login_input} placeholder={placeholder} pattern={pattern}
        onChange={onChange} value={value} name={name}/>
      <Center pos={'absolute'} h={"100%"} top={0} left={"10px"}>
        <Image alt='user-ico' src={passwordIco.src} boxSize={"34px"}/>
      </Center>
      <Center pos={'absolute'} top={0} right={"5px"} h={"100%"} cursor={'pointer'} mr={"8px"} onClick={() => setIsShowPw(!isShowPw)}>
        {isShowPw ? <Image alt='show' src={showPw.src} w={"19px"}/> :
          <Image alt='show' src={hidePw.src} w={"19px"}/>}
      </Center>
    </Box>
  )
}

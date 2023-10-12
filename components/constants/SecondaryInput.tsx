import { Input } from '@chakra-ui/react'
import React from 'react'

type PropsType = {
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  name?: string,
  placeholder?: string,
  pattern?: string,
  isDisabled?: boolean,
  w?: string,
}


const SecondaryInput = ({...props}: PropsType) => {
  return (
    <Input _focusVisible={{outline: "none"}} h={["50px","50px","35px","35px"]}
      border={`1px solid rgba(190,215,239,.6)`} 
      color={"grey.1"} 
      _focus={{border: `1px solid rgba(190,215,239,.6)`}}
      bgColor={"white"} {...props}></Input>
  )
}

export default SecondaryInput
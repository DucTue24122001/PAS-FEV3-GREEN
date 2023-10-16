import { Input } from '@chakra-ui/react'
import React from 'react'

export const DefaultInput = ({...props} : any) => {

  return (
    <Input _fIocusVisible={{outline: "none"}} h={["50px","50px","35px","35px"]}
      border={[`1px solid white`,`1px solid white`,`1px solid #c5d0e2`,`1px solid #c5d0e2`]} 
      color={"rgba(0, 0, 0, 0.87)"} 
      _focus={{border: [`1px solid white`,`1px solid white`,`1px solid #c5d0e2`,`1px solid #c5d0e2`]}}
      bgColor={["#f2f5f9","#f2f5f9","white","white"]} autoComplete="off" {...props}></Input>
  )
}

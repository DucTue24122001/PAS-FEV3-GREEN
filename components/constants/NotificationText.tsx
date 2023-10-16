import { Text } from '@chakra-ui/react'
import React from 'react'

export const ErrorText = ({children, ...props}: any) => {
  return (
    <Text color={"global.error"} fontSize={"sm"} {...props}>{children}</Text>
  )
}
export const SuccessfulText = ({children, ...props}: any) => {
  return (
    <Text color={"green1"} fontSize={"sm"} {...props}>{children}</Text>
  )
}


import { convertDecimalNum } from '@/hook/function'
import { Text } from '@chakra-ui/react'
import React from 'react'
import { ErrorText, SuccessfulText } from './NotificationText'

const CustomizeNumberValue = ({num, ...props}: any) => {
  switch (true) {
    case Number(num) > 0:
      return <SuccessfulText {...props}>{convertDecimalNum(num)}</SuccessfulText>
    case Number(num) < 0:
      return <ErrorText {...props}>{convertDecimalNum(num)}</ErrorText>
    default:
      return <Text {...props}>{convertDecimalNum(num)}</Text>
  }
}

export default CustomizeNumberValue
import { Flex, Progress, Text } from '@chakra-ui/react'
import React from 'react'

const CategoryGameSkeleton = () => {
  return (
    <Flex flexDir={"column"} maxW={"1024px"} mx={'auto'} pt={"40px"} pb={"80px"} gap={3}>
      <Text className='text_vip' textAlign={'center'}>Loading...</Text>
      <Progress size='xs' isIndeterminate />
    </Flex>
  )
}

export default CategoryGameSkeleton
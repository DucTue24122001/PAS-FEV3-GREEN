import { Box, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { BsPaperclip } from 'react-icons/bs'

const FileInput = ({imageInputChange, currentImg}: any) => {
  const onFileInputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {files}: any = e.target
    const file: any = files[0]
    imageInputChange(file)
  }
  const {t} = useTranslation()

  return (
    <label htmlFor='upload-image' style={{width: "100%"}}>
      <Flex w={"100%"} justifyContent={'space-between'} fontSize={"16px"} gap={3} >
      <Flex h={"40px"} minW={"70%"} borderRadius={5} alignItems={'center'} px={"12px"} color={"rgba(0,0,0,.6)"} 
        bgColor={"#f2f5f9"} cursor={'pointer'}
        border={"1px solid white"}>
        <BsPaperclip style={{fontSize: "20px"}}/>
        <Text noOfLines={1} fontSize={"16px"}>{currentImg ? currentImg.name : t('file_size')}</Text>
      </Flex>
      <Center h={"40px"} w={"100%"} borderRadius={5} alignItems={'center'} 
        px={"12px"} color={"rgba(0,0,0,.6)"} bgColor={"#caffe1"} cursor={'pointer'} fontSize={15}>
        <Text textTransform={'uppercase'} fontWeight={600} color={"rgba(0, 0, 0, 0.87)"}>{t('upload')}</Text>
      </Center>
      </Flex>
    <Box>
      <input type="file" id={"upload-image"} accept={"image/*"} style={{display: "none"}} onChange={onFileInputHandle}/>
    </Box>
  </label>
  )
}

export default FileInput
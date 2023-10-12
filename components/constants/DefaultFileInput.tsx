import { Box, Center, Flex, Text } from '@chakra-ui/react'
import React, { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { BsPaperclip } from 'react-icons/bs'

type InputProps = {
  imageInputChange: (file: File) => void
  currentImg: File,
}

const DefaultFileInput = ({imageInputChange, currentImg}: InputProps) => {
  const {t} = useTranslation()

  const onFileInputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const {files}: any = e.target
    const file: any = files[0]
    imageInputChange(file)
  }

  return (
    <label htmlFor='upload-image' style={{width: "100%"}}>
              <Flex w={"100%"} justifyContent={'space-between'} fontSize={"16px"} gap={3} >
              <Flex h={["50px","50px","35px","35px"]} minW={"70%"} borderRadius={5} alignItems={'center'} px={"12px"} color={"rgba(0,0,0,.6)"} 
                bgColor={"white"} cursor={'pointer'}
                border={`1px solid rgba(190,215,239,.6)`}>
                <BsPaperclip style={{fontSize: "20px"}}/>
                <Text fontSize={"16px"}>{currentImg ? currentImg.name : t('file_size')}</Text>
              </Flex>
              <Center h={["50px","50px","35px","35px"]} w={"100%"} borderRadius={5} alignItems={'center'} 
                px={"12px"} color={"white"} bgColor={"blue.12"} cursor={'pointer'} fontSize={15}>
                <Text textTransform={'uppercase'} fontWeight={600}>{t('upload')}</Text>
              </Center>
              </Flex>
            <Box>
              <input type="file" id={"upload-image"} accept={"image/*"} style={{display: "none"}} onChange={onFileInputHandle}/>
            </Box>
    </label>
  )
}

export default DefaultFileInput
import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useRef } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useOutsideClick } from '@/hook/useOutSideClickHover'

export const SelectDropdown = ({dropdownList, isDropdown, openDropdown, closeDropdown, currentSelect, ...props}: any) => {
  const dropdownRef = useRef(null)

  useOutsideClick(dropdownRef, closeDropdown)

  return (
    <Box pos={"relative"} ref={dropdownRef} {...props}>
      <Flex px={"16px"} h={["50px","50px","35px","35px"]} borderRadius={5} justifyContent={'space-between'}
        bgColor={"white"}
        border={`1px solid rgba(190,215,239,.6)`} alignItems={'center'} cursor={'pointer'}
        onClick={openDropdown} overflowX={"hidden"} whiteSpace={'nowrap'} fontSize={14} fontWeight={700}>
        {currentSelect}
        {!isDropdown ? <ChevronDownIcon/> : <ChevronUpIcon/>}
      </Flex>
      {isDropdown && dropdownList && <Box pos={'absolute'} zIndex={5} bgColor={"white"} overflowX={"hidden"} whiteSpace={'nowrap'} w={"100%"} borderRadius={5} py={"8px"} 
        maxH={"300px"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
        {dropdownList}
      </Box>}
    </Box>
  )
}

export const DropdownItem = ({currentId, id, children, ...props}: any) => {
  return (
    <Flex px={"16px"} h={'50px'} alignItems={"center"} w={"100%"} 
            fontSize={14} fontWeight={700} cursor={'pointer'}
            _hover={{bgColor: currentId === id ? "blue.11" : "grey.2"}} transition={".3s"} 
            id={id}
            color={currentId === id ? "blue.12" : "grey.1"}
            bg={currentId === id ? "blue.11" : "white"}
            {...props}>
              {children}
    </Flex>
  )
}
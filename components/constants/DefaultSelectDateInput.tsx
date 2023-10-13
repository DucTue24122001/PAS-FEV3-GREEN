/* eslint-disable react/no-children-prop */
import { useOutsideClick } from '@/hook/useOutSideClickHover'
import { Box, InputGroup, InputRightElement } from '@chakra-ui/react'
import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import SecondaryInput from './SecondaryInput'
import DefaultCalendar from './DefaultCalendar'
import format from 'date-fns/format'
import { AiOutlineCalendar } from 'react-icons/ai'

type SelectDateInputType = {
  selectDate: (date: any) => void,
  customizeDate?: {
    startDate: string,
    endDate: string,
  },
  isSearchMonth?: boolean,
  w?: any,
}

const DefaultSelectDateInput = ({selectDate, isSearchMonth, customizeDate, ...props}: SelectDateInputType) => {
  const calendarRef = useRef(null)
  const [isShowCalendar, setIsShowCalendar] = useState(false)
  const [currentDateInput, setCurrentDateInput] = useState(`${moment().startOf('week').format("DD/MM/YYYY")} ~ ${moment().format("DD/MM/YYYY")}`)
  const disableDropdown = () => {
    setIsShowCalendar(false)
  }
  
  useEffect(() => {
    if (customizeDate) {
      setCurrentDateInput(`${customizeDate.startDate} ~ ${customizeDate.endDate}`)
    }
  }, [customizeDate])

  useOutsideClick(calendarRef, disableDropdown)

  const selectDateHandler = (date: any) => {
    const startDate = new Date(date[0])
    const endDate = new Date(date[1])
    setCurrentDateInput(`${format(startDate, 'dd/MM/yyyy')} ~ ${format(endDate, 'dd/MM/yyyy')}`)
    setIsShowCalendar(false)
    if (selectDate) {
      selectDate(date)
    }
  }

  return (
    <Box position={"relative"} ref={calendarRef} {...props}>
      <InputGroup onClick={() => setIsShowCalendar(true)}>
        <SecondaryInput value={currentDateInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentDateInput(e.target.value)}/>
        <InputRightElement h={["50px","50px","35px","35px"]} children={<AiOutlineCalendar/>}/>
      </InputGroup>
      {isShowCalendar && <DefaultCalendar isSearchMonth={isSearchMonth} confirmDate={selectDateHandler}/>}
    </Box>
  )
}


export default DefaultSelectDateInput
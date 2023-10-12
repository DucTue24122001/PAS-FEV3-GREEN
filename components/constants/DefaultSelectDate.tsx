/* eslint-disable react/no-children-prop */
import { Box, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import DefaultCalendar from './DefaultCalendar'
import moment from 'moment'
import { useOutsideClick } from '../../util/useOutsideHandler'
import {AiOutlineCalendar} from "react-icons/ai"

const DefaultSelectDate = ({selectDate, isSearchMonth, ...props}: any) => {
  const calendarRef = useRef(null)
  const [isShowCalendar, setIsShowCalendar] = useState(false)
  const [currentDateInput, setCurrentDateInput] = useState(`${moment().startOf('week').format("YYYY-MM-DD")} ~ ${moment().format("YYYY-MM-DD")}`)
  const disableDropdown = () => {
    setIsShowCalendar(false)
  }

  useOutsideClick(calendarRef, disableDropdown)

  const selectDateHandler = (date: any) => {
    const startDate = new Date(date[0])
    const endDate = new Date(date[1])
    setCurrentDateInput(`${moment(startDate).format('YYYY-MM-DD')} ~ ${moment(endDate).format('YYYY-MM-DD')}`)
    setIsShowCalendar(false)
    if (selectDate) {
      selectDate(date)
    }
  }
  
  return (
    <Box position={"relative"} ref={calendarRef} {...props}>
      <InputGroup color={"#aeaeae"} onClick={() => setIsShowCalendar(true)}>
        <input className='default_input' value={currentDateInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentDateInput(e.target.value)}/>
        <InputRightElement h={["50px","50px","35px","35px"]} children={<AiOutlineCalendar/>}/>
      </InputGroup>
      {isShowCalendar && <DefaultCalendar position={"absolute"} isSearchMonth={isSearchMonth} confirmDate={selectDateHandler}/>}
    </Box>
  )
}

export default DefaultSelectDate
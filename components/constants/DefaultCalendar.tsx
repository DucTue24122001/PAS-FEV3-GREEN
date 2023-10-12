import { searchingDateValue } from '@/hook/function'
import { Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { useTranslation } from 'react-i18next'

type CalendarType = {
  confirmDate: (date: any) => void,
  isSearchMonth?: boolean,
}

const DefaultCalendar = ({confirmDate, isSearchMonth, ...props}: CalendarType) => {
  const [date, setDate] = useState<any>([searchingDateValue.thisWeek._d ,new Date()])
  const {t} = useTranslation()

  return (
    <Flex {...props} zIndex={10} bgColor={"white"} flexDir={['column','row','row','row']} borderRadius={5} border={`1px solid #4d595e`} position={"absolute"}>
      <Flex fontSize={14} gap={[5,0,0,0]} w={["300px","100px","100px","100px"]} p={3} flexDir={['row','column','column','column']} overflow={'auto'}>
        <Text sx={dateButton} onClick={() => setDate([new Date(), new Date()])}>{t('today')}</Text>
        <Text sx={dateButton} onClick={() => setDate([searchingDateValue.yesterday._d, searchingDateValue.yesterday._d])}>{t('yesterday')}</Text>
        <Text sx={dateButton} onClick={() => setDate([searchingDateValue.thisWeek._d, new Date()])}>{t('this_week')}</Text>
        <Text sx={dateButton} onClick={() => setDate([searchingDateValue.startLastWeek._d, searchingDateValue.endLastWeek._d])}>{t('last_week')}</Text>
        <Text sx={dateButton} onClick={() => setDate([searchingDateValue.month._d, new Date()])} display={isSearchMonth ? "block" : "none"}>{t('this_month')}</Text>
        <Text sx={dateButton} onClick={() => setDate([searchingDateValue.startLastMonth._d, searchingDateValue.endLastMonth._d])} display={isSearchMonth ? "block" : "none"}>
        {t('last_month')}
        </Text>
      </Flex>
      <Flex borderLeft={`1px solid #caddee`} flexDir={'column'}>
      <Calendar selectRange={true}
        onChange={setDate}
        value={date}
        maxDate={new Date()}/>
        <Flex p={2} justifyContent={'flex-end'}>
          <button className='default_button' onClick={() => confirmDate(date)}>
            {t('ok')}
          </button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DefaultCalendar

const dateButton = {
  cursor: "pointer",
  minW: "fit-content"
}

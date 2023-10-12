import React from 'react'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import moment from 'moment'
import { checkStatusColor, convertMoney } from '../../util/function'
import { RecordStatusEnum } from '../../util/enum'

const ResponsiveRecordDisplay = ({currentPage}: any) => {
  const {recordList, isFetchingRecord} = useSelector((state: RootState) => state.account)
  const {t} = useTranslation()

  if(recordList.length === 0) {
    return !isFetchingRecord ? <Text fontStyle={"italic"} fontSize={15}>{t('there_is_no_record')}</Text> : <Spinner/>
  }

  return (
    <Box className='text_vip'>
      {!isFetchingRecord ? recordList.map((record: any, i: number) => (
        <Flex my={"15px"} key={i}>
            <Flex w={"100%"} borderBottom={`1px solid #c6c6c6`} px={"5px"} pb={"15px"}>
            <Text w={"20px"}>{((currentPage - 1) * 10) + (i + 1)}.</Text>
            <Flex flexDir={'column'} w={"100%"}>
              <Flex justifyContent={"space-between"} alignItems={'center'}>
                <Text minW={"33%"}>{moment.utc(record.creationTime, "YYYY-MM-DDTHH:mm:ss").local().format('DD/MM/YYYY HH:mm:ss')}</Text>
                <Text minW={"33%"} textAlign={"center"} color={checkStatusColor(record.status)}>{record.status}</Text>
                <Text minW={"33%"} textAlign={"end"} fontWeight={'500'} color={checkStatusColor(record.type)} 
                fontFamily={"Teko,sans-serif"} fontSize={["18px","20px","24px","24px"]}>
                  {record.type.split("_").some((item: any) => (item === RecordStatusEnum.DEPOSIT || item === RecordStatusEnum.PROMOTION)) ? "+" : "-"}{" "}{convertMoney(record.amountChange.toString())}  {record.currency}
                </Text>
              </Flex>
              <Text>Code: <span style={{fontWeight: 'bold'}}>{record.transCode}</span></Text>
              <Text>Type: <span style={{fontWeight: 'bold'}}>{record.type}</span></Text>
            </Flex>
          </Flex>
        </Flex>
        )) : <Spinner/>
        }
    </Box>
  )
}

export default ResponsiveRecordDisplay
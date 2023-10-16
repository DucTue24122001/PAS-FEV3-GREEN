import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import DefaultTable from '../constants/DefaultTable'
import { Spinner, Td, Text, Th, Tr } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import { checkStatusColor, convertMoney } from '../../util/function'
import { RecordStatusEnum } from '../../util/enum'

type PropsType = {
  currentPage: number,
}

const RecordTableDisplay = ({currentPage}: PropsType) => {
  const {recordList, isFetchingRecord} = useSelector((state: RootState) => state.account)
  const {t} = useTranslation()

  if (recordList.length === 0) {
    return (
      <DefaultTable thead={
            <Tr>
              <Th color={"white"}>{t('no')}</Th>
              <Th color={"white"} >{t('date_time')}</Th>
              <Th color={"white"}>{t('code')}</Th>
              <Th color={"white"}>{t('type')}</Th>
              <Th color={"white"}>{t('status')}</Th>
              <Th color={"white"} textAlign={"center"}>{t('amount')}</Th>
            </Tr>}
            tbody={
              !isFetchingRecord ? 
              <Tr>
                <Td>
                  <Text fontStyle={"italic"}>{t('there_is_no_record')}</Text>
                </Td>
              </Tr>
              :
              <Tr>
                <Td>
                  <Spinner/>
                </Td>
              </Tr>
            }
            />
    )
  }
  return (
    <DefaultTable
          thead={
            <Tr>
              <Th color={'white'}>S.No</Th>
              <Th color={'white'}>{t('date_time')}</Th>
              <Th color={'white'}>{t('code')}</Th>
              <Th color={'white'}>{t('type')}</Th>
              <Th color={'white'}>{t('status')}</Th>
              <Th textAlign={"center"} color={'white'}>{t('amount')}</Th>
            </Tr>
          }
          tbody={!isFetchingRecord ? recordList.map((record: any, i: number) => (
            <Tr key={i}>
              <Td>{((currentPage - 1) * 10) + (i + 1)}</Td>
              <Td>{moment.utc(record.creationTime, "YYYY-MM-DDTHH:mm:ss").local().format('DD/MM/YYYY HH:mm:ss')}</Td>
              <Td>{record.transCode}</Td>
              <Td>{record.type}</Td>
              <Td>
                <Text fontSize={16} color={checkStatusColor(record.status)}>
                  {record.status}
                </Text>
              </Td>
              <Td>
                <Text color={checkStatusColor(record.type)} fontSize={"24px"} textAlign={"end"} fontWeight={'500'} fontFamily={"Teko,sans-serif"}>
                  {record.type.split("_").some((item: any) => (item === RecordStatusEnum.DEPOSIT || item === RecordStatusEnum.PROMOTION)) ? "+" : "-"}{" "}{" "}
                  {convertMoney(record.amountChange.toString())} {record.currency}
                </Text>
              </Td>
            </Tr>
          )) : <Tr>
          <Td>
            <Spinner/>
          </Td>
      </Tr>}/>
      )
}

export default RecordTableDisplay
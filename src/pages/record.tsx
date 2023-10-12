import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import DefaultSelectDate from '../../components/constants/DefaultSelectDate'
import Pagination from '../../components/constants/pagination/Pagination'
import RecordTableDisplay from '../../components/record/RecordTableDisplay'
import { useDispatch } from 'react-redux'
import { accountAction } from '../../redux/account-slice'
import httpClient from '../../http-client/httpClient'
import moment from 'moment'
import ResponsiveRecordDisplay from '../../components/record/ResponsiveRecordDisplay'
import { useBreakpoint } from '../../hook/useBreakpoint'

const Record = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [startDateRecord, setStartDateRecord] = useState(`${moment().startOf("week").format("YYYY-MM-DD")}`)
  const [endDateRecord, setEndDateRecord] = useState(`${moment().format("YYYY-MM-DD")}`)
  const [paymentTypeValue, setPaymentTypeValue] = useState("")
  const [transactionTypeValue, setTransactionTypeValue] = useState("")
  const pageSize = 10
  const dispatch = useDispatch()
  const isBreakpoint = useBreakpoint(900)

  useEffect(() => {
    (async () => {
      dispatch(accountAction.fetchingRecordHandler(true))
      try {
        const res: any = await httpClient.post("/services/app/transaction/GetTransactionByUserId", {
          transactionType: transactionTypeValue,
          paymentType: paymentTypeValue,
          transactionFrom: startDateRecord,
          transactionTo: endDateRecord,
          skipCount: (currentPage - 1) * pageSize,
          maxResultCount: pageSize,
        })
        if (res.success) {
          setTotalCount(res.result.totalCount)
          dispatch(accountAction.setRecordList(res.result.items))
        }
      } catch (err) {
        console.log(err);
      } finally {
        dispatch(accountAction.fetchingRecordHandler(false))
      }
    })()
  }, [currentPage, startDateRecord, endDateRecord, paymentTypeValue, transactionTypeValue])

  const selectDateHandler = (dateValue: any) => {
    const startDate = new Date(dateValue[0])
    const endDate = new Date(dateValue[1])
    
    setStartDateRecord(`${moment(startDate).format("YYYY-MM-DD")}`)
    setEndDateRecord(`${moment(endDate).format("YYYY-MM-DD")}`)
    setCurrentPage(1)
  }

  const selectTransactionType = (type: string) => {
    setTransactionTypeValue(type)
    setCurrentPage(1)
  }
  const selectPaymentType = (type: string) => {
    setPaymentTypeValue(type)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <Box borderBottom={"1px dotted #caffe1"} mb={"50px"} overflow={"auto"}>
      <Box className='layout'>
        <Box maxW={"550px"} p={"10px 15px"} mx={"auto"}>
          <Box mt={"20px"} >
            <Text pb={"12.7px"} alignItems={'center'}
              color={"#caffe1"} fontSize={"22px"} fontWeight={500} textAlign={'center'}>
              RECORD
            </Text>
          </Box>
          <Box mb={"30px"}>
            <Text className='text_vip' mb={"5px"} fontSize={14}>Transaction Type</Text>
            <select className='default_select' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => selectTransactionType(e.target.value)}>
              <option className='default_option' value={""}>All</option>
              <option className='default_option' value={PaymentTypeEnum.Accept}>Accept</option>
              <option className='default_option' value={PaymentTypeEnum.Reject}>Reject</option>
              <option className='default_option' value={PaymentTypeEnum.Pending}>Pending</option>
            </select>
          </Box>
          <Box mb={"30px"}>
            <Text className='text_vip' mb={"5px"} fontSize={14}>Transaction Type</Text>
            <DefaultSelectDate isSearchMonth={true} selectDate={selectDateHandler}/>
          </Box>
          <Box mb={"30px"}>
            <Text className='text_vip' mb={"5px"} fontSize={14}>Payment Type</Text>
            <select className='default_select' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => selectPaymentType(e.target.value)}>
              <option className='default_option' value={""}>All</option>
              <option className='default_option' value={TransactionTypeEnum.DEPOSIT}>Deposit</option>
              <option className='default_option' value={TransactionTypeEnum.WITHDRAW}>Withdraw</option>
              <option className='default_option' value={TransactionTypeEnum.PROMOTION}>Promotion</option>
            </select>
          </Box>
        </Box>
      </Box>
      <Box className='layout'>
        {isBreakpoint ? <ResponsiveRecordDisplay currentPage={1}/> : <RecordTableDisplay currentPage={1}/>}
      </Box>
      <Flex justifyContent={'center'} mb={20} flexWrap={"wrap"}>
        <Pagination
        pageSize={pageSize}
        totalCount={totalCount}
        currentPage={currentPage}
        onPageChange={(page: any) => handlePageChange(page)}/>
      </Flex>
    </Box>
  )
}

export default Record

enum TransactionTypeEnum {
  DEPOSIT = "DEPOSIT",
  WITHDRAW = "WITHDRAW",
  PROMOTION = "PROMOTION"
}

enum PaymentTypeEnum {
  Accept = "ACCEPT",
  Reject = "REJECT",
  Pending = "PENDING",
}
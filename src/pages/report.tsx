import { Box, Spinner, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import DefaultSelectDate from '../../components/constants/DefaultSelectDate'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from '../../hook/useBreakpoint'
import { ReportShowEnum, transactionReportAction } from '../../redux/transaction-report-slice'
import httpClient from '../../http-client/httpClient'
import { RootState } from '../../redux/store'
import { checkIsTimeoutToken } from '../../util/function'
import { useRouter } from 'next/router'
import DesktopReportDisplay from '../../components/transaction-report/DesktopReportDisplay'
import moment from 'moment'
import MobileReportDisplay from '../../components/transaction-report/MobileReportDisplay'

const isHaftTime = moment().utc().add("h", 1).format("DD/MM/YYYY HH:mm:ss") >= moment().startOf('day').utc().add("h", 12).format("DD/MM/YYYY HH:mm:ss")

const Report = () => {
  const {startDateReport, endDateReport, isFetching} = useSelector((state: RootState) => state.report)
  const dispatch = useDispatch()
  const toast = useToast()
  const {t} = useTranslation()
  const mobileBreakpoint = useBreakpoint(950)
  const router = useRouter()
  const [searchDatePeriod, setSearchDatePeriod] = useState({
    start: `${isHaftTime ? moment().utc().startOf("week").format("YYYY-MM-DD") : moment().utc().startOf("week").subtract(1, "d").format("YYYY-MM-DD")}`,
    end: `${isHaftTime ? moment().utc().format("YYYY-MM-DD") : moment().utc().subtract(1, 'd').format("YYYY-MM-DD")}`
  })

  const resetState = () => {
    dispatch(transactionReportAction.handleToggleShowPlatformAndGame(ReportShowEnum.PLATFORM))
    dispatch(transactionReportAction.setCurrentPage(1))
    dispatch(transactionReportAction.setTotalCount(0))
  }

  useEffect(() => {
    resetState()
    if (mobileBreakpoint) {
      dispatch(transactionReportAction.setPagesize(20))
    } else {
      dispatch(transactionReportAction.setPagesize(100))
    }
  },[mobileBreakpoint])

  useEffect(() => {
    (async () => {
      dispatch(transactionReportAction.handleFetchingData(true))
      try {
        const res: any = await httpClient.post("/services/app/report/GetReportWinLossClient", {
          StartDate: startDateReport,
          EndDate: endDateReport,
        })
        if (res.success) {
          const transactionInfo = res.result
          dispatch(transactionReportAction.setTotalTransitionInfo(transactionInfo.data))
          dispatch(transactionReportAction.setGrandTotalInfo({
            totalProfitLoss: transactionInfo.totalProfitLoss,
            totalTurnover: transactionInfo.totalTurnover,
            totalWinloss: transactionInfo.totalWinloss,
          }))
        } else {
          toast({
            status: "error",
            title: res.error.message
          })
        }
      } catch (err: any) {
        console.log(err);
        checkIsTimeoutToken(err, router)
        toast({
          status: "error",
          title: err?.response?.data?.error?.message || t('something_went_wrong'),
        })
      } finally {
        dispatch(transactionReportAction.handleFetchingData(false))
      }
    })()
  }, [startDateReport, endDateReport])

  const selectDateHandler = (date: any) => {
    const startDate = moment(new Date(date[0])).format('yyyy-MM-DD')
    const endDate = moment(new Date(date[1])).format('yyyy-MM-DD')
    if (isHaftTime) {
      setSearchDatePeriod({
        start: startDate,
        end: endDate
      })
    } else {
      setSearchDatePeriod({
        start: moment(new Date(date[0])).subtract(1, 'd').format('yyyy-MM-DD'),
        end: moment(new Date(date[1])).subtract(1, 'd').format('yyyy-MM-DD')
      })
    }
    dispatch(transactionReportAction.setSearchingDateReport({startDate, endDate}))
  }

  return (
    <Box className='layout' minH={"100vh"}>
      <Box mt={"20px"} mb={"40px"}>
        <Text pt={"16px"} pb={"12.7px"} alignItems={'center'}
          color={"#caffe1"} fontSize={"22px"} fontWeight={500} textAlign={'center'}>
          {t("transaction_report")}
        </Text>
      </Box>
      <Box maxW={"550px"} p={"10px 15px"} mx={"auto"} mb={"30px"}>
        <Text className='text_vip' mb={"5px"} fontSize={14}>{t("transaction_period")}</Text>
        <DefaultSelectDate isSearchMonth={false} selectDate={selectDateHandler}
          customizeDate={{startDate: searchDatePeriod.start, endDate: searchDatePeriod.end}}/>
      </Box>
      <DesktopReportDisplay/>
      {isFetching ? <Spinner display={["block","block","none","none"]} ml={4} color='white'/> : <MobileReportDisplay/>}
    </Box>
  )
}

export default Report
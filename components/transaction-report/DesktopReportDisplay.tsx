import { Flex, Spinner, useToast } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Pagination from '../constants/pagination/Pagination'
import { ReportShowEnum, transactionReportAction } from '../../redux/transaction-report-slice'
import { useRouter } from 'next/router'
import httpClient from '../../http-client/httpClient'
import { checkIsTimeoutToken } from '../../util/function'
import PlatformList from './desktop-display/PlatformList'
import DetailGameReportList from './desktop-display/DetailGameReportList'

const DesktopReportDisplay = () => {
  const {isFetching, toggleShowPlatformAndGame, pageSize, totalCount, currentPage, startDateReport, endDateReport, currentPlatformName} = useSelector((state: RootState) => state.report)
  const router = useRouter()
  const toast = useToast()
  const {t}= useTranslation()
  const dispatch = useDispatch()

  const onPageChange = async (page: number) => {
    dispatch(transactionReportAction.handleFetchingData(true))
    dispatch(transactionReportAction.setCurrentPage(page))
    try {
      const res: any = await httpClient.post("/services/app/report/GetTnxHistoryClient", {
        platform: currentPlatformName,
        StartDate: startDateReport,
        EndDate: endDateReport,
        skipCount: (page - 1) * pageSize,
        maxResultCount: pageSize
      })
      if (res.success) {
        dispatch(transactionReportAction.setTotalGameReportInfo(res.result.data))
        dispatch(transactionReportAction.setTotalCount(res.result.totalCount))
      } else {
        toast({
          status: "error",
          title: res.error.message,
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
  }

  return (
    <Flex pt={5} pb={20} w={'inherit'} display={["none","none","flex","flex"]} flexDir={'column'} gap={5}>
      <Spinner color='white' display={isFetching ? "block" : "none"}/>
      {toggleShowPlatformAndGame === ReportShowEnum.PLATFORM ? <PlatformList/> : <DetailGameReportList/>}
      {toggleShowPlatformAndGame === ReportShowEnum.GAME && 
      <Flex alignSelf={"center"}>
      <Pagination
        pageSize={pageSize}
        totalCount={totalCount}
        currentPage={currentPage}
        onPageChange={(page: number) => onPageChange(page)}
        />
      </Flex>}
    </Flex>
  )
}

export default DesktopReportDisplay
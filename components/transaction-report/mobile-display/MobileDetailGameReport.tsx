import { ChevronRightIcon } from '@chakra-ui/icons'
import { Center, Flex, Text, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store';
import { transactionReportAction } from '../../../redux/transaction-report-slice';
import httpClient from '../../../http-client/httpClient';
import { checkIsTimeoutToken, convertDecimalNum } from '../../../util/function';
import CustomizeNumberValue from '../../constants/CustomizeValueNumber';
import Pagination from '../../constants/pagination/Pagination';

const MobileDetailGameReport = () => {
  const {totalGameProfitLoss} = useSelector((state: RootState) => state.report)
  const {currentPlatformName, totalCount, totalGameReportInfo, currentPage, pageSize, startDateReport, endDateReport} = useSelector((state: RootState) => state.report)
  const dispatch = useDispatch()
  const router = useRouter()
  const toast = useToast()
  const {t} = useTranslation()

  const getInfoGameReport = (report: any) => {
    dispatch(transactionReportAction.handleShowDetailModal(true))
    dispatch(transactionReportAction.setCurrentGameReport(report))
  }

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
        dispatch(transactionReportAction.setTotalGameProfitLoss(res.result.totalProfitLoss))
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
    <Flex flexDir={'column'} w={"100%"}>
      <Flex sx={headMobileReport}>
        <Text>{t('profit_loss')}</Text>
        <CustomizeNumberValue num={totalGameProfitLoss} fontSize={16}/>
      </Flex>
      <Flex sx={tableMobileReport} className='text_vip'>
        <Text sx={tableItem} >{t('round')}</Text>
        <Text sx={tableItem} textAlign={"center"}>{t('gametype')}</Text>
        <Text sx={tableItem} textAlign={"end"}>{t('turnovers')}</Text>
        <Text sx={tableItem} textAlign={"end"}>P/L</Text>
      </Flex>
      {totalGameReportInfo.map((gameReport: any, i) => (
      <Flex sx={tableMobileReport} cursor={'pointer'} key={i} onClick={() => getInfoGameReport(gameReport)} className='text_vip'>
          <Text sx={tableItem} textTransform={"uppercase"}>{gameReport.roundId || gameReport.platformTxId}</Text>
          <Center sx={tableItem}>
            <Text>{gameReport.gameType}</Text>
          </Center>
          <Center sx={tableItem}>
            <Text maxW={"75px"}>{convertDecimalNum(gameReport.betAmt)}</Text>
          </Center>
          <Flex sx={tableItem} justifyContent={"flex-end"} alignItems={'center'}>
            <CustomizeNumberValue maxW={"75px"} fontSize={14} num={gameReport.winLoss}/>
            <ChevronRightIcon/>
          </Flex>
      </Flex>
      ))}
      <Flex mt={5} alignSelf={"center"}>
        <Pagination
        pageSize={pageSize}
        totalCount={totalCount}
        currentPage={currentPage}
        onPageChange={(page: number) => onPageChange(page)}/>
      </Flex>
    </Flex>
  )
}

export default MobileDetailGameReport

const headMobileReport = {
  p: "14px",
  color: "#9E9E9E",
  fontSize: 16,
  alignItems: 'center',
  justifyContent: 'space-between',
  bgColor: "#efeae0",
}

const tableMobileReport = {
  p: "13px",
  justifyContent: 'space-between',
  fontSize: "14px",
  borderBottom: `1px solid #c6c6c6`,
}

const tableItem = {
  flex: "1 1 25%",
  maxW: "25%",
}
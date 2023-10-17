import { ChevronRightIcon } from '@chakra-ui/icons'
import { Flex, Text, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store';
import { ReportShowEnum, transactionReportAction } from '../../../redux/transaction-report-slice';
import httpClient from '../../../http-client/httpClient';
import { checkIsTimeoutToken, convertDecimalNum } from '../../../util/function';
import CustomizeNumberValue from '../../constants/CustomizeValueNumber';

const MobilePlatformList = () => {
  const {grandTotalInfo, totalTransitionInfo, startDateReport,endDateReport, currentPage, pageSize} = useSelector((state: RootState) => state.report)
  const toast = useToast({
    duration: 3000,
    isClosable: true,
  })
  const router = useRouter()
  const dispatch = useDispatch()
  const {t} = useTranslation()

  const getInfoPlatformReport = async (report: any) => {
    dispatch(transactionReportAction.handleFetchingData(true))
    dispatch(transactionReportAction.handleToggleShowPlatformAndGame(ReportShowEnum.GAME))
    dispatch(transactionReportAction.setCurrentPlatformName(report.platform))
    try {
      const res: any = await httpClient.post("/services/app/report/GetTnxHistoryClient", {
        platform: report.platform,
        StartDate: startDateReport,
        EndDate: endDateReport,
        skipCount: (currentPage - 1) * pageSize,
        maxResultCount: pageSize
      })
      if (res.success) {
        dispatch(transactionReportAction.setTotalGameReportInfo(res.result.data))
        dispatch(transactionReportAction.setTotalCount(res.result.totalCount))
        dispatch(transactionReportAction.setTotalGameProfitLoss(res.result.totalProfitLoss))
      } else {
        dispatch(transactionReportAction.handleToggleShowPlatformAndGame(ReportShowEnum.GAME))
        toast({
          status: "error",
          title: res.error.message,
        })
      }
    } catch (err: any) {
      console.log(err);
      dispatch(transactionReportAction.handleToggleShowPlatformAndGame(ReportShowEnum.GAME))
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
        <CustomizeNumberValue num={grandTotalInfo.totalProfitLoss} fontSize={16}/>
      </Flex>
      <Flex sx={tableMobileReport} className='text_vip'>
        <Text sx={tableItem}>{t('gametype')}</Text>
        <Text sx={tableItem} textAlign={"end"}>{t('turnovers')}</Text>
        <Text sx={tableItem} textAlign={"end"}>{t('profit_loss')}</Text>
      </Flex>
      {totalTransitionInfo.length !== 0 ? totalTransitionInfo.map((report: any, i: number) => (
      <Flex sx={tableMobileReport} cursor={'pointer'} key={i} onClick={() => getInfoPlatformReport(report)} className='text_vip'>
        <Text sx={tableItem} textTransform={"uppercase"}>{report.platform}</Text>
        <Text sx={tableItem} textAlign={"end"}>{convertDecimalNum(report.turnover)}</Text>
        <Flex sx={tableItem} justifyContent={"flex-end"} alignItems={'center'}>
          <CustomizeNumberValue maxW={"100px"} fontSize={14} num={report.winloss}/>
          <ChevronRightIcon/>
        </Flex>
      </Flex>
      )) : <Text p={4} fontSize={14} fontStyle={"italic"} className='text_vip'>{t('there_is_no_report')}</Text>}
      </Flex>
  )
}

export default MobilePlatformList


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
  flex: "1 1 0px",
}
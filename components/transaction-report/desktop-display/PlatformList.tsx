import { Link, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store';
import { ReportShowEnum, transactionReportAction } from '../../../redux/transaction-report-slice';
import httpClient from '../../../http-client/httpClient';
import { checkIsTimeoutToken, convertDecimalNum } from '../../../util/function';
import CustomizeNumberValue from '../../constants/CustomizeValueNumber';

const PlatformList = () => {
  const {isFetching, totalTransitionInfo, grandTotalInfo, startDateReport, endDateReport, pageSize, currentPage} = useSelector((state: RootState) => state.report)
  const router = useRouter()
  const toast = useToast({
    duration: 3000,
    isClosable: true,
  })
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
    <TableContainer borderRadius={5} w={'100%'} borderBottom={`1px solid #c6c6c6`}
        display={isFetching ? "none" : "block"}>
        <Table size='sm'>
          <Thead bgColor={"#f2f5f9"}>
            <Tr>
              <Th sx={tHead}>{t('game_platform')}</Th>
              <Th sx={tHead}>{t("turnovers")}</Th>
              <Th sx={tHead}>{t('win_loss')}</Th>
              <Th sx={tHead}>{t('commision')}</Th>
              <Th sx={tHead}>{t('profit_loss')}</Th>
            </Tr>
          </Thead>
          <Tbody className='text_vip'>
            {totalTransitionInfo.length !== 0 ? totalTransitionInfo.map((report: any, i) => (
            <Tr _hover={{bgColor: "#fff7f2"}} key={i} transition={".3s"}>
              <Td>
                <Link color={'#b7ffd2'} fontStyle={"italic"}
                  onClick={() => getInfoPlatformReport(report)}
                >{report.platform}</Link>
              </Td>
              <Td textAlign={"end"}>
                {convertDecimalNum(report.turnover)}
              </Td>
              <Td textAlign={"end"}>
                <CustomizeNumberValue num={report.winloss}/>
              </Td>
              <Td textAlign={"end"}>
                <CustomizeNumberValue num={("0.00")}/>
              </Td>
              <Td textAlign={"end"}>
                <CustomizeNumberValue num={report.winloss}/>
              </Td>
            </Tr>
            )) : <Tr>
                <Td fontSize={16} fontStyle={"italic"}>{t('there_is_no_report')}</Td>
              </Tr>}
          </Tbody>
          <Tfoot border={`1px solid #c6c6c6`} bgColor={"#f2f5f9"}>
              <Tr>
                <Td sx={tFootItem}>
                  {t('grand_total')}
                </Td>
                <Td sx={tFootItem}>
                  {convertDecimalNum(grandTotalInfo.totalTurnover)}
                </Td>
                <Td sx={tFootItem}>
                  <CustomizeNumberValue num={grandTotalInfo.totalWinloss}/>
                </Td>
                <Td sx={tFootItem}>
                  0
                </Td>
                <Td sx={tFootItem}>
                  <CustomizeNumberValue num={grandTotalInfo.totalProfitLoss}/>
                </Td>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
  )
}

export default PlatformList

const tHead = {
  textAlign: "center",
  border: "1px solid #979797",
}

const icon = {
  fontSize: "18px",
  cursor: "pointer"
}

const tFootItem = {
  p: 1,
  pr: 4,
  fontWeight: 600,
  fontSize: 16,
  textAlign: "end",
}
import React from 'react'
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { RootState } from '../../../redux/store'
import { convertDecimalNum } from '../../../util/function'
import CustomizeNumberValue from '../../constants/CustomizeValueNumber'

const DetailGameReportList = () => {
  const {isFetching, totalGameReportInfo, currentPage, pageSize} = useSelector((state: RootState) => state.report)
  const {t} = useTranslation()

  return (
    <TableContainer borderRadius={5} w={'100%'} borderBottom={`1px solid #c6c6c6`}
        display={isFetching ? "none" : "block"}>
      <Table size='sm'>
          <Thead bgColor={"#f2f5f9"}>
            <Tr>
              <Th sx={tHead}>{t('no')}</Th>
              <Th sx={tHead}>{t('user_id')}</Th>
              <Th sx={tHead}>{t('bet_time')}</Th>
              <Th sx={tHead}>{t('biz_date')}</Th>
              <Th sx={tHead}>{t('round')}</Th>
              <Th sx={tHead}>{t('gametype')}</Th>
              {/* <Th sx={tHead}>{t('result')}</Th> */}
              <Th sx={tHead}>{t('stake')}</Th>
              <Th sx={tHead}>{t('turnovers')}</Th>
              <Th sx={tHead}>{t('win')}</Th>
              <Th sx={tHead}>{t('win_loss')}</Th>
              <Th sx={tHead}>{t('comm')}</Th>
              <Th sx={tHead}>{t('p_l')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {totalGameReportInfo.map((gameReport: any, i: number) => (
              <Tr _hover={{bgColor: "#fff7f2"}} key={i} transition={".3s"}>
                <Td textAlign={'center'} maxW={"25px"}>{((currentPage - 1) * pageSize) + i+1}</Td>
                <Td textAlign={'center'}>{gameReport.userId}</Td>
                <Td textAlign={'center'}>{gameReport?.txTime?.split(" ")[1]}</Td>
                <Td textAlign={'center'}>{gameReport?.txTime?.split(" ")[0]}</Td>
                <Td textAlign={'center'}>{gameReport.roundId || gameReport.platformTxId}</Td>
                <Td textAlign={'center'}>{gameReport.gameType}</Td>
                {/* <Td textAlign={'center'} fontSize={20} color={"#3B3B3B"}>
                  <Center>
                    <Box _hover={{bgColor: colors.report.orange, color: colors.default.white}} 
                      borderRadius={"50%"} transition={".3s"}>
                      <BsPlayCircle/>
                    </Box>
                  </Center>
                </Td> */}
                <Td textAlign={'end'}>{convertDecimalNum(gameReport.betAmt.toString())}</Td>
                <Td textAlign={'end'}>{convertDecimalNum(gameReport.betAmt.toString())}</Td>
                <Td textAlign={'end'}>
                  <CustomizeNumberValue num={gameReport.winAmt}/>
                </Td>
                <Td textAlign={'end'}>
                  <CustomizeNumberValue num={gameReport.winLoss}/>
                </Td>
                <Td textAlign={'end'}>0.00</Td>
                <Td textAlign={'end'}>
                  <CustomizeNumberValue num={gameReport.winLoss}/>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
    </TableContainer>
  )
}

export default DetailGameReportList

const tHead = {
  textAlign: "center",
  border: "1px solid #979797",
}
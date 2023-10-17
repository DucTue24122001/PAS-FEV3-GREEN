import { CloseIcon } from '@chakra-ui/icons'
import { Box, Flex, Modal, ModalContent, ModalOverlay, Text } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store';
import { transactionReportAction } from '../../../redux/transaction-report-slice';
import CopyButton from '../../constants/CopyButton';
import CustomizeNumberValue from '../../constants/CustomizeValueNumber';
import { convertDecimalNum } from '../../../util/function';

const DetailReportModal = () => {
  const {isShowDetailModal, currentGameReport, currentPlatformName}: any = useSelector((state: RootState) => state.report)
  const dispatch = useDispatch()
  const {t} = useTranslation()
  
  return (
    <Modal isOpen={isShowDetailModal} onClose={() => dispatch(transactionReportAction.handleShowDetailModal(false))}
      size={"full"}>
      <ModalOverlay />
      <ModalContent>
        <Flex flexDir={'column'}>
          <Flex alignItems={'center'} bgColor={"#caffe1"} color={'white'}
            justifyContent={'space-between'} p={"12.5px"} fontSize={"18px"}>
            <Text>{t('transaction_report')}</Text>
            <CloseIcon onClick={() => dispatch(transactionReportAction.handleShowDetailModal(false))}/>
          </Flex>
          <Flex p={"10px"} fontSize={"14px"} alignItems={'center'} borderBottom={"1px solid #d9dee4"}>
            <Text fontSize={16}>{currentGameReport?.txTime?.split(" ")[0]}</Text>
            <Box ml={"auto"}
            bgColor={"#caffe1"} p={"6px 12px"} borderRadius={"4px"} color={"white"}>
              <Text>{currentPlatformName}</Text>
            </Box>
          </Flex>
          <Flex bgColor={"#f3f1ea"} color={"#8e8574"} p={"15px 10px"} borderBottom={"1px solid #d9dee4"} justifyContent={'space-between'} alignItems={'center'}>
            <Flex flexDir={'column'} gap={2}>
              <Text border={"1px #d4cfbd solid"} px={2} fontSize={20} borderRadius={3}>
                {currentGameReport.gameName}
              </Text>
              <Text>{t('round_id')}</Text>
              <Flex alignItems={'center'} gap={5}>
                <Text fontSize={14}>{currentGameReport.roundId || currentGameReport.platformTxId}</Text>
                <CopyButton boxSize={7} copyText={currentGameReport.roundId || currentGameReport.platformTxId}/>
              </Flex>
            </Flex>
            {/* <Box fontSize={24} border={`2px solid ${colors.report.brown}`} p={2} borderRadius={50} cursor={'pointer'}>
              <BsFillCameraVideoFill/>
            </Box> */}
          </Flex>
          <Flex p={"10px"} fontSize={"14px"} bgColor={"#f3f2f0"}>
            {currentGameReport.txTime}
          </Flex>
          <Flex borderBottom={"1px solid #d9dee4"} p={"10px"} alignItems={'center'}>
            <Text sx={tableName}>{t('game_name')}</Text>
            <Text fontSize={"16px"}>{currentGameReport.gameName}</Text>
          </Flex>
          <Flex borderBottom={"1px solid #d9dee4"} p={"10px"} alignItems={'center'}>
            <Text sx={tableName}>{t('stake')}</Text>
            <Text fontSize={"16px"}>{convertDecimalNum(currentGameReport.betAmt)}</Text>
          </Flex>
          <Flex borderBottom={"1px solid #d9dee4"} p={"10px"} alignItems={'center'}>
            <Text sx={tableName}>{t('turnovers')}</Text>
            <Text fontSize={"16px"}>{convertDecimalNum(currentGameReport.betAmt)}</Text>
          </Flex>
          <Flex borderBottom={"1px solid #d9dee4"} p={"10px"} alignItems={'center'}>
            <Text sx={tableName}>{t('comm_tax')}</Text>
            <Text fontSize={"16px"}>0</Text>
          </Flex>
          <Flex borderBottom={"1px solid #d9dee4"} p={"10px"} alignItems={'center'}>
            <Text sx={tableName}>{t('profit_loss')}</Text>
            <CustomizeNumberValue fontSize={"16px"} num={currentGameReport.winLoss}/>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  )
}

export default DetailReportModal

const tableName = {
  fontSize:"14px",
  minW:"200px",
}
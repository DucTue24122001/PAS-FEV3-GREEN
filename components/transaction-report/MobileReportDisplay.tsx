import React from 'react'
import { Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { ReportShowEnum } from '../../redux/transaction-report-slice'
import MobilePlatformList from './mobile-display/MobilePlatformList'
import MobileDetailGameReport from './mobile-display/MobileDetailGameReport'
import DetailReportModal from './mobile-display/DetailReportModal'

const MobileReportDisplay = () => {
  const {toggleShowPlatformAndGame} = useSelector((state: RootState) => state.report)
  
  return (
    <Flex display={["flex","flex","none","none"]} mb={"80px"} >
      {toggleShowPlatformAndGame === ReportShowEnum.PLATFORM && <MobilePlatformList/>}
      {toggleShowPlatformAndGame === ReportShowEnum.GAME && <MobileDetailGameReport/>}
      <DetailReportModal/>
    </Flex>
  )
}

export default MobileReportDisplay

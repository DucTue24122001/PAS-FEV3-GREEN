import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import React, { useMemo, useState } from 'react'
import Pagination from '../constants/pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { accountAction } from '../../redux/account-slice'
import httpClient from '../../http-client/httpClient'
import moment from 'moment'
import { IoMailOpenSharp, IoMailSharp } from 'react-icons/io5'

const MailList = () => {
  const {isFetchingMail, inboxMails} = useSelector((state: RootState) => state.account)
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()
  
  const inboxMailPagination = useMemo(() => {
    return inboxMails.slice((currentPage-1) * 10, (currentPage) * 10);
  }, [currentPage, inboxMails])

  const onMailRead = async (mail: any) => {
    dispatch(accountAction.setCurrentMailRead(mail))
    if(mail.status) return
    try {
        await httpClient.post("/services/app/notification/IsReadNoti", null, {
        params: { id: mail.id }
      })
    } catch (err) {
      console.log(err);
    }
  }

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
  <>
    <Flex flexDir={'column'} cursor={'pointer'} className='text_vip'>
      {!isFetchingMail ? inboxMailPagination.map((mail: any, i: number) => (
      <Box key={mail.id} borderBottom={`1px solid #c6c6c6`} bgColor={"#1f7544"}
        py={"20px"} px={2} onClick={() => onMailRead(mail)} >
          <Flex justifyContent={"space-between"} mb={"5px"}>
          <Text fontWeight={"bold"}><span>{!mail.status ? <IoMailSharp style={{fontSize: "20px"}}/> : <IoMailOpenSharp style={{fontSize: "20px"}}/>}</span>{mail.subject}</Text>
          <Text>{moment(new Date(mail.creationTime)).format("YYYY/MM/DD")}</Text>
        </Flex>
        <Text>{mail.body}</Text>
      </Box>)) : <Spinner textAlign={'center'}/>}
    </Flex>
    <Flex justifyContent={'center'}>
      <Pagination
        currentPage={currentPage}
        pageSize={10}
        totalCount={inboxMails.length}
        siblingCount={1}
        onPageChange={onPageChange}/>
    </Flex>
  </>
  )
}

export default MailList
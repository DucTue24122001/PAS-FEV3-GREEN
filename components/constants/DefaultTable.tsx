import { Table, TableContainer, Tbody, Thead } from '@chakra-ui/react'
import React from 'react'

const DefaultTable = ({tbody, thead, ...props}: any) => {
  return (
    <TableContainer border={`1px solid #c6c6c6`} whiteSpace={'nowrap'} overflowX={'auto'} maxW={"100%"} borderRadius={5} {...props}>
          <Table bgColor={"#1f7544"}>
            <Thead bgColor={"#f2f5f9"}>
                {thead}
            </Thead>
            <Tbody fontSize={"14px"} className='text_vip'>
                {tbody}
            </Tbody>
          </Table>
    </TableContainer>
  )
}

export default DefaultTable
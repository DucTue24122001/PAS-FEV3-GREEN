import { Table, TableContainer, Tbody, Thead } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type TablePropsType = {
  tbody: ReactNode,
  thead: ReactNode,
}

const DefaultTable = ({tbody, thead, ...props}: TablePropsType) => {
  return (
    <TableContainer border={`1px solid #c6c6c6`} whiteSpace={'nowrap'} overflowX={'auto'} borderRadius={5} {...props}>
          <Table>
            <Thead bgColor={"bg"}>
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
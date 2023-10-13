import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { accountAction } from '../../redux/account-slice'
import moment from 'moment'

const MailDetailModal = () => {
  const {isShowMailModal, currentMailRead} = useSelector((state: RootState) => state.account)
  const dispatch = useDispatch()

  return (
    <Modal isOpen={isShowMailModal} onClose={() => dispatch(accountAction.setShowMailModal(false))}
      isCentered size={"md"}>
      <ModalContent >
        <ModalHeader>{currentMailRead.subject}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={"20px"}>
          <Text>{moment(new Date(currentMailRead.creationTime)).format("YYYY/MM/DD")}</Text>
          <br/>
          <Text>
            {currentMailRead.body}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default MailDetailModal
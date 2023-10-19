import { Box, Center, Modal, ModalCloseButton, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { clientAction } from '../../redux/client-slice';
import { RootState } from '../../redux/store';

const ContactSupportModal = () => {
  const {isShowForgotPwModal} = useSelector((state: RootState) => state.client)
  const dispatch = useDispatch()
  const {t} = useTranslation()

  return (
    <Modal isOpen={isShowForgotPwModal} onClose={() => dispatch(clientAction.handleShowForgotPwModal(false))}
      isCentered size={["full","full","lg","lg"]}>
      <ModalOverlay/>
      <ModalContent p={"15px"}>
        <ModalCloseButton right={35} top={[55,55,35,35]}/>
        <Center p={["5px","5px","45px","45px"]} flexDir={'column'} gap={5} h={["90vh","90vh","100%","100%"]}>
          <Box fontSize={"24px"} fontWeight={600}>
            <Text>{t('Forgot_Password')}</Text>
          </Box>
          <Text fontSize={[14,14,16,16]}>
            {t('please_contact')}
            <span style={{color: "#3544ff"}}>{" "}{t('customer_service')}</span>
          </Text>
        </Center>
      </ModalContent>
    </Modal>
  )
}

export default ContactSupportModal
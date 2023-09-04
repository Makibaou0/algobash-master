import React from 'react';
import {
  Modal,
  ModalContent,
  ModalBody,
  VStack,
  Text,
  Button,
} from 'native-base';
import {DARK} from '../statis/Color';
import {FormatNumber} from '../utils/FormatNumber';

const Popup = ({
  isModalVisible,
  setIsModalVisible,
  cartItemCount,
  totalPrice,
  handleReset,
}) => {
  return (
    <Modal isOpen={isModalVisible} onClose={() => setIsModalVisible(false)}>
      <Modal.Content w={'90%'}>
        <Modal.Body>
          <VStack px={6} space={5} pb={5}>
            <Text fontWeight={'semibold'} textAlign={'center'} fontSize={20}>
              Success!
            </Text>
            <Text textAlign={'center'} fontSize="md">
              You have successfully purchase {cartItemCount} products with total
              of Rp. {FormatNumber(totalPrice)}. Click close to buy another
              modems
            </Text>
            <Button
              rounded="3xl"
              colorScheme="dark"
              bg={DARK}
              onPress={() => handleReset()}>
              <Text fontWeight={'semibold'} color="white" fontSize="md">
                Close
              </Text>
            </Button>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default Popup;

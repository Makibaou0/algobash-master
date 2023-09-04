import React from 'react';
import {VStack, HStack, Text, Button, Box} from 'native-base';
import {DARK} from '../statis/Color';
import {FormatNumber} from '../utils/FormatNumber';

const Footer = ({inset, totalPrice, setIsModalVisible, handleReset}) => {
  return (
    <VStack
      pb={inset.bottom}
      flex={0.3} // Add this to make the footer flexible
      space={2}
      justifyContent={'space-between'}
      p="4"
      bg="blueGray.100"
      bottom={0}
      left={0}
      right={0}>
      <HStack justifyContent={'space-between'}>
        <Text fontSize="lg" fontWeight="semibold">
          Total :
        </Text>
        <Text fontSize="lg" fontWeight="semibold">
          Rp. {FormatNumber(totalPrice)}
        </Text>
      </HStack>
      <Button
        onPress={() => {
          setIsModalVisible(true);
        }}
        rounded={'3xl'}
        isDisabled={totalPrice === 0}
        bg={DARK}
        colorScheme={'white'}>
        <Text color="white" fontWeight={'semibold'} fontSize="md">
          Checkout
        </Text>
      </Button>
      {totalPrice !== 0 && (
        <Button
          onPress={() => handleReset()}
          rounded={'3xl'}
          isDisabled={totalPrice === 0}
          bg={'white'}
          borderWidth={2}
          borderColor={DARK}
          colorScheme={'white'}>
          <Text color={DARK} fontWeight={'semibold'} fontSize="md">
            Reset
          </Text>
        </Button>
      )}
    </VStack>
  );
};

export default Footer;

import React from 'react';
import {FlatList, HStack, VStack, Text, Button, Box} from 'native-base';
import {DARK} from '../statis/Color';
import {FormatNumber} from '../utils/FormatNumber';

const ProductList = ({
  DATA,
  delayedDecreaseQuantity,
  delayedIncreaseQuantity,
  cart,
  totalPrice,
}) => {
  return (
    <Box flex={1}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <HStack
            alignItems={'center'}
            justifyContent={'space-between'}
            key={index}
            px="4"
            py={2}
            rounded="lg">
            <HStack
              alignItems={'center'}
              justifyContent={'space-between'}
              key={index}
              px="4"
              py={6}
              rounded="lg">
              <VStack flex={1} justifyContent={'center'}>
                <Text
                  numberOfLines={1}
                  color={DARK}
                  fontWeight={'semibold'}
                  fontSize="sm">
                  {item.title}
                </Text>
                <Text color="blueGray.500" fontSize="sm">
                  Rp. {FormatNumber(item.price * 15000)}
                </Text>
              </VStack>
              <HStack
                p={2}
                bg="blueGray.100"
                alignItems={'center'}
                flex={0.5}
                justifyContent={'space-between'}>
                <Button
                  size={8}
                  _pressed={{
                    opacity: 0.4,
                  }}
                  colorScheme={'white'}
                  bg={DARK}
                  onPress={() => delayedDecreaseQuantity(item)}
                  isDisabled={(cart[item.id] || 0) === 0}>
                  <Text fontSize="20" color="white" fontWeight={'semibold'}>
                    -
                  </Text>
                </Button>
                <Box rounded="lg">{cart[item.id] || 0}</Box>
                <Button
                  size={8}
                  _pressed={{
                    opacity: 0.4,
                  }}
                  colorScheme={'white'}
                  bg={DARK}
                  onPress={() => delayedIncreaseQuantity(item)}
                  isDisabled={(cart[item.id] || 0) === item.stock}>
                  <Text fontSize="20" color="white" fontWeight={'semibold'}>
                    +
                  </Text>
                </Button>
              </HStack>
            </HStack>
          </HStack>
        )}
      />
    </Box>
  );
};

export default ProductList;

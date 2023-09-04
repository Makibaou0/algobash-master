import React from 'react';
import {VStack, Text} from 'native-base';
import {DARK} from '../statis/Color';
import ICMobile from '../assets/icons/ICMobile';

const Loader = () => {
  return (
    <VStack space={2} flex={1} justifyContent={'center'} alignItems={'center'}>
      <ICMobile size={75} color={DARK} />
      <Text fontSize="20" color={DARK} fontWeight={'semibold'}>
        Loading Product Data
      </Text>
      <Text fontSize="sm" color={DARK}>
        Please Wait...
      </Text>
    </VStack>
  );
};

export default Loader;

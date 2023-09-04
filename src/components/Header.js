import React from 'react';
import {HStack, Text} from 'native-base';
import {RED} from '../statis/Color';
import ICMobile from '../assets/icons/ICMobile';

const Header = ({inset}) => {
  return (
    <HStack
      space={2}
      alignItems={'center'}
      pt={inset.top}
      pb={5}
      bg={RED}
      px="4"
      rounded="xl">
      <ICMobile size={29} color="white" />
      <Text fontSize="xl" color="white" fontWeight={'semibold'}>
        Product List
      </Text>
    </HStack>
  );
};

export default Header;

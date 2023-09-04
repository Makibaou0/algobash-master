import React from 'react';
import {HStack, Text, Select, Box} from 'native-base';
import {DARK} from '../statis/Color';
import ICSort from '../assets/icons/ICSort';

const Sorting = ({sort, handleChange}) => {
  return (
    <HStack justifyContent={'space-between'} py={10} p="4" rounded="lg">
      <HStack flex={1} alignItems={'center'} space={4}>
        <ICSort color={DARK} size={17} />
        <Text fontSize="md">Sort By :</Text>
      </HStack>
      <Box flex={1}>
        <Select
          selectedValue={sort}
          onValueChange={handleChange}
          borderWidth={0}
          bg="blueGray.100"
          placeholder="DEFAULT"
          placeholderTextColor={DARK}
          fontSize={14}
          fontWeight={'semibold'}>
          <Select.Item label="Lowest Price" value="LowestPrice" />
          <Select.Item label="Highest Price" value="HighestPrice" />
          <Select.Item label="Name" value="Name" />
        </Select>
      </Box>
    </HStack>
  );
};

export default Sorting;

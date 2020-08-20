import React from 'react';
import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/core';

const Input: React.FC<ChakraInputProps> = (props) => {
  return (
    <ChakraInput
      height="50px"
      borderColor="gray.800"
      focusBorderColor="purple.800"
      borderRadius="sm"
      {...props}
    />
  );
}

export default Input;
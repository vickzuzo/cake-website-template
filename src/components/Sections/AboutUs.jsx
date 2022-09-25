import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { SectionHeader } from '../general';

const AboutUs = () => {
  return (
    <Box w="70%" mx="auto">
      <SectionHeader title="About us" />
      <Flex>
        <Box w="45%" mx="auto">
          <p>image</p>
        </Box>
        <Box w="50%" mx="auto">
          <p>text</p>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutUs;

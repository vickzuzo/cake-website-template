import { Text, Heading, Box } from '@chakra-ui/react';
import React from 'react';

const SectionHeader = ({ title, description }) => {
  return (
    <Box my="10">
      <Heading fontSize="5xl" textAlign="center">
        {title}
      </Heading>
      <Text fontSize="sm" textAlign="center">
        {description}
      </Text>
    </Box>
  );
};

export default SectionHeader;

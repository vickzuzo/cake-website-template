import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

const Header = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll());

    return () => window.removeEventListener('scroll', handleScroll());
  }, []);

  return (
    <Box pos="fixed" top="0" zIndex="100" w="100%" py="10" bg={fixed && 'pink'}>
      <Flex w="70%" mx="auto" align="center" justify="space-between">
        <Text>Logo</Text>
        <Flex>
          <Flex as={NavLink} to="/about" mx="4">
            Our Packages
          </Flex>
          <Flex as={NavLink} to="/about" mx="4">
            Build your package
          </Flex>
          <Flex as={NavLink} to="/about" mx="4">
            Events
          </Flex>
          <Flex as={NavLink} to="/about" mx="4">
            Contact
          </Flex>
        </Flex>
        <Flex align="center">
          <Flex
            as={NavLink}
            to="/about"
            bg="pink"
            transition="0.4s ease"
            color="white"
            rounded="full"
            mr="4"
            p="2"
            _hover={{ bg: 'blue' }}
          >
            <Icon as={AiOutlineUser} fontSize="md" color="blue-dark" />
          </Flex>
          <Flex as={NavLink} to="/about">
            Cart Icon
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;

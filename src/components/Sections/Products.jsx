import { Box, Flex, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { SectionHeader } from '../general';

const Products = () => {
  const dummyData = [
    {
      bg: 'pink',
      title: 'All Cakes',
      image: require('../../assets/images/cake1.png'),
    },
    {
      bg: 'yellow',
      title: 'Wedding Cakes',
      image: require('../../assets/images/wedding1.png'),
    },
    {
      bg: 'blue',
      title: 'For Children',
      image: require('../../assets/images/cake1.png'),
    },
    {
      bg: 'blue',
      title: 'Anniversary Cakes',
      image: require('../../assets/images/cake1.png'),
    },
    {
      bg: 'blue',
      title: 'Birthday Cakes',
      image: require('../../assets/images/chocolate-cake1.png'),
    },
    {
      bg: 'blue',
      title: 'Desserts',
      image: require('../../assets/images/cupcakes1.png'),
    },
  ];

  return (
    <Box w="70%" mx="auto">
      <SectionHeader title="Products" description="hellow world" />
      <SimpleGrid minChildWidth="25%" columns={2} spacing={20}>
        {dummyData.map((item, index) => (
          <Flex
            align="center"
            justify="center"
            h="300px"
            bg={item.bg}
            _hover={{ transform: 'scale(1.05)' }}
            p="5"
            overflow="hidden"
            transition="0.4s ease"
            rounded="3xl"
            pos="relative"
            _after={{
              content: '""',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
            }}
          >
            <Flex
              w="100%"
              h="100%"
              backgroundImage={`url(${item.image})`}
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              bgPos="center"
              align="center"
              justify="center"
            >
              <Heading pos="relative" zIndex="2" color="white" fontSize="2xl">
                {item.title}
              </Heading>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;

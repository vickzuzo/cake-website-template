import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  Image,
  keyframes,
  Button,
} from '@chakra-ui/react';
import { darken } from 'polished';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { motion } from 'framer-motion';
const Carousel = () => {
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Cake Your Day',
      text: 'For our deserts we always use only the natural ingredients. Our production is 100% handmade.',
      image: require('../../../assets/images/blob1.png'),
      floatingImage: require('../../../assets/images/cake1.png'),
    },
    {
      title: 'Design Projects 2',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: require('../../../assets/images/blob2.png'),
      floatingImage: require('../../../assets/images/cupcakes1.png'),
    },
    {
      title: 'Design Projects 3',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: require('../../../assets/images/blob3.png'),
      floatingImage: require('../../../assets/images/chocolate-cake1.png'),
    },
  ];
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const animationKeyframes = keyframes`
  0% { transform: translateY(0px); }
  100% { transform: translateY(60px) }
`;

  const animation = `${animationKeyframes} 4s ease-in-out infinite alternate`;

  return (
    <Box position="relative" height="85vh" width="full" overflow="hidden">
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        color="blue-dark"
        bg="pink"
        _hover={{ bg: 'blue' }}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        icon={<BiLeftArrowAlt size="2rem" />}
        onClick={() => slider?.slickPrev()}
      ></IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        color="blue-dark"
        bg="pink"
        _hover={{ bg: 'blue' }}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        icon={<BiRightArrowAlt size="2rem" />}
        onClick={() => slider?.slickNext()}
      ></IconButton>
      {/* Slider */}
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height="6xl"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Flex
              w="70%"
              mx="auto"
              height="70%"
              position="relative"
              align="center"
              justify="space-between"
            >
              <Stack spacing={6} w={'full'} maxW={'lg'}>
                <Heading
                  fontSize={{ base: '3xl', md: '8xl' }}
                  color="blue-dark"
                >
                  {card.title}
                </Heading>
                <Text maxW="70%" fontSize="md" color="gray.700">
                  {card.text}
                </Text>
                <Button
                  bg="blue"
                  w="45%"
                  py="7"
                  rounded="sm"
                  color="blue-dark"
                  _hover={{ boxShadow: 'md' }}
                >
                  Find your dessert
                </Button>
              </Stack>
              <Box
                as={motion.div}
                animation={animation}
                pos="absolute"
                right="-7rem"
                w="3xl"
              >
                <Image src={card.floatingImage} w="100%" h="100%" />
              </Box>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;

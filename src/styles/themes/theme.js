import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    pink: '#EB2C5C',
    blue: '#bff4ee',
    white: '#EDF2F4',
    "blue-dark": "#2B2D42",
    'red-light': '#EF233C',
    'red-dark': '#D90429',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

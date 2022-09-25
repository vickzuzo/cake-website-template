import { Box, ChakraProvider, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { AppRouter } from './router';
import { theme } from './styles/themes';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppRouter />
    </ChakraProvider>
  );
};

export default App;

import { ChakraProvider, Box } from '@chakra-ui/react'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Card } from './components/Card/Card';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#111133' display='flex' flexDirection='column' justifyContent='space-between'>

        <Header />
        <Card />
        <Footer />

      </Box>
    </ChakraProvider>
  );
}

export default App;

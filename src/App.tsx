import { useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react'

import { Card } from './components/Card/Card';
import { Layout } from './components/Layout';

function App() {

  const [value, setValue] = useState(0)

  console.log(value);

  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#111133' display='flex' flexDirection='column' justifyContent='space-between'>

        <Layout>
          <Card />
        </Layout>

      </Box>
    </ChakraProvider>
  );
}

export default App;

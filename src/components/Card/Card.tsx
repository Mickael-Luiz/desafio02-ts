import { Center, Input, Box, Button, AbsoluteCenter } from '@chakra-ui/react'
import { ButtonForm } from '../ButtonForm/ButtonForm'

interface ICard {
  id: number,
  paragraph: string,
  details: string
}

export const Card = () => {

  const logar = () => {
    window.alert('Voce Conectou-se')
  }

  return(
    <Box minHeight='calc(100vh - 140px)' backgroundColor='#111133' display='flex' flexDirection='column' justifyContent='space-between'>

        <AbsoluteCenter>
          <Box backgroundColor='#ffffff' borderRadius='25px' p='15px' height='500px' width='400px'>

            <Center fontSize='24pt' backgroundImage='linear-gradient(blue, pink)' backgroundClip='text' fontStyle='italic' fontWeight='bold'>
              <h1>DioBank</h1>
            </Center>

            <AbsoluteCenter display='flex' flexDirection='column' gap='20px' width='90%'>
              <Center>
                <h2>Faça o Login</h2>
              </Center>
              <Input placeholder='email' height='50px' />
              <Input placeholder='password' height='50px' />
              <ButtonForm label='Entrar' onClick={() => {window.alert('Voce Conectou-se')}} />
            </AbsoluteCenter>

          </Box>
        </AbsoluteCenter>
        
      </Box>
  )
}
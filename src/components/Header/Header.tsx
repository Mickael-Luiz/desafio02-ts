import { Box, Text, Center, UnorderedList, ListItem } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box width='100%' backgroundColor='#111'>
      <Center>
        <Box color='white' display='flex' alignItems='center' justifyContent='space-between' height='70px' width='1000px'>
          <Text fontSize='3xl' fontWeight='bold' fontStyle='italic' marginLeft='50px'>dioBank</Text>
          <UnorderedList display='flex' listStyleType='none' gap='15px' fontWeight='bold' fontSize='15pt'>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact</ListItem>
          </UnorderedList>
        </Box>
      </Center>
    </Box>
  )
}

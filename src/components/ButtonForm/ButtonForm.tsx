import { Button } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

interface IButtonForm {
  label: string
  onClick: MouseEventHandler
}

export const ButtonForm = ({ onClick, label }: IButtonForm) => {
  return (
    <Button colorScheme='teal' size='lg' marginTop='15px' onClick={onClick}>
      {label}
    </Button>
  )
}
import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/images/logo.png'
import ColorModeSwitcher from './ColorModeSwitcher'

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding={'2px 20px'}>
        <HStack>
			<Image src={logo} boxSize='60px'/>
			<Text className='orbitron-font-title'  padding={'0 0 0 10px'}>Z Game</Text>
		</HStack>
        <ColorModeSwitcher/>
    </HStack>
  )
}

export default Navbar
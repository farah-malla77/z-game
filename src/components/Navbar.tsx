import { Flex, HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/images/logo.png'
import ColorModeSwitcher from './ColorModeSwitcher'
import InputSearch from './InputSearch'

interface Props {
	onSearch: (searchText: string)=> void;
}
const Navbar = ({onSearch}: Props) => {
	return (
		<Flex padding={'2px 20px'} justifyContent='space-between' marginBottom={6}>
			<HStack width={'16%'}>
				<Image src={logo} boxSize='40px' objectFit='cover'/>
				<Text whiteSpace={'noWrap'} className='orbitron-font-title' padding={'0 0 0 10px'}>Z Game</Text>
			</HStack>
			<HStack width={'85%'}>
				<InputSearch onSearch={onSearch}/>
				<ColorModeSwitcher />
			</HStack>
		</Flex>
	)
}

export default Navbar
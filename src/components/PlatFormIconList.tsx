import { Platform } from "../hooks/useGames";
import { FaWindows, FaLinux, FaAndroid, FaApple, FaPlaystation, FaXbox } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, IconButton } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props{
	platforms: Platform[]
}
const PlatFormIconList = ( {platforms}:Props ) => {
	const iconMap :{[key: string]: IconType} ={
		pc : FaWindows,
		linux: FaLinux,
		android : FaAndroid,
		mac: FaApple,
		playstation : FaPlaystation,
		xbox : FaXbox,
		ios : MdPhoneIphone,
		nintendo : SiNintendo,
		web : BsGlobe
	}
	return (
		<HStack marginY={1}>
			{
				platforms.map((platform) => (
					<Icon key={platform.slug} as={iconMap[platform.slug]} color={'gray.500'}/>
				))
				  
			}
		</HStack>
	)
}

export default PlatFormIconList
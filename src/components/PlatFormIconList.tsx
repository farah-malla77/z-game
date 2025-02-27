import { Platform } from "../hooks/useGames";
import { FaWindows, FaLinux, FaAndroid, FaApple, FaPlaystation, FaXbox } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
	platforms: Platform[]
}
const PlatFormIconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: { icon: IconType; color: string } } = {
		pc: { icon: FaWindows, color: "#00ADEF" }, // Blue
		linux: { icon: FaLinux, color: "#000000" }, // Black
		android: { icon: FaAndroid, color: "#3DDC84" }, // Green
		mac: { icon: FaApple, color: "#A3AAAE" }, // Gray
		playstation: { icon: FaPlaystation, color: "#003087" }, // Blue
		xbox: { icon: FaXbox, color: "#107C10" }, // Green
		ios: { icon: MdPhoneIphone, color: "#000000" }, // Black
		nintendo: { icon: SiNintendo, color: "#E60012" }, // Red
		web: { icon: BsGlobe, color: "#1DA1F2" }, // Blue
	};

	return (
		<HStack paddingBottom={5}>
			{platforms.map((platform) => (
				<Icon key={platform.slug} as={iconMap[platform.slug].icon} color={iconMap[platform.slug].color} fontSize='23px' />
			))}
		</HStack>
	);
};
export default PlatFormIconList
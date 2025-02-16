import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'
import { useState } from 'react';

interface Props{
    onSelectedPlatform: (platform : Platform) => void;
    selectedPlatform: Platform | null;
}
const PlatformsSelector = ({onSelectedPlatform, selectedPlatform}: Props) => {
    const { data } = usePlatforms();
    // const [ selectedPlatform, setSelectedPlatform ] = useState<Platform | null>(null);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data.map(platform =><MenuItem key={platform.id} onClick={() => {onSelectedPlatform(platform); setSelectedPlatform(platform)}}>{platform.name}</MenuItem>)}                
            </MenuList>
        </Menu>
    )
}

export default PlatformsSelector
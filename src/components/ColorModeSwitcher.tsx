import { HStack, Switch, useColorMode } from "@chakra-ui/react"

const ColorModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack>
        <Switch isChecked={colorMode == 'dark'} onChange={toggleColorMode} />
    </HStack>
  )
}

export default ColorModeSwitcher
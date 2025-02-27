import { Box, Divider, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";
import { useState } from "react";

interface Props {
    game: Game;
}
const GameCard = ({ game }: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        // <Card>
        //     <CardBody>
        //         <Image
        //             src={getCroppedImageURL(game.background_image)}
        //             alt={game.name}
        //             borderRadius='lg'
        //         />
        //         <Stack mt='6' spacing='3'>
        //             <HStack justifyContent={"space-between"}>
        //                 <PlatFormIconList platforms={game.parent_platforms.map((p)=> p.platform)}/>
        //                 <CriticScore score={game.metacritic}/>
        //             </HStack>
        //             <Heading size='md'>{game.name}</Heading>
        //             <Text>
        //                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        //             </Text>
        //             {/* <Text color='blue.600' fontSize='2xl'> */}
        //             {/* </Text> */}
        //         </Stack>
        //     </CardBody>
        // </Card>
        <Box
            position="relative"
            width="350px"
            height="400px"
            overflow="hidden"
            borderRadius="10px"
            cursor="pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                src={getCroppedImageURL(game.background_image)}
                alt={game.name}
                borderRadius='lg'
                width="100%"
                height="100%"
                objectFit="cover"
                transition="transform 0.3s ease-in-out"
            />
            <Flex
                position="absolute"
                bottom={isHovered ? "0" : "0"}
                left="0"
                width="100%"
                height={isHovered ? "100%" : "17%"}
                bg="rgba(0, 0, 0, 0.7)"
                color="white"
                justify="start"
                align="start"
                transition="height 0.3s ease-in-out"
                p={4}
                flexDirection='column'
            >
                <HStack paddingBottom={6}>
                    <Text className='orbitron-font-title' fontSize="lg" fontWeight="bold" >
                        {game.name}
                    </Text>
                    <CriticScore score={game.metacritic} />
                </HStack>
                {/* <HStack justifyContent={"space-between"}> */}
                {/* </HStack> */}
                <PlatFormIconList platforms={game.parent_platforms.map((p) => p.platform)} />
                <Flex justifyContent='space-between' width='100%'>
                    <Text>Release date:</Text>
                    <Text>{game.released}</Text>
                </Flex>
                <Divider marginY={2} borderColor="gray.500" />
                <Flex justifyContent='space-between' width='100%'>
                    <Text>Genres:</Text>
                    <HStack>{game.genres.map((genre, index) => <Text key={index}>{genre.name}{game.genres.length == index + 1 ? '.' : ','}</Text>)}</HStack>
                </Flex>
            </Flex>
        </Box>
    )
}

export default GameCard
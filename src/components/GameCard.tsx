import { Card, CardBody, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";

interface Props {
    game: Game;
}
const CardGames = ({ game }: Props) => {
    return (
        <Card>
            <CardBody>
                <Image
                    src={getCroppedImageURL(game.background_image)}
                    alt={game.name}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{game.name}</Heading>
                    <Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores eaque illum necessitatibus quis consequatur autem labore voluptas voluptate consectetur.
                    </Text>
                    {/* <Text color='blue.600' fontSize='2xl'> */}
                    {/* </Text> */}
                    <HStack justifyContent={"space-between"}>
                        <PlatFormIconList platforms={game.parent_platforms.map((p)=> p.platform)}/>
                        <CriticScore score={game.metacritic}/>
                    </HStack>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardGames
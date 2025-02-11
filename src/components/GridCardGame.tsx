import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import SkeletonCard from './SkeletonCard';
import GameCardContainer from './GameCardContainer';

const GridCardGame = () => {
    const { games, error, isLoading } = useGames();
    const Skeleton = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding={10}>
                {isLoading && Skeleton.map((Skeleton) => 
                <GameCardContainer>
                    <SkeletonCard key={Skeleton}></SkeletonCard>
                </GameCardContainer>)}
                {games.map((game) => (
                    <GameCardContainer>
                        <GameCard key={game.id} game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    )
}

export default GridCardGame;
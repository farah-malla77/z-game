import { SimpleGrid } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import SkeletonCard from './SkeletonCard';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Props{
    selectedGenre : Genre | null;
    selectedPlatform : Platform | null;
    selectedOrder : string | '';
    searchText : string | '';
}
const GridCardGame = ({selectedGenre, selectedPlatform, selectedOrder, searchText} : Props) => {
    const { data, isLoading } = useGames(selectedGenre, selectedPlatform, selectedOrder, searchText);
    const Skeleton = [1, 2, 3, 4, 5, 6];

    // if(error) return <Text>{error}</Text>
    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4} padding={5}>
            {isLoading && Skeleton.map((Skeleton) => 
            <GameCardContainer key={Skeleton}>
                <SkeletonCard></SkeletonCard>
            </GameCardContainer>)}
            {data.map((game) => (
                <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                </GameCardContainer>
            ))}
        </SimpleGrid>
    )
}

export default GridCardGame;
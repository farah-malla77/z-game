import { Heading } from '@chakra-ui/react'
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/useGames';

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}
const GameHeading = ({ selectedGenre, selectedPlatform }: Props) => {
    const heading = ` ${selectedPlatform ? selectedPlatform?.name : ''} ${selectedGenre ? selectedGenre?.name : ''} Games`
  return (
        <Heading as={'h1'} fontSize='5xl'>{heading}</Heading>
    )
}

export default GameHeading
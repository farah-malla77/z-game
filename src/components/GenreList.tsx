import { Button, Heading, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageURL from '../services/image-url';

interface Props{
	onSelectedGenre : (genre:Genre)=> void,
	selectedGenre : Genre | null
}
const GenreList = ({onSelectedGenre, selectedGenre}:Props) => {
	const { data, isLoading } = useGenres();
	// if ( error ) return null;
	if ( isLoading ) return <Spinner/>
	return (
		<>
			<Heading fontSize='2xl' marginBottom={3} >Genres</Heading>
			<List>
				{data.map(genre => (
					<ListItem paddingY={'5px'} key={genre.id}>
						<HStack>
							<Image boxSize={'32px'} borderRadius={8} src={getCroppedImageURL(genre.image_background)} />
							<Button fontWeight={ selectedGenre?.id == genre.id ? 'bold' : 'normal'} variant="link" onClick={()=>onSelectedGenre(genre)}>{genre.name}</Button>
						</HStack>
					</ListItem>))}
			</List>
		</>
	)
}

export default GenreList
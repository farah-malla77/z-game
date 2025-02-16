import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import GridCardGame from './components/GridCardGame'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'

function App() {
	const [ selectedGenre, setSelectedGenre ]= useState<Genre | null>(null);
	return (
		<>
			<Grid templateAreas={{
				base:`"nav" "main"`,
				lg:`"nav nav" "side main"`
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr'
			}}
			>
				<GridItem area='nav'>
					<Navbar/>
				</GridItem>
				<Show above='lg'>
					<GridItem area='side' paddingX={'5px'}>
						<GenreList selectedGenre = {selectedGenre} onSelectedGenre={(genre)=>setSelectedGenre(genre)}/>
					</GridItem>
				</Show>
				<GridItem area='main'>
					<GridCardGame selectedGenre={selectedGenre}/>
				</GridItem>
			</Grid>
		</>
	)
}

export default App

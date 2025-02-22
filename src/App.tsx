import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import GridCardGame from './components/GridCardGame'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformsSelector from './components/PlatformsSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'

function App() {
	const [ selectedGenre, setSelectedGenre ]= useState<Genre | null>(null);
	const [ selectedPlatform, setSelectedPlatform ]= useState<Platform | null>(null);
	const [ selectedOrder, setSelectedOrder ]= useState<string | ''>('');
	const [ searchText, setSearchText ]= useState<string | ''>('');
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
					<Navbar onSearch={(searchText)=>setSearchText(searchText)}/>
				</GridItem>
				<Show above='lg'>
					<GridItem area='side' paddingX={'5px'}>
						<GenreList selectedGenre = {selectedGenre} onSelectedGenre={(genre)=>setSelectedGenre(genre)}/>
					</GridItem>
				</Show>
				<GridItem area='main'>
					<HStack spacing={5} paddingLeft={10} marginBottom={5}>
						<PlatformsSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)}/>
						<SortSelector selectedOrder={selectedOrder} onSelectedOrder={(order)=>setSelectedOrder(order)}/>
					</HStack>
					<GridCardGame searchText={searchText} selectedOrder={selectedOrder} selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
				</GridItem>
			</Grid>
		</>
	)
}

export default App

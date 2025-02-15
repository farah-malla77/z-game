import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import GridCardGame from './components/GridCardGame'
import GenreList from './components/GenreList'

function App() {
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
				<GridItem area='nav'><Navbar/></GridItem>
				<Show above='lg'>
					<GridItem area='side' paddingX={'5px'}>
						<GenreList/>
					</GridItem>
				</Show>
				<GridItem area='main'>
					<GridCardGame/>
				</GridItem>
			</Grid>
		</>
	)
}

export default App

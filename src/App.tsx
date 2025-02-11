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
			}}>
				<GridItem area='nav'><Navbar/></GridItem>
				<Show above='lg'>
					<GridItem area='side'>
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

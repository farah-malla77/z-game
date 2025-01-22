import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import GridCardGame from './components/GridCardGame'

function App() {
	return (
		<>
			<Grid templateAreas={{
				base:`"nav" "main"`,
				lg:`"nav nav" "side main"`
			}}>
				<GridItem area='nav'><Navbar/></GridItem>
				<Show above='lg'>
					<GridItem area='side'>side</GridItem>
				</Show>
				<GridItem area='main'>
				</GridItem>
			</Grid>
		</>
	)
}

export default App

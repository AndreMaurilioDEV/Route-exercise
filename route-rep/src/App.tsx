import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import PokemonsList from './components/PokemonsList'
import PokemonDetails from './components/PokemonDetails'


function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/pokemonsList' element={ <PokemonsList /> }/>
      <Route path='/pokemonsList/:pokemonName' element={ <PokemonDetails /> }/>
    </Routes>
    </>
  )

  }


export default App

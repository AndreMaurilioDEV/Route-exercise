import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import PokemonsList from './components/PokemonsList'
import PokemonDetails from './components/PokemonDetails'
import Layout from './components/Layout'
import NotFound from './components/NotFound'


function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={ <Layout />}>
        
      <Route index element={ <Home />} />
      <Route path='/pokemonsList' element={ <PokemonsList /> }/>
      <Route path='/pokemonsList/:pokemonName' element={ <PokemonDetails /> }/>

      </Route>

      <Route path='/*' element={ <NotFound />}/>
    </Routes>
    
    </>
  )

  }


export default App

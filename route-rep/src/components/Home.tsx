import { Link } from "react-router-dom";
function Home() {
    return (
        <div>
            <h1>Pokemons</h1>
            <Link to='/pokemonsList'>
                <button>Ver Pokemons</button>
            </Link>
        </div>
    )
}

export default Home;
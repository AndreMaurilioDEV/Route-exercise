import { Link } from "react-router-dom";
import { pokemons } from "./data";

function PokemonsList() {
    return (
        <div>
            <ul>
            {pokemons.map((pokemon) => 
            <Link to={pokemon.slug}>
            <li>{pokemon.title}</li>
            </Link>
            )}
            <Link to='/'><button>Voltar</button></Link>
        </ul>
        </div>
    )
}

export default PokemonsList;
import { useParams } from "react-router-dom";
import { pokemons } from "./data";
import { Link } from "react-router-dom";

function PokemonDetails (){
    const param = useParams();
    const { pokemonName } = param;
    const currentPokemon = pokemons.find((pokemon) => pokemon.slug === pokemonName )
    return (
        <div>
            <h1>{ currentPokemon?.title }</h1>
            <h2>{ currentPokemon?.description }</h2>
            <p>{ currentPokemon?.type }</p>
            <img src={currentPokemon?.image} alt={currentPokemon?.title}/>
            <Link to='/pokemonsList'><button>Voltar</button></Link>
        </div>
    )
}

export default PokemonDetails;
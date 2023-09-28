import { useNavigate, useParams } from "react-router-dom";
import { pokemons } from "./data";

function PokemonDetails (){
    const param = useParams();
    const { pokemonName } = param;
    const currentPokemon = pokemons.find((pokemon) => pokemon.slug === pokemonName )
    const navigate = useNavigate();

    function handleNavigateList() {
        navigate('/pokemonsList')
    }
    return (
        <div>
            <h1>{ currentPokemon?.title }</h1>
            <h2>{ currentPokemon?.description }</h2>
            <p>{ currentPokemon?.type }</p>
            <img src={currentPokemon?.image} alt={currentPokemon?.title}/>
            <button onClick={ handleNavigateList }>Voltar</button>
        </div>
    )
}

export default PokemonDetails;
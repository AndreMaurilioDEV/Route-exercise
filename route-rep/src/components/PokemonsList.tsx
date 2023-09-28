import { Link } from "react-router-dom";
import { pokemons } from "./data";
import { useNavigate } from "react-router-dom";

function PokemonsList() {
    const navigate = useNavigate();
    function handleNavigate() {
        navigate('/');
    }
    return (
        <div>
            <ul>
            {pokemons.map((pokemon) => 
            <Link to={pokemon.slug}>
            <li>{pokemon.title}</li>
            </Link>
            )}
           <button onClick={ handleNavigate }>Voltar</button>
        </ul>
        </div>
    )
}

export default PokemonsList;
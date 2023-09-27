import { NavLink } from "react-router-dom";
import './NavBar.css'

function NavBar() {
    return ( 
        <nav className="nav-bar">
            <NavLink to='/'>Home</NavLink>
        <NavLink to='pokemonsList'>Pokemons</NavLink>
        </nav>

    )
}

export default NavBar;
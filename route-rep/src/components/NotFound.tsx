import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
        <h1>Opps, pagina não encontrada</h1>
        <h2>Desculpe, a página que você está tentando acessar não existe</h2>
        <Link to='/'>
            <h3>Voltar a página inicial</h3>
        </Link>
        </>
    )
}

export default NotFound;
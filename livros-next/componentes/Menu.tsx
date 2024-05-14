import Link from "next/link";
import MyApp from "./_app";

export const Menu: React.FC = () => {
    return(
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
            <div className='container-fluid d-flex flex-row'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link href='/'>
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/LivroLista'>
                            <a className="nav-link">Catálogo</a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/LivroDados'>
                            <a className="nav-link">Novo</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
import Link from "next/link";
import MyApp from "./_app";

export const Menu: React.FC = () => {
    return(
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
            <div className='container-fluid d-flex flex-row'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link href='/' passHref>
                            <p className="nav-link">Home</p>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/LivroLista' passHref>
                            <p className="nav-link">Catálogo</p>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/LivroDados' passHref>
                            <p className="nav-link">Novo</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
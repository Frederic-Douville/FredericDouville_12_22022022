import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './header.css';

function Header() {
    return (
        <div className="header-ctn">
            <Link to="">
                <img src={Logo} alt="logo" className="logo" />
            </Link>
            <nav>
                <Link to="" className="header-link">
                    Accueil
                </Link>
                <Link to="" className="header-link">
                    Profil
                </Link>
                <Link to="" className="header-link">
                    Réglage
                </Link>
                <Link to="" className="header-link">
                    Communauté
                </Link>
            </nav>
        </div>
    );
}

export default Header;

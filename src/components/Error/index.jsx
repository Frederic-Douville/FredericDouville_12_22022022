import { Link } from 'react-router-dom';
import './error.css';

function Error() {
    return (
        <div className="error-404-ctn">
            <span className="error-number">404</span>
            <p>Cette page n'existe pas !</p>
            <Link to="/" className="error-link">
                Revenir à la page des choix
            </Link>
        </div>
    );
}

export default Error;

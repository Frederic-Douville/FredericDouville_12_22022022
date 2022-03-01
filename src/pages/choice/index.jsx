import { Link } from 'react-router-dom';
import './choice.css';

function Choice() {
    return (
        <div className="choice-ctn">
            <p>
                Choisir un profil:
                <br />
                <br />
                <Link to="/12" className="choice-link">
                    Karl Dovineau
                </Link>
                <br />
                <br />
                <Link to="/18" className="choice-link">
                    Cecilia Ratorez
                </Link>
            </p>
        </div>
    );
}

export default Choice;

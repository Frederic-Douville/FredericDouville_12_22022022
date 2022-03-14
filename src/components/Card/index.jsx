import PropTypes from 'prop-types';
import './card.css';

/**
 * implement a card which show one the user's food information
 * @param {array} data array of object
 * @param {elementType} logo
 * @param {string} desc
 * @param {string} color
 * @param {string} unit
 * @param {string} kind
 * @returns {DOMImplementation}
 */
function Card({ data, logo, desc, color, unit, kind }) {
    return (
        <div className="card">
            <div className={`card-logo-ctn card-logo-bg-${color}`}>
                <img src={logo} alt={desc} />
            </div>
            <div className="card-content-ctn">
                <span className="card-content-value">
                    {data}
                    {unit}
                </span>
                <span className="card-content-kind">{kind}</span>
            </div>
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.number,
    logo: PropTypes.elementType,
    desc: PropTypes.string,
    color: PropTypes.string,
    unit: PropTypes.string,
    kind: PropTypes.string,
};

export default Card;

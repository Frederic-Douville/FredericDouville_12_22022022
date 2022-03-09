import './card.css';

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

export default Card;

import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types';
import './averageScore.css';

const renderLegend = ({ payload }) => {
    return (
        <div className="score-legend-ctn">
            <p className="score-content" style={{ color: '#74798c' }}>
                <span className="score-value" style={{ color: '#282d30' }}>
                    {payload[0].payload.value * 100}%
                </span>
                <br />
                de votre
                <br /> objectif
            </p>
        </div>
    );
};
function AverageScore({ data }) {
    return (
        <RadialBarChart
            width={258}
            height={263}
            data={data}
            cy={132}
            innerRadius={80}
            outerRadius={80}
            startAngle={210}
            endAngle={-150}
            style={{
                backgroundColor: '#fbfbfb',
                borderRadius: '5px',
            }}
            barSize={10}
        >
            <PolarAngleAxis
                type="number"
                angleAxisId={0}
                domain={[0, 1]}
                tick={false}
            />
            <RadialBar
                dataKey="score"
                name="objectif"
                fill="#ff0000"
                background={{ fill: '#fbfbfb' }}
                clockwise
                cornerRadius={10}
            />
            <Legend
                align="center"
                verticalAlign="middle"
                content={renderLegend}
            />
        </RadialBarChart>
    );
}

AverageScore.propTypes = {
    data: PropTypes.array,
};

export default AverageScore;

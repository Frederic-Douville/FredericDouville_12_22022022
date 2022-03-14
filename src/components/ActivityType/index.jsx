import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    RadarChart,
    Radar,
} from 'recharts';
import PropTypes from 'prop-types';

/**
 * implement a radar chart which show the user's statistic performance
 * @param {array} data array of object
 * @returns {DOMImplementation}
 */

function ActivityType({ data }) {
    return (
        <RadarChart
            outerRadius={90}
            width={258}
            height={263}
            startAngle={-150}
            endAngle={210}
            data={data}
            style={{
                background: '#282d30',
                borderRadius: '5px',
            }}
        >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
                dataKey="kind"
                tick={{
                    fill: '#ffffff',
                    fontSize: '12',
                }}
                tickFormatter={(kind) => {
                    const kindWords = [
                        'Cardio',
                        'Energie',
                        'Endurance',
                        'Force',
                        'Vitesse',
                        'Intensité',
                    ];
                    return kind ? kindWords[kind - 1] : null;
                }}
            />
            <PolarRadiusAxis
                angle={15}
                axisLine={false}
                domain={[0, 250]}
                tick={false}
                tickCount={6}
            />
            <Radar
                dataKey="value"
                stroke="#ff0000"
                fill="#ff0000"
                fillOpacity={0.6}
            />
        </RadarChart>
    );
}

ActivityType.propTypes = {
    data: PropTypes.array,
};

export default ActivityType;

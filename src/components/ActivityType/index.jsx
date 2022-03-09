import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    RadarChart,
    Radar,
} from 'recharts';

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

export default ActivityType;

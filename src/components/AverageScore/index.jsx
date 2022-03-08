import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from 'recharts';

function AverageScore({ data }) {
    console.log(data);

    return (
        <RadialBarChart
            width={258}
            height={263}
            data={data}
            innerRadius={80}
            outerRadius={80}
            startAngle={225}
            endAngle={-135}
            style={{
                backgroundColor: '#fbfbfb',
            }}
            barSize={10}
        >
            <PolarAngleAxis type="number" angleAxisId={0} domain={[0, 1]} />
            <RadialBar fill="#ff0000" background clockwise dataKey="score" />
            <Legend />
        </RadialBarChart>
    );
}

export default AverageScore;

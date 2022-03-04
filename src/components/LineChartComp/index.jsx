import {
    LineChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Line,
    Tooltip,
} from 'recharts';

function LineChartComp({ data }) {
    return (
        <LineChart
            width={258}
            height={263}
            data={data}
            style={{ backgroundColor: '#ff0000', borderRadius: '5px' }}
        >
            <XAxis dataKey="day" />
            <YAxis hide={true} domain={['dataMin-5', 'dataMax+10']} />
            <Tooltip />
            <Line
                type="monotone"
                dataKey="sessionLength"
                stroke="#ffffff"
                dot={false}
            />
        </LineChart>
    );
}

export default LineChartComp;

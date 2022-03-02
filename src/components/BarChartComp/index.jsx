import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

function BarChartComp({ data }) {
    return (
        <BarChart width={835} height={320} data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day[9]" />
            <YAxis dataKey="calories" />
            <Tooltip />
            <Legend />
            <Bar dataKey="kilogram" fill="#282d30" barSize={7} />
            <Bar dataKey="calories" fill="#e60000" barSize={7} />
        </BarChart>
    );
}

export default BarChartComp;

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Rectangle,
} from 'recharts';
import './BarChart.css';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="value">{payload[0].value}kg</p>
                <p className="value">{payload[1].value}kCal </p>
            </div>
        );
    }
    return null;
};

function BarChartComp({ data }) {
    return (
        <BarChart width={795} height={280} data={data} barGap={8}>
            <CartesianGrid strokeDasharray="1" vertical={false} />
            <XAxis
                dataKey="day"
                tickLine={false}
                tickMargin={10}
                tickFormatter={(day) => {
                    return day ? day.slice(8, 10) : null;
                }}
            />
            <YAxis
                dataKey="kilogram"
                orientation="right"
                axisLine={false}
                width={40}
                domain={['dataMin-1', 'dataMax+1']}
                tickLine={false}
                tickCount={4}
                tickMargin={5}
            />
            <YAxis
                dataKey="calories"
                orientation="left"
                yAxisId={1}
                hide={true}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#c4c4c4' }} />
            <Legend
                align="right"
                verticalAlign="top"
                iconType="circle"
                iconSize={8}
                height={50}
            />
            <Bar
                dataKey="kilogram"
                name="Poids (kg)"
                fill="#282d30"
                barSize={7}
                shape={<Rectangle radius={[3, 3, 0, 0]} />}
            />
            <Bar
                dataKey="calories"
                name="Calories brûlées (KCal)"
                yAxisId={1}
                fill="#e60000"
                barSize={7}
                shape={<Rectangle radius={[3, 3, 0, 0]} />}
            />
        </BarChart>
    );
}

export default BarChartComp;

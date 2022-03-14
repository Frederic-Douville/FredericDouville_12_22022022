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
import RedCircle from '../../assets/Red_circle.svg';
import BlackCircle from '../../assets/Black_circle.svg';
import PropTypes from 'prop-types';
import './dailyActivity.css';

/** return a specified legend of the chart */
const renderLegend = () => {
    return (
        <div className="daily-activity-legend">
            <p>
                <img
                    className="icon-circle"
                    src={RedCircle}
                    alt="cercle rouge"
                />
                Poids (kg)
            </p>
            <p>
                <img
                    className="icon-circle"
                    src={BlackCircle}
                    alt="cercle noir"
                />
                Calories brûlées (kCal)
            </p>
        </div>
    );
};

/**
 * return a specified tooltip which appear when the cursor is hover a couple of bar
 * @param {boolean} active
 * @param {number} payload
 * @returns {DOMImplementation}
 */

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

/**
 * implement a bar chart which show the user's daily activity
 * @param {array} data array of object
 * @returns {DOMImplementation}
 */
function DailyActivity({ data }) {
    return (
        <BarChart width={795} height={280} data={data} barGap={8}>
            <CartesianGrid strokeDasharray="1" vertical={false} />
            <XAxis
                dataKey="day"
                tick={{ fill: '#9b9eac' }}
                tickLine={false}
                tickMargin={10}
                tickFormatter={(day) => {
                    return day ? day.slice(8, 10) : null;
                }}
                stroke="#dedede"
            />
            <YAxis
                dataKey="kilogram"
                orientation="right"
                axisLine={false}
                width={40}
                domain={['dataMin-1', 'dataMax+1']}
                tick={{ fill: '#9b9eac' }}
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
            <Tooltip content={CustomTooltip} cursor={{ fill: '#c4c4c4' }} />
            <Legend verticalAlign="top" content={renderLegend} height={75} />
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

DailyActivity.propTypes = {
    data: PropTypes.array,
};

export default DailyActivity;

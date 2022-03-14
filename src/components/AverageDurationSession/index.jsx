import { LineChart, XAxis, YAxis, Line, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import './averageDurationSession.css';

/**
 * return a specified tooltip which which appear when the cursor is hover a point of the line
 * @param {boolean} active
 * @param {number} payload
 * @returns {DOMImplementation}
 */

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip-average-session">
                <p className="value-average-session">{payload[0].value} min</p>
            </div>
        );
    }
    return null;
};

/**
 * implement a line chart which show the user's average duration session
 * @param {array} data array of object
 * @returns {DOMImplementation}
 */
function AverageDurationSession({ data }) {
    return (
        <LineChart
            id="line-chart"
            className="line-chart-ctn"
            width={258}
            height={263}
            data={data}
            style={{
                backgroundColor: '#ff0000',
                borderRadius: '5px',
                padding: '0',
            }}
            onMouseMove={(event) => {
                const container = document.getElementById('line-chart');
                const widthContainer = container.clientWidth;
                const cursorPosition = Math.round(
                    (event.activeCoordinate?.x / widthContainer) * 100
                );
                container.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${cursorPosition}%,rgba(230,0,0,1) ${cursorPosition}% )`;
                container.style.borderRadius = '5px';
            }}
            onMouseLeave={() => {
                const container = document.getElementById('line-chart');
                container.style.background = 'rgba(255,0,0,1)';
            }}
        >
            <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{
                    fill: '#ffffff',
                    opacity: '50%',
                    fontSize: '12',
                }}
                padding={{ left: 10, right: 10 }}
                tickFormatter={(day) => {
                    const dayFirstLetter = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
                    return day ? dayFirstLetter[day - 1] : null;
                }}
            />
            <YAxis hide={true} domain={['dataMin-10', 'dataMax+50']} />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Line
                id="chart-line"
                type="natural"
                dataKey="sessionLength"
                stroke="url(#gradient-line)"
                strokeWidth={2}
                dot={false}
                activeDot={{ fill: '#ffffff' }}
            />
            <defs>
                <linearGradient id="gradient-line">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,1)" />
                </linearGradient>
            </defs>
        </LineChart>
    );
}

AverageDurationSession.propTypes = {
    data: PropTypes.array,
};

export default AverageDurationSession;

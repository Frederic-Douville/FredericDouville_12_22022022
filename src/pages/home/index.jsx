import { useParams } from 'react-router-dom';
import { useCallAPI } from '../../utils/hook/useCallAPI';
import { AverageDurationSession, DailyActivity } from '../../components';
import './home.css';

function Home() {
    const { id } = useParams();

    const { datas, loader, error } = useCallAPI(id);

    console.log(datas);

    return (
        <div className="home-ctn">
            <div className="greetings-ctn">
                <p className="salutation">
                    Bonjour{' '}
                    <span className="name">
                        {datas.user?.data.userInfos.firstName}
                    </span>
                </p>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="daily-activity-ctn">
                <span className="daily-activity-title">
                    Activité quotidienne
                </span>
                <DailyActivity data={datas.activity?.data.sessions} />
            </div>
            <div className="undercharts-ctn">
                <div className="chart-ctn average-duration-session-ctn">
                    <span className="average-duration-session-title">
                        Durée moyenne des sessions
                    </span>
                    <AverageDurationSession
                        data={datas.averageSession?.data.sessions}
                    />
                </div>
                <div className="chart-ctn"></div>
                <div className="chart-ctn"></div>
            </div>
            <div className="card-ctn">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </div>
    );
}

export default Home;

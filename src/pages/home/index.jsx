import { useParams } from 'react-router-dom';
import { useCallAPI } from '../../utils/hook/useCallAPI';
import { useCallMockedData } from '../../utils/hook/useCallMockedData';
import {
    ActivityType,
    AverageDurationSession,
    AverageScore,
    DailyActivity,
    Card,
} from '../../components';
import Energy from '../../assets/energy.svg';
import Chicken from '../../assets/chicken.svg';
import Apple from '../../assets/apple.svg';
import Cheeseburger from '../../assets/cheeseburger.svg';
import './home.css';
import './loader.css';

function Home() {
    const { id } = useParams();
    //const { datas, loader, error } = useCallAPI(id);

    const urlDataMocked =
        'https://raw.githubusercontent.com/Frederic-Douville/FredericDouville_12_22022022/main/src/data/data.js';
    const { datas, loader, error } = useCallMockedData(id, urlDataMocked);
    console.log(datas);

    const cardInfoArray = [
        {
            data: datas.user?.data.keyData.calorieCount * 0.001,
            logo: Energy,
            desc: 'logo energie',
            color: 'red',
            unit: 'kCal',
            kind: 'Calories',
        },
        {
            data: datas.user?.data.keyData.proteinCount,
            logo: Chicken,
            desc: 'logo cuisse de poulet',
            color: 'blue',
            unit: 'g',
            kind: 'Protéines',
        },
        {
            data: datas.user?.data.keyData.carbohydrateCount,
            logo: Apple,
            desc: 'logo pomme',
            color: 'yellow',
            unit: 'g',
            kind: 'Glucides',
        },
        {
            data: datas.user?.data.keyData.lipidCount,
            logo: Cheeseburger,
            desc: 'logo cheeseburger',
            color: 'pink',
            unit: 'g',
            kind: 'Lipides',
        },
    ];

    if (error && !loader) {
        return (
            <div className="error-ctn">
                <span className="error-msg">Oups !! Il y a eu une erreur.</span>
            </div>
        );
    }

    return (
        <div className="home-ctn">
            {loader ? (
                <div className="loader-container">
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="greetings-ctn">
                        <p className="salutation">
                            Bonjour{' '}
                            <span className="name">
                                {datas.user?.data.userInfos.firstName}
                            </span>
                        </p>
                        <p>
                            Félicitation ! Vous avez explosé vos objectifs hier
                            👏
                        </p>
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
                        <div className="chart-ctn activity-type-ctn">
                            <ActivityType data={datas.performance?.data.data} />
                        </div>
                        <div className="chart-ctn average-score-ctn">
                            <span className="average-score-title">Score</span>
                            <AverageScore data={[datas.user?.data]} />
                        </div>
                    </div>
                    <div className="card-ctn">
                        {cardInfoArray.map(
                            ({
                                data,
                                logo,
                                desc,
                                color,
                                unit,
                                kind,
                                index,
                            }) => (
                                <Card
                                    key={kind + index}
                                    data={data}
                                    logo={logo}
                                    desc={desc}
                                    color={color}
                                    unit={unit}
                                    kind={kind}
                                />
                            )
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;

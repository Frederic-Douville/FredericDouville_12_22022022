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
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // To use the API call, uncomment l.24 to l.33 and comment l.39 to l.50 (launch before the API in Docker or else first)
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const { datas, loader, error } = useCallAPI(id);
    const firstName = datas.user?.data.userInfos.firstName;
    const calorieCount = datas.user?.data.keyData.calorieCount;
    const proteinCount = datas.user?.data.keyData.proteinCount;
    const carbohydrateCount = datas.user?.data.keyData.carbohydrateCount;
    const lipidCount = datas.user?.data.keyData.lipidCount;
    const dailyActivity = datas.activity?.data.sessions;
    const performance = datas.performance?.data.data;
    const score = datas.user?.data;
    const sessions = datas.averageSession?.data.sessions;

    ///////////////////////////////////////////////////////////////////////////////
    // To use the mocked data call, uncomment l.39 to l.50 and comment l.24 to l.33
    ///////////////////////////////////////////////////////////////////////////////

    // const urlDataMocked =
    //     'https://raw.githubusercontent.com/Frederic-Douville/FredericDouville_12_22022022/main/src/data/data.json';
    // const { datas, loader, error } = useCallMockedData(id, urlDataMocked);
    // const firstName = datas.userInfos?.firstName;
    // const calorieCount = datas.keyData?.calorieCount;
    // const proteinCount = datas.keyData?.proteinCount;
    // const carbohydrateCount = datas.keyData?.carbohydrateCount;
    // const lipidCount = datas.keyData?.lipidCount;
    // const dailyActivity = datas?.dailyActivity;
    // const performance = datas?.performance;
    // const score = { score: datas?.score };
    // const sessions = datas?.sessions;

    const cardInfoArray = [
        {
            data: calorieCount * 0.001,
            logo: Energy,
            desc: 'logo energie',
            color: 'red',
            unit: 'kCal',
            kind: 'Calories',
        },
        {
            data: proteinCount,
            logo: Chicken,
            desc: 'logo cuisse de poulet',
            color: 'blue',
            unit: 'g',
            kind: 'Protéines',
        },
        {
            data: carbohydrateCount,
            logo: Apple,
            desc: 'logo pomme',
            color: 'yellow',
            unit: 'g',
            kind: 'Glucides',
        },
        {
            data: lipidCount,
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
                            Bonjour <span className="name">{firstName}</span>
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
                        <DailyActivity data={dailyActivity} />
                    </div>
                    <div className="undercharts-ctn">
                        <div className="chart-ctn average-duration-session-ctn">
                            <span className="average-duration-session-title">
                                Durée moyenne des sessions
                            </span>
                            <AverageDurationSession data={sessions} />
                        </div>
                        <div className="chart-ctn activity-type-ctn">
                            <ActivityType data={performance} />
                        </div>
                        <div className="chart-ctn average-score-ctn">
                            <span className="average-score-title">Score</span>
                            <AverageScore data={[score]} />
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

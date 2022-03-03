import { useParams } from 'react-router-dom';
import { useCallAPI } from '../../utils/hook/useCallAPI';
import { BarChartComp } from '../../components';
import './home.css';

function Home() {
    const { id } = useParams();

    const { datas, loader, error } = useCallAPI(id);

    console.log(datas);
    console.log(datas.activity?.data.sessions);

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
            <div className="barchart-ctn">
                <BarChartComp data={datas.activity?.data.sessions} />
            </div>
            <div className="undercharts-ctn">
                <div className="chart-ctn"></div>
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

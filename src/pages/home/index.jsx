import { Link, useParams } from 'react-router-dom';
import { useCallAPI } from '../../utils/hook/useCallAPI';
import './home.css';

function Home() {
    const { id } = useParams();

    const { datas, loader, error } = useCallAPI(id);

    console.log(datas);
    console.log();

    return (
        <div className="greetings-ctn">
            <p className="salutation">
                Bonjour{' '}
                <span className="name">
                    {datas[0]?.data.data.userInfos.firstName}
                </span>
            </p>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}

export default Home;

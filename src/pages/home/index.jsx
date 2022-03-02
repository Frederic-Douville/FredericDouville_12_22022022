import { useParams } from 'react-router-dom';
import { useCallAPI } from '../../utils/hook/useCallAPI';
import './home.css';

function Home() {
    const { id } = useParams();

    const { datas, loader, error } = useCallAPI(id);

    console.log(datas);

    return (
        <div className="greetings-ctn">
            <p className="salutation">
                Bonjour{' '}
                <span className="name">
                    {datas.user?.data.userInfos.firstName}
                </span>
            </p>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}

export default Home;

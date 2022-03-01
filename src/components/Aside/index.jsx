import Meditation from '../../assets/meditation.svg';
import Swimmer from '../../assets/swimmer.svg';
import Cyclist from '../../assets/cyclist.svg';
import Alter from '../../assets/alter.svg';
import './aside.css';

function Aside() {
    return (
        <div className="aside-ctn">
            <div className="aside-all-logo-ctn">
                <div className="aside-logo-ctn">
                    <img src={Meditation} alt="meditation" />
                </div>
                <div className="aside-logo-ctn">
                    <img src={Swimmer} alt="nageur" />
                </div>
                <div className="aside-logo-ctn">
                    <img src={Cyclist} alt="cycliste" />
                </div>
                <div className="aside-logo-ctn">
                    <img src={Alter} alt="altère" />
                </div>
            </div>
            <div className="copyright-ctn">
                <span className="copyright">Copyright, SportSee 2020</span>
            </div>
        </div>
    );
}

export default Aside;

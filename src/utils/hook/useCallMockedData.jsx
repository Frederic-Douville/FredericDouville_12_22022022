import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export function useCallMockedData(id, url) {
    const [datas, setDatas] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getDatas() {
            try {
                setLoader(true);
                const datas = await axios.get(url);

                if (datas) {
                    setDatas(datas);
                    setLoader(false);
                }
            } catch (error) {
                setLoader(false);
                setError(true);
                throw new Error('Erreur de call de Data mockée');
            }
        }
        getDatas();
    }, [id, url]);
    return { datas, loader, error };
}

useCallMockedData.propTypes = {
    id: PropTypes.number,
    url: PropTypes.string,
};

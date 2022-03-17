import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export function useCallMockedData(id, url) {
    const [datas, setDatas] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return setError(true);
        async function getDatas() {
            try {
                setLoader(true);
                const response = await fetch(url);
                const datas = await response.json();
                setDatas(() =>
                    datas.map((item) =>
                        item.id === id ? setDatas(item) : null
                    )
                );
                setLoader(false);
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

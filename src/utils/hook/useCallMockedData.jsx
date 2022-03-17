import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Send a request to an URL with ID user in order to have user information
 * @param {Number} id
 * @param {string} url
 * @returns {Promise}
 * @returns {Promise.resolve<Array>} datas Array of object
 * @returns {Promise.resolve<Boolean>} loader
 * @returns {Promise.reject<Error>} error
 */

export function useCallMockedData(id, url) {
    const [datas, setDatas] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url || !id) return setError(true);
        async function getDatas() {
            try {
                setLoader(true);
                const response = await fetch(url);
                const datas = await response.json();

                setDatas(() =>
                    datas.map((item) =>
                        item.id === id.toString() ? setDatas(item) : null
                    )
                );

                setLoader(false);
            } catch (error) {
                setLoader(false);
                setError(true);
                throw new Error('Erreur de call fetch');
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

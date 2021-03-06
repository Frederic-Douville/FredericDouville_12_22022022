import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

/**
 * Send a request to API with an array of endpoints with ID user in order to have user information
 * @param {Number} id
 * @returns {Promise}
 * @returns {Promise.resolve<Array>} datas Array of object
 * @returns {Promise.resolve<Boolean>} loader
 * @returns {Promise.reject<Error>} error
 */
export function useCallAPI(id) {
    const [datas, setDatas] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const endPoints = [
            `http://localhost:3000/user/${id}`,
            `http://localhost:3000/user/${id}/activity`,
            `http://localhost:3000/user/${id}/average-sessions`,
            `http://localhost:3000/user/${id}/performance`,
        ];
        async function getDatas() {
            try {
                setLoader(true);
                await axios
                    .all(endPoints.map((endpoint) => axios.get(endpoint)))
                    .then(
                        axios.spread(
                            (
                                { data: user },
                                { data: activity },
                                { data: averageSession },
                                { data: performance }
                            ) => {
                                setDatas({
                                    user,
                                    activity,
                                    averageSession,
                                    performance,
                                });
                                setLoader(false);
                            }
                        )
                    );
            } catch (error) {
                setLoader(false);
                setError(true);
                throw new Error('Erreur de call API');
            }
        }
        getDatas();
    }, [id]);
    return { datas, loader, error };
}

useCallAPI.propTypes = {
    id: PropTypes.number,
};

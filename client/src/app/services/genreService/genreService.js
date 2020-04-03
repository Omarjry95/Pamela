import axios from "axios";
import FuseUtils from '../../utils/Utils';

class genreService extends FuseUtils.EventEmitter
{
    getGenresWithCategories = () =>
    {
        return new Promise((resolve, reject) =>
        {
            axios.get('http://localhost:5000/genres/getAll')
                .then(response =>
                {
                    if ( response.status === 200 )
                    {
                        resolve(response.data);
                    }
                    else
                    {
                        reject(response.data);
                    }
                })
                .catch(error =>
                {
                    reject(error.response.data);
                });
        });
    };
}

const instance = new genreService();

export default instance;
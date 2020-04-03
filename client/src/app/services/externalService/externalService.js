import axios from "axios";
import FuseUtils from '../../utils/Utils';

class externalService extends FuseUtils.EventEmitter
{
    getExternals = () =>
    {
        return new Promise((resolve, reject) =>
        {
            axios.get('http://localhost:5000/externals/getAll')
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

const instance = new externalService();

export default instance;
import axios from "axios";
import FuseUtils from '../../utils/Utils';

class artistService extends FuseUtils.EventEmitter
{
    addArtist = (artist) =>
    {
        return new Promise((resolve, reject) =>
        {
            axios.post('http://localhost:5000/artists/new', artist, {
                headers:
                    {
                        "Content-Type": "multipart/form-data"
                    }
            })
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

    addArtistWithoutImage = (artist) =>
    {
        return new Promise((resolve, reject) =>
        {
            axios.post('http://localhost:5000/artists/new/imageless', artist)
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

const instance = new artistService();

export default instance;
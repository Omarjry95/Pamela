import axios from "axios";
import FuseUtils from '../../utils/Utils';
import { openDB } from 'idb';
const queryString = require('query-string');

class userService extends FuseUtils.EventEmitter
{
    credentials = {
        client_id: "",
        client_password: ""
    };

    signIn = (credentials) =>
    {
        return new Promise((resolve, reject) =>
        {
            axios.post('http://localhost:5000/users/signin', credentials)
                .then(response =>
                {
                    if ( response.status === 200 )
                    {
                        this.storeUserData(response.data)
                            .then(r =>
                            {
                                resolve(response.data);
                            });
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

    signInSpotify = () =>
    {
        return new Promise((resolve, reject) =>
        {
            axios.post('https://accounts.spotify.com/api/token',
                queryString.stringify({
                    grant_type: 'client_credentials'
                }), {
                    headers: {
                        Authorization: "Basic " +
                            new Buffer(this.credentials.client_id + ':' + this.credentials.client_password)
                                .toString('base64')
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

    storeUserData = async (data) =>
    {
        localStorage.setItem('pamela_user_has_signed_in', data.success);

        let db = await openDB('pamela_current_user_db', 1,
            {
                upgrade(db)
                {
                    const store = db.createObjectStore(
                        'pamela_current_user_db',
                        {
                            keyPath: 'id',
                            autoIncrement: true
                        });

                    store.createIndex('pamela_current_user', 'pamela_current_user',
                        {unique: true});
                },
        });

        const transaction = db.transaction('pamela_current_user_db', 'readwrite');
        const store = transaction.objectStore('pamela_current_user_db');

        const user = {
            id: data.user.id,
            username: data.user.username,
            lastSignIn: data.user.lastSignIn,
            profilePicture: data.user.profilePicture
        };

        await store.put(user);

        await transaction.done;
    };
}

const instance = new userService();

export default instance;
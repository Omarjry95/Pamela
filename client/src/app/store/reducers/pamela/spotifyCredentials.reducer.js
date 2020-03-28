import * as Actions from '../../actions';

const initialState = {
    access_token: ""
};

const spotifyCredentials = function (state = initialState, action)
{
    switch ( action.type )
    {
        case Actions.SIGN_IN_SPOTIFY:
        {
            return action.payload;
        }
        case Actions.SIGN_IN_SPOTIFY_ERROR:
        {
            return action.payload;
        }
        default:
        {
            return state
        }
    }
};

export default spotifyCredentials;
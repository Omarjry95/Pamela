import * as Actions from '../../actions';

const initialState = {
    name: "",
    image: null,
    genres: [],
    links: []
};

const artist = function (state = initialState, action)
{
    switch ( action.type )
    {
        case Actions.UPDATE_ARTIST_STATE:
        {
            return action.payload;
        }
        default:
        {
            return state
        }
    }
};

export default artist;
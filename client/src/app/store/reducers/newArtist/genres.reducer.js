import * as Actions from '../../actions';

const initialState = {
    operation: false,
    message: "",
    list: []
};

const genres = function (state = initialState, action)
{
    switch ( action.type )
    {
        case Actions.GET_GENRES:
        {
            return {
                operation: true,
                message: "",
                list: action.payload
            };
        }
        case Actions.GET_GENRES_ERROR:
        {
            return {
                operation: false,
                message: action.payload.message,
                list: []
            };
        }
        default:
        {
            return state
        }
    }
};

export default genres;
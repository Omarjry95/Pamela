import * as Actions from '../../actions';

const initialState = "mainLayout";

const layout = function (state = initialState, action)
{
    switch ( action.type )
    {
        case Actions.SET_LAYOUT:
        {
            return action.payload;
        }
        default:
        {
            return state
        }
    }
};

export default layout;
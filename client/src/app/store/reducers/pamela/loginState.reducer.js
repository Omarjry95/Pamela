import * as Actions from '../../actions/actions';

const initialState = {
    success: false,
    message: "",
    user: null
};

const loginState = function (state = initialState, action)
{
    switch ( action.type )
    {
        case Actions.SIGN_IN:
        {
            return {
                success: action.payload.success,
                message: action.payload.message,
                user: action.payload.user
            };
        }
        case Actions.SIGN_IN_ERROR:
        {
            return {
                success: action.payload.success,
                message: action.payload.message,
                user: action.payload.user
            };
        }
        case Actions.UPDATE_LOGIN_STATE:
        {
            return {
                success: action.payload.success,
                message: action.payload.message,
                user: action.payload.user
            };
        }
        case Actions.LOG_OUT:
        {
            return {
                success: action.payload.success,
                message: action.payload.message,
                user: action.payload.user
            };
        }
        default:
        {
            return state
        }
    }
};

export default loginState;
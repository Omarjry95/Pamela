import userService from '../../../services/userService'

export const UPDATE_LOGIN_STATE = 'UPDATE_LOGIN_STATE';
export const LOG_OUT = 'LOG_OUT';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

export const SIGN_IN_SPOTIFY = 'SIGN_IN_SPOTIFY';
export const SIGN_IN_SPOTIFY_ERROR = 'SIGN_IN_SPOTIFY_ERROR';

export function signIn(credentials)
{
    return (dispatch) =>
        userService.signIn(credentials)
            .then((data) =>
                {
                    return dispatch({
                        type: SIGN_IN,
                        payload: data
                    });
                }
            )
            .catch(error =>
            {
                return dispatch({
                    type   : SIGN_IN_ERROR,
                    payload: error
                });
            });
}

export function signInSpotify()
{
    return (dispatch) =>
        userService.signInSpotify()
            .then((data) =>
                {
                    return dispatch({
                        type: SIGN_IN_SPOTIFY,
                        payload: data
                    });
                }
            )
            .catch(error =>
            {
                return dispatch({
                    type   : SIGN_IN_SPOTIFY_ERROR,
                    payload: error
                });
            });
}

export function updateLoginState(user)
{
    return {
        type: UPDATE_LOGIN_STATE,
        payload: {
            success: true,
            message: "",
            user: user
        }
    }
}

export function logOut()
{
    sessionStorage.clear();

    return {
        type: LOG_OUT,
        payload: {
            success: false,
            message: "",
            user: null
        }
    }
}
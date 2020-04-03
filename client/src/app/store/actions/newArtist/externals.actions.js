import externalService from "../../../services/externalService";

export const GET_EXTERNALS = 'GET_EXTERNALS';
export const GET_EXTERNALS_ERROR = 'GET_EXTERNALS_ERROR';

export function getExternals()
{
    return (dispatch) =>
        externalService.getExternals()
            .then((data) =>
                {
                    return dispatch({
                        type: GET_EXTERNALS,
                        payload: data
                    });
                }
            )
            .catch(error =>
            {
                return dispatch({
                    type   : GET_EXTERNALS_ERROR,
                    payload: error
                });
            });
}
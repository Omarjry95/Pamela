import genreService from '../../../services/genreService';

export const GET_GENRES = 'GET_GENRES';
export const GET_GENRES_ERROR = 'GET_GENRES_ERROR';

export function getGenresWithCategories()
{
    return (dispatch) =>
        genreService.getGenresWithCategories()
            .then((data) =>
                {
                    return dispatch({
                        type: GET_GENRES,
                        payload: data
                    });
                }
            )
            .catch(error =>
            {
                return dispatch({
                    type   : GET_GENRES_ERROR,
                    payload: error
                });
            });
}
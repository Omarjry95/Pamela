import artistService from "../../../services/artistService";

export const GET_ARTISTS = 'GET_ARTISTS';
export const GET_ARTISTS_ERROR = 'GET_ARTISTS_ERROR';

export const UPDATE_ARTIST_STATE = 'UPDATE_ARTIST_STATE';

export function updateArtistState(artist)
{
    return {
        type: UPDATE_ARTIST_STATE,
        payload: artist
    }
}

export function addArtist(artist)
{
    return (dispatch) =>
        artistService.addArtist(artist)
            .then((data) =>
                {
                    return dispatch({
                        type: GET_ARTISTS,
                        payload: data
                    });
                }
            )
            .catch(error =>
            {
                return dispatch({
                    type   : GET_ARTISTS_ERROR,
                    payload: error
                });
            });
}

export function addArtistWithoutImage(artist)
{
    return (dispatch) =>
        artistService.addArtistWithoutImage(artist)
            .then((data) =>
                {
                    return dispatch({
                        type: GET_ARTISTS,
                        payload: data
                    });
                }
            )
            .catch(error =>
            {
                return dispatch({
                    type   : GET_ARTISTS_ERROR,
                    payload: error
                });
            });
}
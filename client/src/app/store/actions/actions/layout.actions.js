export const SET_LAYOUT = 'SET_LAYOUT';

export function setLayout(value)
{
    return {
        type: SET_LAYOUT,
        payload: value
    }
}
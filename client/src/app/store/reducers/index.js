import {combineReducers} from 'redux';
import pamela from './pamela';
import artists from './artists';
import newArtist from './newArtist';

const createReducer = (asyncReducers) =>
    combineReducers({
        pamela,
        artists,
        newArtist,
        ...asyncReducers
    });

export default createReducer;
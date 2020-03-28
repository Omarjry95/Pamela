import {combineReducers} from 'redux';
import pamela from './pamela';

const createReducer = (asyncReducers) =>
    combineReducers({
        pamela,
        ...asyncReducers
    });

export default createReducer;
import {combineReducers} from 'redux';
import artistsList from './artists.reducer';

const artists = combineReducers({
    artistsList
});

export default artists;
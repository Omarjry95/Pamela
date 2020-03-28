import {combineReducers} from 'redux';
import layout from './layout.reducer';
import loginState from './loginState.reducer';
import spotifyCredentials from './spotifyCredentials.reducer';

const pamela = combineReducers({
    layout,
    loginState,
    spotifyCredentials,
});

export default pamela;
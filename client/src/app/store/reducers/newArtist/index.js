import {combineReducers} from 'redux';
import artist from './artist.reducer';
import genres from './genres.reducer';
import externals from './externals.reducer';

const newArtist = combineReducers({
    artist,
    genres,
    externals
});

export default newArtist;
import { combineReducers } from 'redux';
import PlayerReducers from './Player';

const allReducers = combineReducers ({
    player: PlayerReducers
});

export default allReducers;
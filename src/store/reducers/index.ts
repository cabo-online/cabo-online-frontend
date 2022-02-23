import { combineReducers } from 'redux';
import gameReducer from './game';

export const rootReducer = combineReducers({
    game: gameReducer
});

export type RootState = ReturnType<typeof rootReducer>

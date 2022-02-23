import { AnyAction } from 'redux';
import { CREATE_NEW_GAME_ERROR, CREATE_NEW_GAME_LOADING, CREATE_NEW_GAME_SUCCESS } from '../types';

export interface GameState {
    loading: boolean,
    success: boolean,
    statusCode: number,
    message: string,
    data?: any
}

const initialState: GameState = {
    loading: false,
    success: false,
    statusCode: 200,
    message: ''
};

const mainReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case CREATE_NEW_GAME_ERROR:
        return { ...state, ...action.payload, loading: false };
    case CREATE_NEW_GAME_LOADING:
        return { ...state, loading: true };
    case CREATE_NEW_GAME_SUCCESS:
        return { ...state, ...action.payload, loading: false };
    default:
        return state;
    }
};

export default mainReducer;
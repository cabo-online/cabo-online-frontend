import { Dispatch } from "redux";
import gameService from "../../services/gameService";
import { CREATE_NEW_GAME_ERROR, CREATE_NEW_GAME_LOADING, CREATE_NEW_GAME_SUCCESS } from "../types";

export function createNewGame(name: string) {
    return function(dispatch: Dispatch<any>) {
        dispatch({
            type: CREATE_NEW_GAME_LOADING
        });

        gameService.createNewGame(name)
            .then(data => {
                dispatch({
                    type: CREATE_NEW_GAME_SUCCESS,
                    payload: data.data
                });
            }).catch(err => {
                dispatch({
                    type: CREATE_NEW_GAME_ERROR,
                    payload: err.response
                });
            });
    }
}
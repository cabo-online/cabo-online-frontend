import { API_CREATE_GAME_URL } from ".";
import common from "./common";

class GameService {
    createNewGame(name: string) {
        return common.post(API_CREATE_GAME_URL, { name });
    }
}

export default new GameService();
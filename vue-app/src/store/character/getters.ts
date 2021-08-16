import { GetterTree } from "vuex";
import { RootState } from "../types";
import { CharacterState } from "./types";

export const getters: GetterTree<CharacterState, RootState> = {

    getCharacterDetails: (state): CharacterState => state,

}
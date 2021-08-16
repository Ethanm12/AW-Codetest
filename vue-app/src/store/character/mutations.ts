import { MutationTree } from "vuex";
import { CharacterState } from "./types";

export enum characterMutations {
  addCharacterData = "addCharacterData",
}

export const mutations: MutationTree<CharacterState> = {
  [characterMutations.addCharacterData](state: CharacterState, payload: CharacterState) {
    state.name = payload.name;
    state.luck = payload.luck;
    state.equipment = payload.equipment;
    state.hitPoints = payload.hitPoints;
    state.wealth = payload.wealth;
  },
};

import { CharacterModel, getCharacter } from "@/apiRequests";
import { ActionTree } from "vuex";
import { RootState } from "../types";
import { CharacterState } from "./types";
import { uniqueNamesGenerator, starWars } from "unique-names-generator";


export const actions: ActionTree<CharacterState, RootState> = {

  async setCharacter({ commit }): Promise<void> {
    const character = await getCharacter();
      const shortName = uniqueNamesGenerator({
        dictionaries: [starWars],
      });
      character.name = shortName;
    
    commit("addCharacterData", character);
  },

  async updateCharacter({ commit, state }): Promise<void> {
    const characterData = await getCharacter() as CharacterModel;
    const character = {} as CharacterModel;
    console.log(state);
    character.name = state.name;
    character.wealth = characterData.wealth;
    character.luck = characterData.luck;
    character.hitPoints = characterData.hitPoints;
    character.equipment = characterData.equipment;

    if (character.equipment.length >= 0) {
      for (let i = 0; i < character.equipment.length; i++) {
        character.luck += characterData.equipment[i].luckModifier;
        character.hitPoints += characterData.equipment[i].hpModifier;
      }
    }
    commit("addCharacterData", character);
  },
};

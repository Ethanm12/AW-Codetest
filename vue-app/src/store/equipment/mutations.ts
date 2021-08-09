import { MutationTree } from "vuex";
import { EquipmentListModel, EquipmentModel } from "./types";

export enum characterMutations {
  addCharacterData = "addCharacterData",
}

export const mutations: MutationTree<EquipmentListModel> = {
  addEquipment(state: EquipmentListModel, payload: EquipmentModel) {
    // for(let i = 0; i < payload.length; i++){
        state.equipment.push(payload);
    // }
  },
};

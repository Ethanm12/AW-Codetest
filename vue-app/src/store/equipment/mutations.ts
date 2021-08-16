import { MutationTree } from "vuex";
import { EquipmentListModel, EquipmentModel } from "./types";

export enum EquipmentMutations {
  addEquipment      = "addEquipment",
  removeEquipment   = "removeEquipment"
}

export const mutations: MutationTree<EquipmentListModel> = {
  [EquipmentMutations.addEquipment](state: EquipmentListModel, payload: EquipmentModel) {
        state.equipment.push(payload);
  },

  [EquipmentMutations.removeEquipment](state: EquipmentListModel, payload: EquipmentModel["id"]){
    state.equipment.splice(payload, 1);
  }
};

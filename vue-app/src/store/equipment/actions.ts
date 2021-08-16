import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import { EquipmentListModel, EquipmentModel } from "./types";
import { getEquipment } from "@/apiRequests";

export const actions: ActionTree<EquipmentListModel, RootState> = {
  async setEquipment({ commit }): Promise<void> {
    const equipment: EquipmentModel[] = await getEquipment();
    if (equipment) {
      for (let i = 0; i < equipment.length; i++) {
        commit("addEquipment", equipment[i]);
      }
    }
  },

  removeListedProducts({ commit, state }, payload: EquipmentModel[]): void {
    for (let i = 0; i < payload.length; i++) {
      const itemIndex = state.equipment.findIndex(
        (item) => item.id === payload[i].id
      ) as number;

      if (itemIndex !== -1) {
        commit("removeEquipment", itemIndex);
      }
    }
  },
};

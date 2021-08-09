import { ActionTree } from "vuex";
import { RootState } from '@/store/types';
import { EquipmentListModel, EquipmentModel } from "./types";
import { getEquipment } from "@/apiRequests";

export const actions: ActionTree<EquipmentListModel, RootState> = {
  async setEquipment({ commit }) {
    const equipment: EquipmentModel[] = await getEquipment();
    for(let i = 0; i < equipment.length; i++){
        commit("addEquipment", equipment[i]);
    }
  },
};

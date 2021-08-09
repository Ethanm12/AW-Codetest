import { GetterTree } from "vuex";
import { RootState } from '@/store/types';
import { EquipmentListModel } from "./types";

export const getters: GetterTree<EquipmentListModel, RootState> = {

    getEquipment: (state): EquipmentListModel => state,

}
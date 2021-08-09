import { Module } from "vuex";
import { RootState } from '@/store/types';
import { EquipmentListModel } from "./types";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state: EquipmentListModel = {
    equipment: []
}

export const equipment: Module<EquipmentListModel, RootState> = {
    state,
    getters,
    mutations,
    actions
}
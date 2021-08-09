import { Module } from "vuex";
import { RootState } from '@/store/types';
import { CharacterState } from "./types";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state: CharacterState = {
    name: '',
    luck: '',
    hitPoints: '',
    equipment: [],
    wealth: 0
}

export const character: Module<CharacterState, RootState> = {
    state,
    getters,
    mutations,
    actions
}
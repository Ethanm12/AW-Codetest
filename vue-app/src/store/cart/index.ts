import { Module } from "vuex";
import { CartModel } from "./types";
import { RootState } from '@/store/types';
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state: CartModel = {
  cartItems: [],
  cartValue: 0,
  cartCount: 0,
  cartErrorMessage: "",
};

export const cart: Module<CartModel, RootState> = {
  state,
  getters,
  mutations,
  actions,
};

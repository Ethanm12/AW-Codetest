import { GetterTree } from "vuex";
import { CartModel, EquipmentModel } from "./types";
import { RootState } from '@/store/types';

export const getters: GetterTree<CartModel, RootState> = {

  getCartItems: (state): Array<EquipmentModel> => state.cartItems,
  getCartValue: (state): number => state.cartValue,
  getErrorMessage: (state): string => state.cartErrorMessage,

};

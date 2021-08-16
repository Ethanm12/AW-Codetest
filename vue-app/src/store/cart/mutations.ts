import { MutationTree } from "vuex";
import { CartModel, EquipmentModel } from "./types";

export enum CartMutation {
  addErrorMessage   = "addErrorMessage",
  clearCart         = "clearCart",
  clearCartValue    = "clearCartValue",
  addCartItem       = "addCartItem",
  addCartValue      = "addCartValue",
  removeItem        = "removeItem",
  removeCartValue   = "removeCartValue"
}


export const mutations: MutationTree<CartModel> = {
  [CartMutation.addErrorMessage](state: CartModel, payload: string) {
    state.cartErrorMessage = payload;
  },

  [CartMutation.clearCart](state: CartModel) {
    state.cartItems = [];
  },

  [CartMutation.clearCartValue](state: CartModel) {
    state.cartValue = 0;
  },

  [CartMutation.addCartItem](state: CartModel, payload: EquipmentModel)  {
    state.cartItems.push(payload);
    state.cartCount++;
  },

  [CartMutation.addCartValue](state: CartModel, payload: number) {
    state.cartValue += payload;
  },

  [CartMutation.removeItem](state: CartModel, payload: number) {
    state.cartItems.splice(payload, 1);
    state.cartCount--;
  },

  [CartMutation.removeCartValue](state: CartModel, payload: number) {
    state.cartValue -= payload;
  },
};

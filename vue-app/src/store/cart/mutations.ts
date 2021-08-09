import { MutationTree } from "vuex";
import { CartModel } from "./types";


export const mutations: MutationTree<CartModel> = {
  addErrorMessage(state, payload) {
    state.cartErrorMessage = payload;
  },

  clearCart(state) {
    state.cartItems = [];
  },

  clearCartValue(state) {
    state.cartValue = 0;
  },

  addCartItem(state, payload) {
    state.cartItems.push(payload);
    state.cartCount++;
  },

  addCartValue(state, payload) {
    state.cartValue += payload;
  },

  removeItem(state, payload) {
    state.cartItems.splice(payload, 1);
    state.cartCount--;
  },

  removeCartValue(state, payload) {
    state.cartValue -= payload;
  },
};

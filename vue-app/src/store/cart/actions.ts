import { ActionTree } from "vuex";
import { CartModel, EquipmentModel } from "./types";
import { RootState } from "@/store/types";
import { postItems } from "@/apiRequests";

export const actions: ActionTree<CartModel, RootState> = {
  addItemToCart({ commit, state }, payload: EquipmentModel): void {
    let errorMessage = "";
    const found = state.cartItems.findIndex((item) => item.id === payload.id);

    commit("addErrorMessage", errorMessage);
    if (found != -1) {
      errorMessage = "Item already in Cart";
      commit("addErrorMessage", errorMessage);
    } else {
      commit("addCartItem", payload);
      commit("addCartValue", payload.value);
    }
  },

  async checkout({ commit, dispatch, state, rootState }): Promise<void> {
    let payload = "";
    let errorMessage = "";
    
    commit("addErrorMessage", errorMessage);
    if (state.cartValue > rootState.character.wealth) {
      errorMessage = "You do not have enough Wealth";
      commit("addErrorMessage", errorMessage);
    } else {
      for (let i = 0; i < state.cartItems.length; i++) {
        payload = state.cartItems[i].id;
        await postItems({ equipmentId: payload }).catch(() => {
          errorMessage = "You cannot purchase items";
          commit("addErrorMessage", errorMessage);
        });
        dispatch("removeListedProducts", state.cartItems);
      }
    }

    commit("clearCart");
    commit("clearCartValue");
    dispatch("updateCharacter");
  },

  removeFromCart({ state, commit }, payload: EquipmentModel): void {
    const itemIndex = state.cartItems.findIndex(
      (item) => item.id === payload.id
    ) as number;
    const findItem = state.cartItems.find(
      (item) => item.id === payload.id
    ) as EquipmentModel;
    let errorMessage = "";

    commit("addErrorMessage", errorMessage);
    if (itemIndex !== -1) {
      commit("removeItem", itemIndex);
      commit("removeCartValue", findItem.value);
    } else {
      errorMessage = "Item is not on record. Please try again.";
      commit("addErrorMessage", errorMessage);
    }
  },
};

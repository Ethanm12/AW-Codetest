import Vue from "vue";
import Vuex from "vuex";
import { getCharacter, getEquipment, postItems } from "./apiRequests";
import { uniqueNamesGenerator, starWars } from "unique-names-generator";

Vue.use(Vuex);


const state = {

  //Equipment
  equipment: {},

  //Character
  characterData: {},
  currentEquipment: [],

  //Cart
  cartItems: [],
  cartValue: 0,
  cartErrorMessage: "",
};

const mutations = {
  addEquipment(state, payload) {
    state.equipment = payload;
  },

  //Cart functions
  clearCart(state) {
    state.cartItems = [];
  },

  clearCartValue(state) {
    state.cartValue = 0;
  },

  addCartValue(state, payload) {
    state.cartValue += payload;
  },

  removeCartValue(state, payload) {
    state.cartValue -= payload;
  },

  addCartItem(state, payload) {
    state.cartItems.push(payload);
    state.cartCount++;
  },

  removeItem(state, payload) {
    state.cartItems.splice(payload, 1);
    state.cartCount--;
  },

  addErrorMessage(state, payload) {
    state.cartErrorMessage = payload;
  },

  //Character Mutations
  addCharacterData(state, payload) {
    state.characterData = payload;
  },

  addCharacterName(state, payload) {
    state.characterData.name = payload;
  },
};
const actions = {

  //Equipment Actions
  async setEquipment(state) {
    const equipment = await getEquipment();
    if (state.equipment !== null) {
      state.commit("addEquipment", equipment);
    }
  },

  //Character Actions
  async setCharacter(state) {
    const character = await getCharacter();
    if (character.equipment.length !== 0) {
      for (let i = 0; i < character.equipment.length; i++) {
        character.luck += character.equipment[i].luckModifier;
        character.hitPoints += character.equipment[i].hpModifier;
      }
    }
    state.commit("addCharacterData", character);
  },

  async setCharacterName(state) {
    const shortName = uniqueNamesGenerator({
      dictionaries: [starWars],
    });
    state.commit("addCharacterName", shortName);
  },

  //Cart Actions
  async addItemToCart(state, payload) {
    let errorMessage = "";
    state.commit("addErrorMessage", errorMessage);
    const found = this.state.cartItems.findIndex(
      (item) => item.id === payload.id
    );
    if (found != -1) {
      errorMessage = "Item already in Cart";
      state.commit("addErrorMessage", errorMessage);
    } else {
      state.commit("addCartItem", payload);
      state.commit("addCartValue", payload.value);
    }
  },

  async removeFromCart(state, payload) {
    const itemIndex = this.state.cartItems.findIndex(
      (item) => item.id === payload.id
    );
    const findItem = this.state.cartItems.find(
      (item) => item.id === payload.id
    );

    let errorMessage = "";
    state.commit("addErrorMessage", errorMessage);

    if (itemIndex !== -1) {
      state.commit("removeItem", itemIndex);
      state.commit("removeCartValue", findItem.value);
    } else {
      errorMessage = "Item is not on record. Please try again.";
      state.commit("addErrorMessage", errorMessage);
    }
  },

  async checkout(state) {
    let payload = "";
    let errorMessage = "";
    state.commit("addErrorMessage", errorMessage);
    if (this.state.cartValue > this.state.characterData.wealth) {
      errorMessage = "You do not have enough Wealth";
      state.commit("addErrorMessage", errorMessage);
    }
    for (let i = 0; i < this.state.cartItems.length; i++) {
      payload = this.state.cartItems[i].id;
      postItems({ EquipmentId: payload });
    }
    state.commit("clearCart");
    state.commit("clearCartValue");
  },
};


const getters = {

  //Cart Getters
  getAllEquipment: (state) => state.equipment,
  getCartItems: (state) => state.cartItems,
  getCartValue: (state) => state.cartValue,

  //Cart Error Messages
  getErrorMessage: (state) => state.cartErrorMessage,

  //Character Getters
  getCharacterEquipment: (state) => state.currentEquipment,
  getCharacterDetails: (state) => state.characterData,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

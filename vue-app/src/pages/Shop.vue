<template>
  <div class="shop-container">
    <div class="side-bar-container">
      <div class="side-bar">
        <div class="character-details-container">
          <h1>Store</h1>
          <div class="character-details">
            <h3>Name:</h3>
            <p>{{ character.name }}</p>
          </div>
          <div class="character-details">
            <h3>Wealth:</h3>
            <p>{{ character.wealth }}</p>
          </div>
        </div>
        <Cart />
        <div class="nav-container">
          <router-link to="/">
            <button class="nav-button">Back</button>
          </router-link>
        </div>
      </div>
    </div>
    <ProductList />
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import ProductList from "../components/ProductList.vue";
import Cart from "../components/Cart.vue";
import Vue from "vue";

export default Vue.extend({

  components: { ProductList, Cart },

  computed: {
    ...mapGetters({
      viewCart: "getCartItems",
      character: "getCharacterDetails",
      items: "getAllEquipment",
    }),
  },
});
</script>

<style>
</style>

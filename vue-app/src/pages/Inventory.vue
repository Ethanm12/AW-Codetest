<template>
  <div class="inventory-container">
    <div class="side-bar-container">
      <div class="side-bar">
        <div class="character-details-container">
          <h1>Inventory</h1>
          <div class="character-details">
            <h3>Name:</h3>
            <p>{{ character.name }}</p>
          </div>
          <div class="character-details">
            <h3>Wealth:</h3>
            <p>{{ character.wealth }}</p>
          </div>
          <div class="character-details">
            <h3>Hit Points:</h3>
            <p>{{ character.hitPoints }}</p>
          </div>
          <div class="character-details">
            <h3>Luck:</h3>
            <p>{{ character.luck }}</p>
          </div>
        </div>
        <div class="nav-container">
          <router-link to="/">
            <button class="nav-button">Back</button>
          </router-link>
        </div>
      </div>
    </div>
    <InventoryList />
  </div>
</template>

<script lang="ts">
import InventoryList from '../components/InventoryList.vue';
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({

  components: { InventoryList },

  computed: {
    ...mapGetters({
      character: "getCharacterDetails",
    }),
  },
});
</script>

<style>

</style>

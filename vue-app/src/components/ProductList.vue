<template>
  <div class="container">
    <div class="row">
      <div
        class="col-md-6 col-lg-4 d-flex justify-content-center"
        v-for="(item, index) in items.equipment"
        :key="index"
      >
        <div class="item-card">
          <div class="item-image">
            <img
              v-if="item.type === `Weapon`"
              src="/images/weapon.png"
              alt="Weapon"
            />
            <img
              v-if="item.type === `Armor`"
              src="/images/armour.png"
              alt="Weapon"
            />
            <img
              v-if="item.type === `Trinket`"
              src="/images/tiara.png"
              alt="Weapon"
            />
          </div>
          <div class="item-details">
            <h2>{{ item.name }}</h2>
            <p>Hitpoints: {{ item.hpModifier }}</p>
            <p>Luck: {{ item.luckModifier }}</p>
            <p>Type: {{ item.type }}</p>
            <h4>Value: {{ item.value }}</h4>
            <button @click="addToCart(item)" class="item-button">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { EquipmentModel } from '../apiRequests';
import { mapGetters } from "vuex";

export default Vue.extend({

  data: () => ({
    errorMessage: '' as string
  }),

  computed: {
    ...mapGetters({
      items: "getEquipment",
    }),
  },

  methods: {
    addToCart(item: EquipmentModel) {
      this.$store.dispatch("addItemToCart", item);
    },
  },
});
</script>

<style></style>

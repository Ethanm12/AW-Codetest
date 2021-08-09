<template>
  <div class="cart-container">
    <div class="cart-heading">
      <h2>
        <img src="/icons/shopping-cart.png" width="20px" height="auto" alt="" />
        Cart: 
      </h2>
      <div class="error-message">
            <p>{{errorMessage}}</p>
          </div>
    </div>
    <div class="cart-details">
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td>
          <td><img @click="removeFromCart(item)" src="/icons/remove-min.png" alt="Remove Item" /></td>
        </tr>

      </table>
    </div>
    <div class="cart-total">
      <table>
        <tr>
          <th>Total: {{cartValue}}</th>
        </tr>
      </table>
    </div>
    <div class="submit-container">
      <button @click="submit()" class="cart-button">Purchase</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {EquipmentModel} from '../apiRequests';
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters({
      items: "getCartItems",
      cartValue: 'getCartValue',
      errorMessage: "getErrorMessage"
    }),
  },

  methods: {
    submit(): void {
      this.$store.dispatch("checkout");
    },
    removeFromCart(item: EquipmentModel): void {
      this.$store.dispatch("removeFromCart", item);
    },
  },
});
</script>

<style></style>

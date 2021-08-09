<template>
  <div class="home-container">
    <div class="welcome-message">
      <h1>Welcome, {{character.name}}</h1>
    </div>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-lg-3 col-md-6 text-center">
          <router-link to="inventory" >
           
              <div class="menu-item">
                <img
                  src="/images/swords-min.png"
                  alt=""
                />
                <h2>Inventory</h2>
              </div>
         
          </router-link>
        </div>
        <div class="col-lg-3 col-md-6" >
          <router-link
            to="shop"
          >
            <div class="menu-item">
              <img
                src="images/treasure-chest-min.png"
                role="presentation"
              />
              <h2>Store</h2>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters({
      character: "getCharacterDetails",
    }),
  },
});
</script>

<style lang="scss"></style>

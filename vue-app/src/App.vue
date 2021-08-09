<template>
  <div id="app">
    <div class="page"><router-view></router-view></div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({

  async mounted() {
    await this.$store.dispatch("setCharacter");
    await this.$store.dispatch("setEquipment");
  },
  
});
</script>

<style>
</style>

<template>
  <div id="app">
    <div class="page"><router-view></router-view></div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  data: () => ({}),

  async mounted() {
    await this.$store.dispatch("setCharacter");
    await this.$store.dispatch("setEquipment");
    await this.$store.dispatch("setCharacterName");
  },
});
</script>

<style>
</style>

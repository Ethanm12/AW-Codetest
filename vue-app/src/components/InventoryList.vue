<template>
      <div class="container equipment-container" >
          <div class="equipment-details">
              <h2>Weapons</h2>
              <table v-if="characterEquipment.equipment.type !== 'Weapon' | undefined">
              <tr>
                  <th>Name</th>
                  <th>Hit Points</th>
                  <th>Luck Modifier</th>
                  <th>Value</th>
              </tr>
              <tr v-for="(item, index) in characterEquipment.equipment" :key="index">
                  <td v-if="item.type === 'Weapon'">{{item.name}}</td>
                  <td v-if="item.type === 'Weapon'">{{item.hpModifier}}</td>
                  <td v-if="item.type === 'Weapon'">{{item.luckModifier}}</td>
                  <td v-if="item.type === 'Weapon'">{{item.value}}</td>
              </tr>
          </table>
          </div>
          <div class="equipment-details">
              <h2>Armour</h2>
              <table v-if="characterEquipment.equipment.type !== 'Armor' | undefined">
              <tr>
                  <th>Name</th>
                  <th>Hit Points</th>
                  <th>Luck Modifier</th>
                  <th>Value</th>
              </tr>
              <tr v-for="(item, index) in characterEquipment.equipment" :key="index">
                  <td v-if="item.type === 'Armor'">{{item.name}}</td>
                  <td v-if="item.type === 'Armor'">{{item.hpModifier}}</td>
                  <td v-if="item.type === 'Armor'">{{item.luckModifier}}</td>
                  <td v-if="item.type === 'Armor'">{{item.value}}</td>
              </tr>
          </table>

          </div>
          <div class="equipment-details">
              <h2>Trinkets</h2>
              <table v-if="characterEquipment.equipment.type !== 'Trinket' | undefined">
              <tr>
                  <th>Name</th>
                  <th>Hit Points</th>
                  <th>Luck Modifier</th>
                  <th>Value</th>
              </tr>
              <tr v-for="(item, index) in characterEquipment.equipment" :key="index">
                  <td v-if="item.type === 'Trinket'">{{item.name}}</td>
                  <td v-if="item.type === 'Trinket'">{{item.hpModifier}}</td>
                  <td v-if="item.type === 'Trinket'">{{item.luckModifier}}</td>
                  <td v-if="item.type === 'Trinket'">{{item.value}}</td>
              </tr>
          </table>
          </div>
      </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({

    computed: {
        ...mapGetters({
            characterEquipment: 'getCharacterDetails'
        })
    }

})
</script>

<style>

</style>
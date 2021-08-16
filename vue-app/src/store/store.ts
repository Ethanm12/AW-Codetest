import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/store/types';
import { character } from '@/store/character'
import { cart } from '@/store/cart'
import { equipment } from '@/store/equipment'

Vue.use(Vuex);

const store: StoreOptions<RootState> = {

    modules: {
        character,
        cart,
        equipment
    }

}

export default new Vuex.Store<RootState>(store);
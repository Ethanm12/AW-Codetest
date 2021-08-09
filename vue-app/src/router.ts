import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
        mode: 'history',
        routes: [
            { path: '/',    name: 'home',   component: require('./pages/Home.vue').default },
            { path: '/inventory',    name: 'inventory',   component: require('./pages/Inventory.vue').default },
            { path: '/shop',    name: 'shop',   component: require('./pages/Shop.vue').default }
        ]
    });

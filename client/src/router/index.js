import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList';
import AboutSite from "@/components/AboutSite.vue";
import StateMap from "@/components/StateMap.vue";

export default  createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'StateList',
            component: StateList,
        },
        {
            path: '/about',
            name: 'About',
            component: AboutSite
        },
        {
            path: '/map/:state',
            name: 'StateMap',
            component: StateMap,
        }
    ]
})
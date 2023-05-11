import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList';
import AboutSite from "@/components/AboutSite.vue";

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
        }
    ]
})
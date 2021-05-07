import Vue from 'vue'
import VueRouter from 'vue-router'
import Hjem from '../views/Hjem.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Hjem',
        component: Hjem
    },
    {
        path: '/produkter',
        name: 'Mine Produkter',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Produkter.vue')
    },
    {
        path: '/om mig',
        name: 'Om mig',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Om mig.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
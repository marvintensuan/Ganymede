import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Donate from '../views/Donate'

const routes = [
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/donate',
        name: 'Donate',
        component: Donate
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
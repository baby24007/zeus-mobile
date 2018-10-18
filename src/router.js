import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Grid from './views/Grid.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import My from './views/My.vue';
import Setting from './views/Setting.vue';
import Release from './views/Release.vue';

// 将Router绑定到Vue对象
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: '',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
        {
            path: '/grid',
            name: 'grid',
            component: Grid,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/my',
            name: 'my',
            component: My,
        },
        {
            path: '/setting',
            name: 'setting',
            component: Setting,
        },
        {
            path: '/release',
            name: 'release',
            component: Release,
        },
    ],
});

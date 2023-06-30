import { createRouter, createWebHistory } from "vue-router";
import JokesPages from '@/pages/JokesPages.vue';
import FavoritesPage from '@/pages/FavoritesPage.vue';
import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomePage },
        { path: '/jokes', component: JokesPages },
        { path: '/favorites', component: FavoritesPage }
    ]
});

export default router;

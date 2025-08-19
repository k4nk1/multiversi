import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Index from "./pages/Index.vue";
import Create from "./pages/Create.vue";
import Room from "./pages/Room.vue";
import Play from "./pages/Play.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/create',
        name: 'Create',
        component: Create
    },
    {
        path: '/room',
        name: 'Room',
        component: Room
    },
    {
        path: '/play',
        name: 'Play',
        component: Play
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
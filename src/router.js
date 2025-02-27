// src/router.ts
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("./views/Home.vue"),
    },
    {
        path: "/play",
        name: "Play",
        component: () => import("./views/game01/Game01.vue"),
    },
    {
        path: "/play2",
        name: "Play2",
        component: () => import("./views/game02/Game02.vue"),
    },
    {
        path: "/play3",
        name: "Play3",
        component: () => import("./views/game03/Game03.vue"),
    },
    {
        path: "/playFiveStones",
        name: "FiveStones",
        component: () => import("./views/game04/StonesGame.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
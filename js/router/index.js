import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/admin/Dashboar.vue";
import User from "../pages/admin/User.vue";
import { callApi } from "../utils/API";
const routes = [
    {
        name: "Dashboard",
        path: "/",
        component: Dashboard,
        meta: {
            requiresAuth: true,
            guard: true,
        },
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("../pages/admin/authPages/login.vue"),
        meta: {
            requiresAuth: false,
        },
    },
    {
        name: "Register",
        path: "/register",
        component: () => import("../pages/admin/authPages/register.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/user",
        name: "Users",
        component: User,
        meta: {
            requiresAuth: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem("token");
    try {
        if (to.meta.requiresAuth) {
            callApi("get", "user/check")
                .then(({ data }) => {
                    next();
                })
                .catch(({ data }) => {
                    next("/login");
                });
        } else {
            next(true);
        }
    } catch (e) {}
});
export default router;

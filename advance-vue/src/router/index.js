import { createRouter, createWebHistory } from "vue-router";
import { timetableRoutes } from "@/modules/Timetable/routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../layout/AppLayout.vue"),
      children: [...timetableRoutes],
    },
  ],
});

export default router;

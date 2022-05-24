import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./views/Home/Index.vue"),
    name: "Home",
  },
  {
    path: "/ueberuns",
    component: () => import("./views/About/Index.vue"),
    name: "About",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  next();
});
export default router;

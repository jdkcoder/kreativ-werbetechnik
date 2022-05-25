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
  {
    path: "/services",
    component: () => import("./views/Services/Index.vue"),
    name: "Services",
  },
  {
    path: "/leuchtkasten",
    component: () => import("./views/Services/Leuchtkasten/Index.vue"),
    name: "Leuchtkasten",
  },
  {
    path: "/fahrzeugbeschriftung",
    component: () => import("./views/Services/Fahrzeugbeschriftung/Index.vue"),
    name: "Fahrzeugbeschriftung",
  },
  {
    path: "/contact",
    component: () => import("./views/Contact/Index.vue"),
    name: "Contact",
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

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

//   router.beforeEach((to, from, next) => {
//     let hash = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9";

//     if (
//       to.meta.needsAuth &&
//       document.cookie == "" &&
//       document.cookie.includes(hash) === false
//     ) {
//       next("/login");
//     } else {
//       next();
//     }
//   });
export default router;

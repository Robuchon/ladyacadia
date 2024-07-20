import { createRouter, createWebHistory } from "vue-router";

let routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@pages/Home.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@pages/Contact.vue"),
  },
  {
    path: "/galerie",
    name: "Galerie",
    component: () => import("@pages/Galerie.vue"),
  },
  {
    path: "/tarot",
    name: "Tarot",
    component: () => import("@pages/Tarot.vue"),
  },
  {
    path: "/challenges",
    name: "Challenges",
    component: () => import("@pages/Challenges.vue"),
  },
  {
    path: "/produit",
    name: "Produit",
    component: () => import("@pages/Produit.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("@pages/Blog.vue"),
  },
  {
    path: "/waiting",
    name: "Waiting",
    component: () => import("@pages/Waiting.vue"),
  },
  {
    path: "/notFound",
    name: "NotFound",
    component: () => import("@pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from) => {
    if (to.matched.length === 0) {
      //ici si pas de matched page
      return { name: "NotFound" };
    }
});

export default router;
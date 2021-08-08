import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Education from "../views/Education.vue";
import Cv from "../views/Cv.vue";




const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component:About,
  },
  {
    path: "/education",
    name:"Education",
    component:Education,
  },
  {
    path:"/cv",
    name:"myCV",
    component:Cv,
      
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

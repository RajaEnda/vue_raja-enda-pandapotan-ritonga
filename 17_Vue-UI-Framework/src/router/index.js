import Vue from "vue";
import VuerRouter from "vue-router";
import News from "@/views/news.vue";
import detailNews from "@/views/detailNews.vue"



Vue.use(VuerRouter);

const routes = [
  {
    path: "/",
    name: "News",
    component : News,
  },
  {
    path: "/news/:index",
    component : detailNews,
    name: "detailNews",
  },
  
];
const router = new VuerRouter({
    mode:"history",
    base: "/",
    routes,
  });

export default router;
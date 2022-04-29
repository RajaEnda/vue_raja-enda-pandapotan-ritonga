import Vue from "vue";
import VuerRouter from "vue-router";
import Home from '../views/Home.vue'
import Todo from "../views/Todo.vue";
import Update from "../views/Update.vue";

Vue.use(VuerRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo
  },
  {
    path: '/update/:id',
    name: 'update',
    component: Update
  }
];
const router = new VuerRouter({
    mode:"history",
    base: "/",
    routes,
  });

export default router;
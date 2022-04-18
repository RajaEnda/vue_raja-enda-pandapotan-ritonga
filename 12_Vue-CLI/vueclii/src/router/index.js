import Vue from "vue";
import VueRouter from "vue-router";
import TaskDetail from "@/views/taskdetail";
import Todolist from "@/views/todolist";

Vue.use(VueRouter);

const routes = [ 
 
   {
        path: "/",
        name:"Todolist",
        component: Todolist,
    },
    {
        path: "/task-detail",
        name: "TaskDetail",
        component: TaskDetail,

    },
];

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes,
});
export default router;
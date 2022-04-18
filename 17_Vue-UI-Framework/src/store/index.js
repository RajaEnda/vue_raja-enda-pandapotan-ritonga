import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import listBerita from "./listBerita";


Vue.use(Vuex);
const persistedstate = createPersistedState({
    paths: ["listBerita"],
})

export default new Vuex.Store({
    plugins: [persistedstate],
    modules: {
        listBerita :{
           namespaced: true,
           ...listBerita,
       },
    },
});
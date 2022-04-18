import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const persistedstate = createPersistedState({

});

const store = new Vuex.store({
    strict: true,
    plugin: [persistedstate]
    modules{

    }
});





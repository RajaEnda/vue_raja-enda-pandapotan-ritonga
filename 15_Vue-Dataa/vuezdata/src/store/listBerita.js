import axios from "axios";

const state = () => ({
    list : [],
});

const mutations = {
    setList(state, param){
        state.list = [...param];
    },
};

const actions = {
    fetchList(store){
        axios
        .get("https://newsapi.org/v2/everything",{
            params : {
                q : "tesla",
                from : "2022-03-06",
                shortBy : "publishedAt",
                apiKey : "779996929c2b4b5ebdc5ae9fd74c4cb5",
            },
        })
        .then((response)=>{
            store.commit("setList", response.data.articles);
        })
        .catch((err)=> console.log(err));
    },
};
export default {
    state,
    mutations,
    actions,
}
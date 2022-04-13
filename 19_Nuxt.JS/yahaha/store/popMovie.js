const state = ()=>({
    list: [],
})

const mutations = {
    setList(state, param){
        state.list = param
    },
}

const actions = {
    fetchMovie(store){
        this.$axios
        .$get(
            'https://api.themoviedb.org/3/movie/popular?api_key=58100e983f07694bf0b11723c965d3b0&language=en-US'
        ).then((res)=>{
            store.commit('setList', res.results)
        }).catch((err) => console.log('error',err))
    }
}
export {
    state,
    mutations,
    actions
}
<template>
    <div class="container">
        <button class="btn btn-warning mt-5" @click="() => this.$router.push('/')">Back</button>
        <h3>{{ title }}</h3>
        <p> {{item.bio || "blum ada deskripsi nih"}}</p>
        <input type="text" v-show="isShow" v-model="item.bio" placeholder="ubah disini">
         <br/>
        <button @click="changeBio">
            {{ isShow ? "simpan" : "ubah deskripsi" }}
        </button>
    </div>
</template>
<script>
export default {
    name: "TaskDetail",
    data(){
        return {
            isShow: false,
            item: {},
            newIndex:"",

        };
    },
    setup() {},
    methods: {
        changeBio(){
            if (this.isShow){
                let c = JSON.parse(localStorage.todos);
                c[this.newIndex] = this.item;
                localStorage.todos = JSON.stringify(c); 
            }
            this.isShow = !this.isShow;
        },
    },
    computed: {
        title(){
            return this.$route.params.title;
        }
    }
}
</script>
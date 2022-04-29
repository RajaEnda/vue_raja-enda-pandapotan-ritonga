<template>
   <div class="container">
      <ApolloQuery
            :query="require ('../graphql/detailTodo.gql')"
            :variables="{ id : userId }"
        >
        <template v-slot="{ result: { loading, error, data } }">
  
        <div v-if="loading" class="loading apollo">Loading...</div>

     
        <div v-else-if="error" class="error apollo">An error occurred</div>


        <div v-else-if="data" class="result apollo">
          <div>
            <b-jumbotron bg-variant="secondary" text-variant="white" lead="Nama">
              <p>{{ data.user_by_pk.text_id }}</p>
            </b-jumbotron>
          </div>
          </div>
        <div v-else class="no-result apollo">Not Found :(</div>
        </template>
        </ApolloQuery>
         <ApolloMutation
          :mutation="require ('../graphql/update.gql')"
          :variables="{id : userId, text_id}"
          @done="onDone"

        >
          <template v-slot="{ mutate, loading, error }">
            <div class="container">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Masukkan Nama</label>
                    <input type="hidden" class="form-control" v-model="id" > 
                  <input type="text" class="form-control" v-model="text_id">
                </div>
              </form>
                <button type="submit" class="btn btn-primary" :disabled="loading" @click="mutate()">Submit</button>
              <div v-if="error" class="error apollo">
                <div class="alert alert-danger" role="alert">
                  An error occurred: {{ error }}
                </div>
              </div>
            </div>
          </template>
        </ApolloMutation>
   </div>
</template>
<script>
export default {
  name: "UpdateVue",
  data (){
    return {
      text_id:"",
      id:"",
    };
  },
  computed: {
    userId() {
      return this.$route.params.id;
    },
  },
  methods: {
    onDone() {
      window.location.reload();
    },
  }
};
</script>

<template>
  <div class="body">
    <h1>List Nama</h1>
    <ApolloQuery
    :query="gql => gql`
      query MyQuery {
        user {
          id
          text_id
        }
      }
    `"
  >
  <template v-slot="{ result: { loading, error, data } }">
  <!-- Loading -->
  <div v-if="loading" class="loading apollo">
    <div class="spinner-border text-warning" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <!-- Error -->
  <div v-else-if="error" class="error apollo">
    <div class="alert alert-danger" role="alert">
      Error!!
    </div>
  </div>

  <!-- Result -->
  <div v-else-if="data" class="result apollo">
    <div class="container">
      <div class="card" v-for="user in data.user" :key="user.id">
        <div class="card-body">
          {{user.text_id}} <br>
          <div class="btn-group mt-4" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-sm btn-danger" @click="redirect(user.id)">Update</button>
            <button type="button" class="btn btn-sm btn-success" @click="deletecom(user.id)">Delete</button>
          </div>
        </div> <br>
      </div>
    </div>
  </div>

  <!-- No result -->
  <div v-else class="no-result apollo">
    <div class="spinner-border text-warning" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  </template>
  </ApolloQuery>
  <ApolloMutation
  :mutation="require ('../graphql/addTodo.gql')"
  :variables="{text_id}"
  :update="updateCache"
>
  <template v-slot="{ mutate, loading, error }">
    <div class="container">
      <form>
        <div class="mb-3">
          <label  class="form-label">Upload Nama</label>
          <input type="text" class="form-control" v-model="text_id"> 
        </div>
      </form>
      <button :disabled="loading"  class="btn btn-primary" @click="mutate()">Submit</button>
      <div v-if="error" class="error apollo">
        <div class="alert alert-danger" role="alert">
          An error occurred: {{ error }}
        </div>
      </div>
      <h2 class="mt-5">hint: untuk melihat hasilnya lebih maksimal, kembali ke Todo Page :) </h2>
    </div>
  </template>
</ApolloMutation>

  </div>
</template>

<script>

export default {
  name : "TodoVue",
  data (){
    return {
      text_id:"",
    };
  },
  methods: {
    redirect(id) {
      this.$router.push(`/Update/${id}`);
    },
    onDone() {
      window.location.reload();
    },
    updateCache(store, { data: { insert_user_one } }) {
      const query = {
        query: require ('../graphql/getTodo.gql')
      };
      // Read the query from cache
      const data = store.readQuery(query);
      // Mutate cache result
      data.user.push(insert_user_one);
      // Write back to the cache
      store.writeQuery({
        ...query,
        data,
      });
    },
    deletecom(id){
      this.$apollo.mutate({
      // Query
      mutation: require ("../graphql/deleteTodo.gql"),
      // Parameters
      variables: {
        id,
      },
      update: (store, { data: { delete_user_by_pk } }) =>{
        const query = {
            query: require ('../graphql/getTodo.gql')
          };
        // Read the data from our cache for this query.
        const data = store.readQuery(query);
        // Add our tag from the mutation to the end
        // We don't want to modify the object returned by readQuery directly:
        // https://www.apollographql.com/docs/react/caching/cache-interaction/
        const index = data.user.findIndex(
            (user) => user.id === delete_user_by_pk.id
          );
          if (index !== -1) {
            // Mutate cache result
            data.user.splice(index, 1);
            // Write back to the cache
            store.writeQuery({
              ...query,
              data,
            });
          }
    
      }
    })
    },
  },
};

</script>

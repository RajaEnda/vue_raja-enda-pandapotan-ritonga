<template>
  <div class="body">
    <h1 style="color: Green;">Katalog</h1>
    <ApolloQuery
    :query="require ('../graphql/getTodo.gql')"
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
    <div class="container mb-4">
      <div class="card" v-for="user in data.user" :key="user.id">
        <div class="card-body">
         {{user.text_id}} <br>
        </div>
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
  <h1>Thank You</h1>
  </div>

</template>

<script>
// import gql from 'graphql-tag';
export default {
  name : "TodoVue",
 
}

</script>
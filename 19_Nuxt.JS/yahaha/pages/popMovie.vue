<template>
  <v-row> 
    <v-col v-for="(movie,index) in movieList" :key="index" cols="6" md="3">
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >

    <v-img
      height="250"
      :src="`http://image.tmdb.org/t/p/w500${movie.poster_path}`"
    ></v-img>

    <v-card-title class="subtitle-1">{{movie.title}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="movie.vote_average/ 2"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{movie.vote_average}}  ({{movie.vote_count}})
        </div>
      </v-row>

      <div class="my-4 caption">
       Tanggal Rilis : {{movie.release_date}}
      </div>

      <div class="text-justify text-truncate" > {{movie.overview}} </div>
    </v-card-text>
      <v-dialog
          v-model="dialog"
          transition="dialog-bottom-transition"
          max-width="100%"
          height="auto"
      >
        <template v-slot:activator="{ on, attrs,}" >
          <v-btn
            block
            color="primary"
            elevation="2"
            small
            tile
            v-bind="attrs"
            v-on="on"
          >Detail Film</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card :is-expand="index == collapseIndex">
              <v-img
                height="500"
                :src="`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`"
              ></v-img>
              <v-card-title class="subtitle-1">{{movie.title}}</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="movie.vote_average/ 2"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">
                    {{movie.vote_average}}  ({{movie.vote_count}})
                  </div>
                </v-row>

                <div class="my-4 caption">
                Tanggal Rilis : {{movie.release_date}}
                </div>

                <div class="text-justify" > {{movie.overview}} </div>
              </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>


    <v-divider class="mx-4"></v-divider>
  </v-card>
    </v-col>
  </v-row>
  
</template>
<script>
  export default {
    name: 'IndexLayout',
    data(){
      return{
        collapseIndex:null,
      }
    },
    computed : {
      movieList(){
        return this.$store.state.popMovie.list
      },
    },
    mounted (){
    this.$store.dispatch('popMovie/fetchMovie')
    },

  }
</script>
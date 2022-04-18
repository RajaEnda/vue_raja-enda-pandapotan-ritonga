<template>
  <v-app>
    <v-main>
      <v-app-bar
        fixed
        dense
        color="primary"
        dark
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>News App</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>

     <v-row>
        <v-col cols="3">
          <v-navigation-drawer 
            v-model="drawer"
            clipped-left
            fixed
            dark
            color="blue darken-1"
            style="z-index: 1" 
            class="my-15"
            >
              <v-list nav style="margin-top: 24px;">
                <v-list-item v-for="item in items" :key="item.title" link>
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
          </v-navigation-drawer>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="7" style="margin-top: 24px; padding-top: 24px">
          <!-- Content Here -->
          <h1></h1>
          <v-card class="mx-auto" style="margin-top: 50px;">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="dataNews.urlToImage"
            >
              <v-card-title></v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">  </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ dataNews.title }}</div>
              <div>{{ dataNews.author }}</div>

              <div>{{ dataNews.description }}</div>
              <div>{{ dataNews.publishedAt }}</div>
            </v-card-text>

            <v-card-actions>
           
            </v-card-actions>
            
    <v-card-title class="transparant">
        

        <v-spacer></v-spacer>
        <v-btn style="background-color: gray; border-radius: 100px; color: white; margin-right: 200px;">Tech Crunch</v-btn>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 black"
          dark
          icon
          small
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
        <v-btn @click=" ()=> redirectBack('/')" style="background-color: blue;">Back</v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
            
            
          
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DetailNewsPage",
  data() {
    return {
      drawer: true,
        items: [
        { title: "Reddit", icon: "mdi-reddit" },
        { title: "Google", icon: "mdi-google" },
        { title: "Linkedin", icon: "mdi-linkedin" },
        { title: "Twitter", icon: "mdi-twitter" },
        { title: "Recode", icon: "mdi-google-cardboard" },
        { title: "Google", icon: "mdi-google" },
        { title: "Google Assistant", icon: "mdi-google-assistant" },
        { title: "Apple Cloud", icon: "mdi-apple-icloud" },
        { title: "Apple", icon: "mdi-apple" },
      ],
      mini: true,
       icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    };
  },
    computed : {
        index(){
            return this.$route.params.index;
        },
        dataNews(){
            return this.$store.state.listBerita.list[this.index];
        },
    },
    mounted(){
        console.log(this.dataNews);
    },
    methods:{
       redirectBack(){
      this.$router.push('/')
    },  
    }
};
</script>

<template>
  <v-app>
    <Navigation />
    <v-main>
      <v-container class="fill-height pa-0 pb-9">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-window>
              <v-card class="mx-auto mt-16 ma-16" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="
                    blog.photo
                      ? apiDomain + blog.photo
                      : 'https://dummyimage.com/300'
                  "
                >
                  <v-btn icon dark @click.prevent="close" color="#FF9100">
                    <v-icon class="mb-16 ml-3">mdi-keyboard-backspace</v-icon>
                  </v-btn>
                  <v-card-title class="ma-11 ml-0"></v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">Title</v-card-subtitle>

                <v-card-text auto-grow height="300px" class="text--primary">
                  <div>Description</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" depressed class="white--text">
                    <v-icon left>mdi-pencil</v-icon>
                    EDIT</v-btn
                  >

                  <v-btn color="grey" depressed class="white--text">
                    <v-icon left>mdi-delete</v-icon>
                    DELETE</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-window>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  name: "DetailBlog",
  data() {
    return {
      apiDomain: "https://demo-api-vue.sanbercloud.com",
    };
  },
  components: {
    Navigation,
  },

  methods: {
    close() {
      this.$router.push("/blogs");
    },
  },

  beforeCreate: function () {
    this.$store.dispatch("detailBlogStore");
  },
};
</script>

<style>
</style>
<template>
  <v-app>
    <Navigation />
    <v-main>
      <Loading v-if="blogs.length === 0" />
      <div v-else-if="blogs.length !== 0">
        <v-card flat tile>
          <v-container class="grey lighten-4" fluid>
            <h1 class="orange--text ma-2 mb-4" style="text-align: center">
              OUR STORY
            </h1>
            <v-row class="ml-6 mr-6">
              <v-spacer></v-spacer>
              <v-col
                v-for="blog in blogs.data"
                :key="blog"
                cols="12"
                sm="6"
                md="4"
              >
                <v-hover v-slot="{ hover }" close-delay="200">
                  <router-link to="/detail-blog">
                    <v-card
                      :elevation="hover ? 16 : 2"
                      :class="{ 'on-hover': hover }"
                      class="mx-auto"
                      height="350"
                      max-width="350"
                    >
                      <v-img
                        :src="
                          blog.photo
                            ? apiDomain + blog.photo
                            : 'https://dummyimage.com/300'
                        "
                        height="300px"
                      >
                        <span
                          class="text-h5 white--text pl-4 pt-4 d-inline-block"
                          style="font-weight: bold"
                          >{{ blog.title.substring(0, 15) }}</span
                        >
                      </v-img>

                      <v-card-actions class="black--text text-left">
                        <div>
                          <p class="ml-2 mt-1">
                            Created At: {{ blog.created_at }}
                          </p>
                        </div>
                      </v-card-actions>
                    </v-card>
                  </router-link>
                </v-hover>
              </v-col>
            </v-row>
            <div class="text-center mt-14 mb-11">
              <v-pagination
                v-model="blogs.current_page"
                @input="go(blogs.current_page)"
                :length="blogs.last_page"
              ></v-pagination>
            </div>
          </v-container>
        </v-card>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Loading from "../components/Loading.vue";
import { mapState } from "vuex";

export default {
  name: "Blogs",

  components: {
    Navigation,
    Loading,
  },
  data() {
    return {
      page: 0,
      lengthPage: 0,
      perPage: 0,
      apiDomain: "https://demo-api-vue.sanbercloud.com",
    };
  },

  methods: {
    go(nextPage) {
      this.$store.dispatch("blogsStore", nextPage);
    },
    pagination() {
      console.log(this.blogs, "========");
      this.page = blogs.current_page;
      this.lengthPage = blogs.last_page;
      this.perPage = blogs.per_page;
    },
  },

  beforeCreate: function () {
    this.$store.dispatch("blogsStore", 1);
  },

  created: function () {
    // this.pagination();
  },

  computed: {
    ...mapState(["blogs"]),
  },
};
</script>

<style>
</style>
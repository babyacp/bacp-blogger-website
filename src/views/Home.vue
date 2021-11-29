<template>
  <v-app>
    <Navigation />
    <v-container fill-height id="content">
      <v-flex xs12>
        <v-img
          id="imgContent"
          src="@/assets/home.png"
          style="height: 200px; width: 200px"
        ></v-img>

        <div
          style="
            text-align: center;
            font-size: 30px;
            font-family: 'Balsamiq Sans', cursive;
          "
        >
          WELCOME TO <br />
          BACP BLOGGER WEBSITE
        </div>
        <div style="text-align: center; font-size: 23px">
          Join us to share your amazing story!
        </div>
        <div style="text-align: center; margin-top: 10px">
          <v-btn
            color="orange"
            class="white--text"
            @click.prevent="toCreateBlog"
            >Create Story</v-btn
          >
        </div>
      </v-flex>
    </v-container>
  </v-app>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  name: "Home",

  components: {
    Navigation,
  },
  methods: {
    toCreateBlog() {
      this.$router.push("/create-blog");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap");
#content,
#imgContent {
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
#imgContent {
  margin-top: -30px;
}
</style>

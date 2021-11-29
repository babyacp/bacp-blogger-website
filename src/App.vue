<template>
  <v-app>
    <!-- <Navigation /> -->
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Home from "./views/Home.vue";
import Footer from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Home,
    Footer,
    Navigation,
  },
  data() {
    return {
      showSideBar: false,
    };
  },

  methods: {
    menuItems() {
      return this.menu;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap");
</style>

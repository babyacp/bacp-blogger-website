<template>
  <v-app>
    <v-navigation-drawer app v-model="showSideBar" hide-overlay temporary>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>NAMA</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <div class="pa-2" v-if="true">
          <v-btn block dark color="orange" class="mb-1">
            <v-icon left>mdi-lock</v-icon>
            Login
          </v-btn>
        </div>

        <v-divider></v-divider>

        <router-link
          active-class="active"
          class="text-decoration-none d-flex align-center"
          to="/create-blog"
          style="color: black"
          tag="li"
          v-if="true"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon left>mdi-pencil</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Create Blog</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>

      <template v-slot:append v-if="true">
        <div class="pa-2">
          <v-btn block color="red" dark>
            <v-icon left>mdi-lock</v-icon>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- TopNav -->
    <v-app-bar app sticky color="orange" elevate-on-scroll>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="showSideBar = !showSideBar"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-btn
          href="/"
          id="logo"
          class="black--text"
          style="
            font-family: 'Balsamiq Sans', cursive;
            font-weight: bold;
            font-size: 30px;
          "
          depressed
          text
          >BLOGGERS</v-btn
        >
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <v-list class="d-flex align-center" color="orange">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title style="font-weight: bold" class="black--text"
                >HOME</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>

      <div class="hidden-sm-and-down">
        <v-list class="d-flex align-center" color="orange">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title style="font-weight: bold" class="black--text"
                >BLOGS</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>

      <div class="hidden-sm-and-down">
        <v-list class="d-flex align-center" color="orange">
          <v-list-item v-if="true">
            <v-menu left bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-list-item-avatar>
                    <v-img
                      src="https://randomuser.me/api/portraits/men/78.jpg"
                    ></v-img>
                  </v-list-item-avatar>
                </v-btn>
              </template>

              <v-list>
                <v-list-item>
                  <v-list-item-title>NAMA</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <v-btn block dark color="orange">
                      <v-icon left>mdi-pencil</v-icon>
                      <router-link
                        class="text-decoration-none"
                        to="/create-blog"
                        style="color: white"
                        >Create Story</router-link
                      >
                    </v-btn>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <v-btn block color="red" dark>
                      <v-icon left>mdi-lock</v-icon>
                      Logout
                    </v-btn>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
          <div class="pa-1 d-flex align-center" v-if="false">
            <v-btn text large> Login </v-btn>
          </div>
          <v-divider></v-divider>
        </v-list>
      </div>
    </v-app-bar>

    <v-content id="content">
      <v-container fill-height>
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
            <v-btn flat color="orange">Create Story</v-btn>
          </div>
        </v-flex>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Home from "./views/Home.vue";
import Footer from "./views/Footer.vue";

export default {
  name: "App",
  components: {
    Home,
    Footer,
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

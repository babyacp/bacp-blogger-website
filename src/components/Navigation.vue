<template>
  <div>
    <!-- ===================================== SideNav ===================================== -->
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
          <v-btn
            block
            dark
            color="orange"
            class="mb-1"
            @click.prevent="toLogin"
          >
            <v-icon left>mdi-lock</v-icon>
            Login
          </v-btn>
        </div>

        <v-divider></v-divider>

        <router-link
          active-class="active"
          class="text-decoration-none d-flex align-center"
          to="/"
          style="color: black"
          tag="li"
          v-if="true"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon left>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>HOME</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link
          active-class="active"
          class="text-decoration-none d-flex align-center"
          to="/blogs"
          style="color: black"
          tag="li"
          v-if="true"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon left>mdi-book-open-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>BLOGS</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
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
              <v-list-item-title>CREATE STORY</v-list-item-title>
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
    <!-- ===================================== SideNav ===================================== -->

    <!-- ===================================== TopNav ===================================== -->
    <v-app-bar app sticky color="orange" elevate-on-scroll>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="showSideBar = !showSideBar"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link
          to="/"
          id="logo"
          class="pa-2"
          style="
            font-family: 'Balsamiq Sans', cursive;
            font-weight: bold;
            font-size: 30px;
          "
          depressed
          text
          >BLOGGERS</router-link
        >
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <v-list class="d-flex align-center pa-0" color="orange">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title style="font-weight: bold">
                <a @click.prevent="toHomeTopBar" style="text-decoration: none"
                  >HOME</a
                >
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>

      <div class="hidden-sm-and-down">
        <v-list class="d-flex align-center pa-0" color="orange">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title style="font-weight: bold">
                <a @click.prevent="toBlogsTopBar" style="text-decoration: none"
                  >BLOGS</a
                >
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>

      <div class="hidden-sm-and-down">
        <v-list class="d-flex align-center" color="orange">
          <v-list-item v-if="isLogin">
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
                    <v-btn block dark text>
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
                    <v-btn block dark text>
                      <v-icon left>mdi-lock</v-icon>
                      LOGOUT
                    </v-btn>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
          <div
            class="pa-1 d-flex align-center"
            style="font-weight: bold"
            v-if="!isLogin"
          >
            <a text @click.prevent="toLogin">LOGIN</a>
          </div>
          <v-divider></v-divider>
        </v-list>
      </div>
    </v-app-bar>
    <!-- ===================================== TopNav ===================================== -->
  </div>
</template>

<script>
export default {
  name: "Navigation",

  data() {
    return {
      showSideBar: false,
      isLogin: false,
    };
  },

  methods: {
    menuItems() {
      return this.menu;
    },
    toLogin() {
      this.$router.push("/login");
    },
    toHomeTopBar() {
      this.$router.push("/");
    },
    toBlogsTopBar() {
      this.$router.push("/blogs");
    },
    getLocalStorageValue() {
      // localStorage
    },
  },

  beforeCreate: function () {
    console.log(
      localStorage.getItem("access_token"),
      "=====================beforeCreate"
    );
    if (localStorage.access_token) {
      isLogin = true;
    } else {
      isLogin = false;
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap");
a {
  position: relative;
  display: inline-block;
  font-size: 18px;
  font-weight: 800;
  color: white;
  overflow: hidden;
  background: linear-gradient(
    to right,
    rgb(231, 231, 233),
    rgb(233, 135, 8) 50%,
    rgb(247, 248, 250) 50%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 290ms ease;
}
a:hover {
  background-position: 0 70%;
}
</style>

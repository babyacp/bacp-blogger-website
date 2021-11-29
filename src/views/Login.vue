<template>
  <v-app>
    <v-main>
      <v-container class="fill-height pa-0 pb-9" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window>
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-btn icon dark @click.prevent="close" color="#FF9100">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-center
                            orange--text
                            text--accent-3
                            mt-0
                            mb-8
                          "
                          style="font-size: 35px"
                        >
                          Login To Bloggers
                        </h1>
                        <v-form>
                          <v-text-field
                            v-model="email"
                            label="Email"
                            name="Email"
                            type="text"
                            prepend-icon="mdi-email"
                            color="orange accent-3"
                          ></v-text-field>
                          <v-text-field
                            v-model="password"
                            name="password"
                            label="Password"
                            type="text"
                            prepend-icon="mdi-key"
                            color="orange accent-3"
                          ></v-text-field>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mb-8">
                        <v-btn
                          class="mb-6"
                          rounded
                          color="orange accent-3"
                          dark
                          @click.prevent="login"
                          >SIGN IN</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="orange accent-3">
                      <v-card-text class="white--text mt-14">
                        <h1 class="text-center mt-8" style="position: center">
                          Hello, Friends!
                        </h1>
                        <p class="text-center mt-8" style="font-size: 17px">
                          If you do not you have an account.<br />Click SIGN UP
                          now!
                        </p>
                      </v-card-text>
                      <br />
                      <div class="text-center">
                        <v-btn
                          class="mb-14 mt-6"
                          rounded
                          outlined
                          dark
                          @click.prevent="register"
                          >SIGN UP</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    close() {
      this.$router.push("/");
    },
    login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("loginStore", user);
      this.email = "";
      this.password = "";
    },
    register() {
      this.$router.push("/register");
    },
  },
};
</script>

<style>
</style>
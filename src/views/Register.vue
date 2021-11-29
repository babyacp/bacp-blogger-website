<template>
  <v-app>
    <v-main>
      <v-container class="fill-height pa-0 pb-8" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="orange accent-3">
                      <v-btn icon dark @click.prevent="close" color="#fff">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <v-card-text class="white--text mt-4 mb-12">
                        <h1 class="text-center" style="font-size: 29px">
                          Welcome Back!
                        </h1>
                        <br />
                        <br />
                        <p
                          class="text-center ma-12 mt-12"
                          style="font-size: 17px"
                        >
                          If you have an account, <br />
                          click the SIGN IN button.
                        </p>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn
                          rounded
                          outlined
                          dark
                          class="mt-0"
                          @click.prevent="signin"
                          >SIGN IN</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center orange--text text--accent-3"
                          style="font-size: 35px"
                        >
                          Create Account
                        </h1>
                        <v-form>
                          <v-text-field
                            v-model="name"
                            label="Name"
                            name="Name"
                            type="text"
                            prepend-icon="mdi-account"
                            color="orange accent-3"
                          ></v-text-field>
                          <v-text-field
                            v-model="email"
                            label="Email"
                            name="Email"
                            type="email"
                            prepend-icon="mdi-email"
                            color="orange accent-3"
                          ></v-text-field>
                          <v-text-field
                            v-model="password"
                            id="password"
                            label="Password"
                            name="Password"
                            prepend-icon="mdi-key"
                            color="orange accent-3"
                          ></v-text-field>
                          <div>
                            <v-file-input
                              v-model="photo_profile"
                              :rules="rules"
                              accept="image/png, image/jpeg, image/bmp"
                              placeholder="Pick a picture"
                              prepend-icon="mdi-camera"
                              label="Picture"
                            ></v-file-input>
                          </div>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mb-8">
                        <v-btn
                          rounded
                          color="orange accent-3"
                          dark
                          class="pb-0"
                          @click.prevent="signup"
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
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      name: "",
      photo_profile: [],
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
    };
  },
  methods: {
    signup() {
      let userRegister = {
        email: this.email,
        password: this.password,
        name: this.name,
        photo_profile: this.photo_profile,
      };
      this.$store.dispatch("registerStore", userRegister);
      this.email = "";
      this.password = "";
      this.name = "";
      this.photo_profile = [];
    },
    signin() {
      this.$router.push("/login");
    },
    close() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>
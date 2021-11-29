<template>
  <v-app>
    <Navigation />
    <div id="divBlog">
      <v-row>
        <v-card color="orange" dark id="cardCreateBlog">
          <v-col cols="12" md="12" lg="12" xl="12">
            <v-toolbar flat color="orange">
              <v-icon>mdi-account</v-icon>
              <v-toolbar-title class="font-weight-light"
                >Create Your Amazing Story</v-toolbar-title
              >
            </v-toolbar>
          </v-col>
          <v-col cols="12" md="12" lg="12" xl="12">
            <v-card-text>
              <v-text-field color="white" label="Name"></v-text-field>
              <v-textarea
                name="input-7-1"
                label="Description"
                auto-grow
              ></v-textarea>
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="12" xl="12">
            <v-file-input
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an avatar"
              prepend-icon="mdi-camera"
              label="Pick a Picture"
            ></v-file-input>
          </v-col>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey" @click="back">Back</v-btn>
            <v-btn color="success" @click="create">Create</v-btn>
          </v-card-actions>
          <v-snackbar v-model="hasCreated" :timeout="2000" absolute bottom left>
            Your story has been created!
          </v-snackbar>
        </v-card>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  name: "CreateBlog",
  components: {
    Navigation,
  },
  data() {
    return {
      hasCreated: false,
      model: null,
    };
  },

  methods: {
    create() {
      this.hasCreated = true;
      this.$router.push("/blogs");
    },
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#divBlog {
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>
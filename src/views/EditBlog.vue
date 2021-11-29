<template>
  <v-app>
    <Navigation />
    <div id="divBlog">
      <v-card class="overflow-hidden" color="orange" dark id="cardCreateBlog">
        <v-toolbar flat color="orange">
          <v-icon>mdi-account</v-icon>
          <v-toolbar-title class="font-weight-light"
            >Create Your Amazing Story</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-btn
            color="grey darken-1"
            fab
            small
            @click="isEditing = !isEditing"
          >
            <v-icon v-if="isEditing"> mdi-close </v-icon>
            <v-icon v-else> mdi-pencil </v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            :disabled="!isEditing"
            color="white"
            label="Name"
          ></v-text-field>
          <v-textarea
            :disabled="!isEditing"
            name="input-7-1"
            filled
            label="Label"
            auto-grow
          ></v-textarea>
        </v-card-text>
        <v-file-input
          :disabled="!isEditing"
          label="File input"
          outlined
          dense
        ></v-file-input>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="!isEditing" color="success" @click="save">
            Save
          </v-btn>
        </v-card-actions>
        <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
          Your profile has been updated
        </v-snackbar>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  name: "EditBlog",
  components: {
    Navigation,
  },
  data() {
    return {
      hasSaved: false,
      isEditing: null,
      model: null,
    };
  },

  methods: {
    customFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
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
#cardCreateBlog {
  width: 800px;
}
</style>
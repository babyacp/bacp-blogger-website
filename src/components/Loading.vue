<template>
  <v-app>
    <v-main>
      <v-container class="fill-height pa-0 pb-0">
        <v-row align="center" justify="center" class="mb-16">
          <div class="text-center mb-16">
            <v-progress-circular
              :size="80"
              :width="9"
              color="orange"
              indeterminate
            ></v-progress-circular>
          </div>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style>
</style>
<template>
  <v-footer id="footer" class="text-center" height="auto" dark>
    <v-layout row wrap>
      <v-flex color="indigo" dark py-3 text-xs-center white--text>
        &copy;2021 — <strong>Baby Ayu</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: orange;
  color: white;
  text-align: center;
}
</style>
<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>M.Sc. Thesis</span>
        <span class="font-weight-light"> Result</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/">
        <span>Home</span>
      </v-btn>
      <v-btn to="about">
        <span>About</span>
      </v-btn>
    </v-toolbar>

    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>

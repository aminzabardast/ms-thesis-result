<template>
  <v-app>
    <UserInterface/>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import UserInterface from './components/UserInterface'

  export default {
    name: 'App',
    components: {
      UserInterface
    },
    data () {
      return {
        //
      }
    }
  }
</script>

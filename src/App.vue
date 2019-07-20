<template>
  <v-app>
    <UserInterface/>
    <v-content>
        <router-view></router-view>
    </v-content>
    <FooterInterface/>
  </v-app>
</template>

<script>
  import UserInterface from './components/UserInterface'
  import FooterInterface from './components/FooterInterface'

  export default {
    name: 'App',
    components: {
      UserInterface,
      FooterInterface
    },
    data () {
      return {
        //
      }
    }
  }
</script>

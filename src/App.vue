<template>
   <v-app id="app" dark>
      <navigation :loggedIn="vIsLoggedIn"></navigation>

      <v-content>
        <router-view></router-view>
      </v-content>
  </v-app> 
</template>

<script>
import { mapGetters } from 'vuex'
  import Navigation from '@/components/Navigation'

  export default {
    mixins: [

    ],

    components: {
      Navigation
    },

    data: () => ({

    }),

    computed: {
      ...mapGetters({
        vIsLoggedIn: 'isLoggedIn'
      })
    }
  }
</script>

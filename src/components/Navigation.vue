<template>
  <div>
    <v-navigation-drawer
      v-if="show"
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon v-if="loggedIn" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    props: {
      loggedIn: {
        type: Boolean,
        default: false
      }
    },

    data: () => ({
      drawer: true,
      title: 'Lunchercise'
    }),

    computed: {
      show() {
        if (!this.drawer || !this.loggedIn)
          return false

        return true
      }
    },

    methods: {

    }
  }
</script>
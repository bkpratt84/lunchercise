<template>
  <v-container fluid fill-height>
    <v-snackbar
      v-model="notification"
      :color="notificationColor"
      bottom
      multi-line
    >
      {{ notificationText }}
      <v-btn dark flat @click.native="notification = false">Close</v-btn>    
    </v-snackbar>

    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login to Lunchercise</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <v-text-field
              prepend-icon="person"
              name="email"
              label="Email"
              type="text"
              v-model="form.email"
              :error="$v.form.email.$error"
              :error-messages="($v.form.email.$dirty && !$v.form.email.required) ? 'Email Required.'
                :($v.form.email.$dirty && !$v.form.email.email) ? 'Invalid email address.'
                : []"
              @input="$v.form.email.$touch()"
            ></v-text-field>

            <v-text-field
              id="password"
              prepend-icon="lock"
              name="password"
              label="Password"
              type="password"
              v-model="form.password"
              :error="$v.form.password.$error"
              :error-messages="($v.form.password.$dirty && !$v.form.password.required) ? 'Password Required.' : []"
              @input="$v.form.password.$touch()"
            ></v-text-field>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="submitLogin">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapActions } from 'vuex'
  import SnackbarQueue from '@/mixins/snackbarQueue'
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [
      SnackbarQueue
    ],

    data: () => ({
      form: {
        email: '',
        password: ''
      },
    }),

    validations: {
      form: {
        email: {
          required,
          email
        },
        password: {
          required
        },
      }
    },

    methods: {
      ...mapActions({
          vSetUser: 'setUser'
      }),

      submitLogin() {
        this.$v.$touch()

        if (this.$v.$invalid) return

        this.$firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then(user => {
          this.vSetUser(user)
          this.$router.push('/');
        },(error) => {
          this.addNotification('Invalid login, try again!', 'error')
        }).catch(error => {
          this.addNotification('Sorry, unable to reach authorization service. Please try again later!', 'error')
        })
      }
    }
  }
</script>

<template>
  <div>
    <h1>Errors Sample</h1>

    <v-btn class="ma-1" color="red" dark @click="errorNotAuthorized">Not Authorized</v-btn>
    <v-btn class="ma-1" color="blue" dark @click="errorAuthenticationError">Authentication Error</v-btn>
    <v-btn class="ma-1" color="purple" dark @click="errorApolloError">Internal Error</v-btn>
    <v-btn class="ma-1" color="orange" dark @click="errorUserInputError">User Input Error</v-btn>
    <v-btn class="ma-1" color="teal" dark @click="errorMulti">Multi</v-btn>

    <v-row v-if="error">
      <v-col cols="12" md="6" v-for="(gqlError,i) in error.graphQLErrors" :key="i">
        <v-card >
            <v-simple-table  >
              <tbody>
              <tr>
                <th>Indice</th><td>{{i}}</td>
              </tr>
              <tr>
                <th>Path</th><td>{{gqlError.path}}</td>
              </tr>
              <tr>
                <th>Message</th><td>{{gqlError.message}}</td>
              </tr>
              <tr>
                <th>Code</th><td>{{gqlError.extensions.code}}</td>
              </tr>
              <tr v-if="gqlError.extensions.inputErrors">
                <th>

                  InputErrors</th>
                <td>
                <pre>{{ JSON.stringify(gqlError.extensions.inputErrors, undefined, 4)}}</pre>

                </td>
              </tr>
              </tbody>
            </v-simple-table>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import errorProvider from "@/modules/base/providers/ErrorProvider";

export default {
  name: "ErrorSamplePage",
  data(){
    return {
      error: null
    }
  },
  computed: {
    getInputErrors(){
      return ie => this.renderjson(ie)
    }
  },
  methods: {
    errorNotAuthorized() {
      errorProvider.errorNotAuthorized()
          .catch(error => {
            console.log(error.graphQLErrors)
            this.error = error
          })
    },
    errorAuthenticationError() {
      errorProvider.errorAuthenticationError()
          .catch(error => {
            console.log(error.graphQLErrors)
            this.error = error
          })
    },
    errorApolloError() {
      errorProvider.errorApolloError()
          .catch(error => {
            console.log(error.graphQLErrors)
            this.error = error
          })
    },
    errorUserInputError() {
      errorProvider.errorUserInputError()
          .catch(error => {
            console.log(error.graphQLErrors)
            this.error = error
          })
    },
    errorMulti() {
      errorProvider.errorMulti()
          .catch(error => {
            //console.log(error.graphQLErrors)
            this.error = error
          })
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <v-snackbar
        v-for="(GraphqlError,i) in $store.getters.getGraphqlErrors" :key="GraphqlError.key"
        color="red"
        bottom right
        :value="true"
        :style="{top: '-'+(50 * i+1) + 'px' }"
        :timeout="timeout"
    >
      {{ GraphqlError.extensions.code }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "ErrorSnackbar",
  data() {
    return {
      timeout: 3000,
      snackbar: []
    }
  },
  methods: {
    close() {
      console.log("close, actual lenght: ",this.$store.getters.getGraphqlErrors.length)
      this.$store.commit('removeGraphqlError')
    }
  },
  watch: {
    '$store.state.base.graphqlErrorsCounter': {
      handler() {
        setTimeout(this.close,this.timeout)
      }
    }
  }

}
</script>

<style scoped>

</style>

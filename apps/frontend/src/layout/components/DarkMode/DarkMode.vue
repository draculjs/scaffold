<template>
  <v-switch :dark="dark" color="green"  label="dark" hide-details  dense v-model="dark"></v-switch>
</template>

<script>
export default {
  name: "DarkMode",
  computed: {
    dark:{
      get(){
        return this.$vuetify.theme.dark
      },
      set(val){
        this.$store.commit('setDarkMode',val)
        this.$vuetify.theme.dark = val
      }
    }
  },
  methods:{
    change(){

    }
  }
}
</script>

<style scoped>

</style>

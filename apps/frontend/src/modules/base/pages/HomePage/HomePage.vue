<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="4" class="text-center">
        <home-card
            title="Users"
            icon="people"
            :to="{name:'userDashboard'}"
        />
      </v-col>
      <v-col cols="12" sm="4" class="text-center">
        <home-card
            title="Settings"
            icon="settings"
            :to="{name:'SettingsPage'}"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import HomeCard from "./HomeCard";

export default {
  name: 'HomePage',
  components: {HomeCard},
  created() {
    if (this.$store.getters.me === null) {
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <!-- <v-card color="grey lighten-4" flat height="50px" style="margin:5px;" tile> -->
    <v-app-bar dense color="transparent" flat>
      <router-link to="/">
        <v-toolbar-title>PlayersHub</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn rounded color="white" style="margin:5px;">Forum</v-btn>
      <v-btn rounded color="white" style="margin:5px;">Marketplace</v-btn>
      <v-btn rounded color="white" style="margin:5px;">Become A Pro</v-btn>
      <router-link to="/Hire-A-Pro">
        <v-btn rounded color="white" style="margin:5px;">Hire A Pro</v-btn>
      </router-link>
      <v-btn rounded color="white" style="margin:5px;">Calender</v-btn>
      <v-avatar v-if=!login color="white" style="margin:5px;">
        <v-icon>mdi-account-circle</v-icon>
      </v-avatar>
      <v-btn v-if=login rounded color="white" style="margin:5px;">Sign In</v-btn>
      <v-btn v-if=login rounded color="white" style="margin:5px;">Sign Up</v-btn>
    </v-app-bar>
  <!-- </v-card> -->
</template>

<script>
export default {
  data() {
    return {

    };
  },
  props: {
    login: Boolean
  },
  // computed: {
  //   getVars: function () {
  //     login = this.login
  //   }
  // }
};
</script>
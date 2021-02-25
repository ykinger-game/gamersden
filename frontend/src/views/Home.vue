<template>
  <div class="home">
    <v-img
      height="100vh"
      src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?cs=srgb&dl=keyboard-gaming-moody-gamer-3165335.jpg&fm=jpg"
    >
      <headerTab login="false" />
      <!-- <v-layout row wrap align-center justify-center>
        <v-flex xs6 offset xs-1 sm6 offset-sm1 md6 offset-md1>
            <v-card class="elevation-0">
              <v-card-title primary-title class="layout justify-center">
                <h1>TITLE</h1>
                </v-card-title>
              <v-card-text>
                ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus enim et justo eleifend pharetra. Nam consectetur, nulla in viverra mattis, ipsum libero faucibus odio, at eleifend mauris arcu non nibh. Aliquam congue augue sed sapien tristique, eget faucibus risus pulvinar. Nullam ut nunc felis.
              </v-card-text>
            </v-card>
         </v-flex>
      </v-layout>-->

      <v-container fluid fill-height>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 style="color:green" v-text="tagLine"></h1>
          </v-col>
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <router-link to="/Hire-A-Pro">
              <v-btn rounded color="white" style="margin:5px;">Hire A Pro</v-btn>
              </router-link>
              <v-btn rounded color="white" style="margin:5px;">Learn More</v-btn>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </v-img>
    <features/>
    <test/>
  </div>

</template>

<script>
// @ is an alias to /src
import headerTab from "@/components/HeaderTab.vue";
import features from "@/components/Features.vue";
import test from "@/components/test.vue"

export default {
  name: "Home",
  components: {
    headerTab,
    features,
    test
  },
  data() {
    return {
      login: true,
      tagLine: "Pro Gaming Experience. Just a click away!"
    };
  }
};
</script>

<style scoped>
.tag {
  color: green;
}
.btn {
  margin: "5px";
}
</style>

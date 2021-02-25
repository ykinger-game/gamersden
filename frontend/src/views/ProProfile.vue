<template>
  <div>
    <headerTab />
    <searchBar />
    <game-description />
    <pro-gamer-desc 
    v-if="games.length"
    :games="games"/>
  </div>
</template>

<script>
import headerTab from "@/components/HeaderTab.vue";
import searchBar from "@/components/SearchAPro.vue";
import gameDescription from "@/components/GameDescription.vue";
import proGamerDesc from "@/components/ProGamerDesc.vue";
const axios = require("axios").default;

export default {
  components: {
    headerTab,
    searchBar,
    gameDescription,
    proGamerDesc
  },
  data() {
    return {
      games: []
    };
  },
  mounted: function() {
    let config = {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJ5a2luZ2VyIn0.CPE5g8MN--5xqGG4KaI_fbFfyr-t17nqXZpTQIqHrgw"
      }
    };
    axios
      .get("http://localhost:3000/pro/user/games", config)
      .then(response => (this.games = response));
  }
};
</script>
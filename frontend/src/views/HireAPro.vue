<template>
  <div class="dashboard">
    <headerTab />
    <searchBar />
    <v-container v-for="category in gameCategories" :key="category">
      <span>{{category.category}}</span>
      <gameSlides />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import headerTab from "@/components/HeaderTab.vue";
import searchBar from "@/components/SearchAPro.vue";
import gameSlides from "@/components/GameSlides.vue";

export default {
  name: "HireAPro",
  components: {
    headerTab,
    searchBar,
    gameSlides
  },
  data() {
    return {
      gameCategories: [
        {
          category: "MMO"
        },
        {
          category: "Shooter"
        }
      ]
    };
  }
};
</script>
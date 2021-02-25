<template>
  <div class="dashboard">
    <HeaderTab />

    <PlayerDashGrid />

    <Features />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTab from "@/components/HeaderTab.vue";
import PlayerDashGrid from "@/components/PlayerDashGrid.vue";
import Features from "@/components/Features.vue";

export default {
  name: "PlayerDash",
  components: {
    HeaderTab,
    PlayerDashGrid,
    Features
  }
};
</script>
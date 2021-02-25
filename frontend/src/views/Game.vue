<template>
  <div>
    <headerTab />
    <gameDescription />
    <pros />
  </div>
</template>

<script>
import headerTab from "@/components/HeaderTab.vue";
import gameDescription from "@/components/GameDescription.vue";
import pros from "@/components/ProGroup.vue";
export default {
  name: "HireAPro",
  components: {
    headerTab,
    gameDescription,
    pros
  },
  data() {
    return {
      login: true
    };
  }
};
</script>
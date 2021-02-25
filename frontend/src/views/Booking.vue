<template>
  <div>
    <headerTab />
    <v-container fluid ma-2> 
      <h3> I want to book</h3>
      
      <v-avatar color="red">
      <span class="white--text headline">CJ</span>
    </v-avatar> 
    <h3>(Pro user name) for the game <game-drop-down/> on </h3>
      

    <v-row >
      <v-col>
    <calender/>
      </v-col>
      <v-col >
        Available slots
      </v-col>
    </v-row>
    

    <v-checkbox
      v-model="checkbox"
      :label="`I accept to blah blah ${checkbox.toString()}`"
    ></v-checkbox>
    </v-container>

  </div>
</template>

<script>
import headerTab from "@/components/HeaderTab.vue";
import calender from "@/components/calender.vue";
import gameDropDown from "@/components/gameDropDown.vue"
export default {
  name: "booking",
  components: {
    headerTab,
    calender,
    gameDropDown,
  },
  data() {
    return {
      login: true,
      checkbox: false
    };
  }
};
</script>
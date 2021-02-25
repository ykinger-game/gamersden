<template>
  <v-card>
    <v-toolbar color="cyan" dark flat>
      <v-toolbar-title>Games Played</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn rounded color="Blue" style="margin:5px;">Book the Pro</v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item">{{ item.name }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card flat>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" v-for="header in headers" :key="header">{{header.text}}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <v-rating
                      v-model="item.rating"
                      background-color="purple lighten-3"
                      color="purple"
                      readonly="true"
                      half-increments="true"
                     
                    ></v-rating>
                  </td>
                  <td>{{ item.rate }}</td>
                  <td>{{ item.gameExp }}</td>
                  <td>{{ item.gameVideo }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        {
          name: "Call Of Duty",
          rating: "4.5",
          rate: "$20",
          gameExp: "120 Hrs",
          gameVideo: "Link to sample gameplay video"
        },
        {
          name: "CounterStrike",
          rating: "2",
          rate: "$20",
          gameExp: "120 Hrs",
          gameVideo: "Link to sample gameplay video"
        },
        {
          name: "Doom",
          rating: "5",
          rate: "$20",
          gameExp: "120 Hrs",
          gameVideo: "Link to sample gameplay video"
        },
        {
          name: "Age of Empires",
          rating: "1",
          rate: "$20",
          gameExp: "120 Hrs",
          gameVideo: "Link to sample gameplay video"
        }
      ],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      headers: [
        {
          text: "Average Rating",
          value: "rating"
        },
        {
          text: "Rate per Session*",
          value: "rate"
        },
        {
          text: "Hours of game played",
          value: "gameExp"
        },
        {
          text: "Sample Gameplay",
          value: "gameVideo"
        }
      ],
    };
  }
};
</script>
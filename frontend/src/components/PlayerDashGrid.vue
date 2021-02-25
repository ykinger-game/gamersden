<template>
  <v-container class="grey lighten-5">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <v-row>
      <v-col cols="2" md="2.5">
        <v-card class="pa-2" outlined height="400px" tile>
          <v-toolbar-title>Top Pro Players</v-toolbar-title>
          <v-list>
            <v-list-item v-for="item in items" :key="item.title">
              <v-list-item-icon>
                <v-icon v-if="item.icon" color="pink">mdi-star</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="4" md="4">
        <v-card class="pa-2" outlined height="400px" tile>Embedded stream from Twitch</v-card>
      </v-col>
      <v-col cols="4" md="4">
        <v-card class="pa-2" outlined height="400px" tile>Message Board</v-card>
      </v-col>

      <v-col cols="2" md="2.5">
        <v-card class="pa-2" outlined height="400px" tile>
          <v-toolbar-title>Friends</v-toolbar-title>
          <v-list>
            <v-list-item v-for="item in items" :key="item.title">
              <v-list-item-icon>
                <v-icon v-if="item.icon" color="pink">mdi-star</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" md="2.5">
        <v-card class="pa-2" outlined height="400px" tile>
          <v-toolbar-title>Pro Players Following</v-toolbar-title>
          <v-list>
            <v-list-item v-for="item in items" :key="item.title">

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="8" md="8">

     <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  </v-col>
      

      <v-col cols="2" md="2.5">
        <v-card class="pa-2" outlined height="400px" tile>
          <v-toolbar-title>New/Upcoming Games</v-toolbar-title>
          <v-list>
            <v-list-item v-for="item in items" :key="item.title">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: true,
          title: "Jason Oner",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
        },
        {
          title: "Travis Howard",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
        },
        {
          title: "Ali Connors",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
        },
        {
          title: "Cindy Baker",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
        }
      ],
       colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
    };
  }
};
</script>
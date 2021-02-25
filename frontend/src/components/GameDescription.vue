<template>
  <v-container class="grey lighten-5">
      <v-row>
      <v-col cols="4" md="4">
          <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="200"
          @click="toggle"
        >
          </v-card>
      </v-col>
      <v-col cols="8" md="8">Your location
          <v-row height="50">
              Generic Game Description
          </v-row>
          <v-row height="50">
              Recommended time slot
          </v-row>
      </v-col>
      </v-row>
  </v-container>
</template>
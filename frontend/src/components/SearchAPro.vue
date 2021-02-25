<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="10" offset=1>
        <v-textarea
          auto-grow
          outlined
          rows="1"
          row-height="1"
          placeholder="Seach by Game Name or A Pro Name"
        ></v-textarea>
      </v-col>
       <v-col cols="12" sm="1">
      <v-btn large icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
       </v-col>
    </v-row>
  </v-container>
</template>
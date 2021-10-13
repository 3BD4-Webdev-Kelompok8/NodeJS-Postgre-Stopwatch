<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../images/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4" dark>
        <h1 class="white--text display-2 font-weight-bold mb-3 ">
          Welcome to Task Timer
        </h1>

        <p class="white--text subheading font-weight-regular">
          Made with sweat by
          <br>Fachri
          <br>Azzam
          <br>Herlana
          <br>Sabar
          <br>Putri
          <br>Wafi
        </p>

        <v-btn
          elevation="2" class="mx-2 green white--text" width="150px" @click="goStopwatch()"
        >Stopwatch</v-btn>

        <v-btn
          elevation="2" class="mx-2 blue white--text" width="150px" @click="goRekap()"
        >Rekap</v-btn>
      </v-col>

      
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
    
    }),
    methods:{
      goStopwatch(){
          this.$router.push({ path: "/stopwatch" });
        },
      goRekap(){
          this.$router.push({ path: "/rekap" });
        }
    }
  }
</script>

<template>
 <nav>
    <v-toolbar color="#001935" height="55px" >
     <v-toolbar-title class="text-uppercase grey--text">
      <v-btn @click="toHome()" color="transparent" ><v-img
          :src="require('../images/logo.png')"
          width = "30"
          height = "35"
          @click="toHome()"
        />
      </v-btn>
      
     </v-toolbar-title>
      <h1 class="change-font white--text text-uppercase mx-2" ><b>K8 Task Timer</b></h1>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-btn text class="mx-2" color="white" @click="goStopwatch()">
        Stopwatch
      </v-btn>

      <v-btn text color="white" class="mx-2" @click="goRekap()">
        Rekap
      </v-btn>
     
    </v-toolbar>

 </nav>
</template>

<script>
export default {
  
    data() {
        return {
            value : [],
            user : [],
            logged : false,
            notifikasi : []
        }
    },
    methods : {
      goStopwatch(){
          this.$router.push({ path: "/stopwatch" });
        },
      goRekap(){
          this.$router.push({ path: "/rekap" });
        },
      toHome(){
        this.$router.push({ path: "/" });
      }
    }
    
}
</script>


<style>
.change-font {
    font-family: "Montserrat", Montserrat, Montserrat;
}
</style>
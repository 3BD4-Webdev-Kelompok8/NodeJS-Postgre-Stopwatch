<template>
<v-row 
      class="d-flex justify-start mb-6" >
      <v-col class="mx-4">
        <v-card
     elevation="2"
     outlined
     style="width: 500px; align:center;"
     class="my-3"
   >
    <v-card-title class="justify-center">Stopwatch Maker</v-card-title>
    <v-text-field
            label="Solo"
            solo
            color="teal" class="mx-4"
          ><template v-slot:label >
        <div>Task Name</div>
      </template></v-text-field>
  
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="blue white--text" depressed
               @click="createStopwatch()"
               >Create
               </v-btn>
      </v-card-actions>
        </v-card>
        
      </v-col>
      <v-col class="mx-4">
        <v-card elevation="2"
         outlined
         width="500px"
         class="my-3"
         style="margin-left:-200px">
            <v-card-title class="justify-center">Web Development</v-card-title>
            <template>
              <h1 class="text-center sw_time display-3 font-weight-bold" color="black">0:0</h1>
            </template>
            <v-card-actions>
      
            <v-spacer></v-spacer>
           

      <v-btn class="green white--text"   depressed
                  >Start</v-btn>
      <v-btn class="pink white--text"   depressed
                  >Stop</v-btn>
      <v-spacer></v-spacer>
      </v-card-actions>
 </v-card>
 
      </v-col>
  </v-row>

  
</template>

<script>
export default {
  name: 'App',
    components:{},
    data() {
        return {
            stopwatch : []
        }
    },
    methods : {
      /*start_sw(id){
        id = 1
      },
      pause_sw(id){
        id = 2
      },
      stop_sw(id){
        id = 3
      }*/
    },
    beforeMount(){
      this.stopwatch.timer = 0
      
      
    }
}
</script>

<style>

</style>
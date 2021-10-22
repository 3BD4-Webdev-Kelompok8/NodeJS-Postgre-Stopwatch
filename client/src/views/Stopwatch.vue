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
            v-model="newstopwatch"
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
         v-for="(item, index) in this.stopwatch" :key="item.id_stopwatch"
         style="height: 200px;">
            <v-card-title class="justify-center">{{item.nama}}</v-card-title>
            <template>
              <h1 class="text-center sw_time display-3 font-weight-bold" 
              color="black">{{timestampToStopwatch(item.timestamp)}}</h1>
            </template>
            <v-card-actions>
      
            <v-spacer></v-spacer>
           

      <v-btn class="green white--text" v-if="item.timestamp < 1"  depressed @click="start(index)"
                  >Start</v-btn>
      <v-btn class="green white--text"  v-if="item.timestamp > 0 && item.status === true"  depressed @click="pause(index)"
                  >Pause</v-btn>
      <v-btn class="green white--text"  v-if="item.timestamp > 0 && item.status === false"  depressed @click="start(index)"
                  >Resume</v-btn>
      <v-btn class="pink white--text"  v-if="item.timestamp < 1"  depressed disabled
                  >Stop</v-btn>
      <v-btn class="pink white--text"  v-if="item.timestamp > 0"  depressed  @click="stop(index)"
                  >Stop</v-btn>
      <v-btn class="red white--text"  depressed  @click="stop(index)"
                  >Delete</v-btn>
      <v-spacer></v-spacer>
      </v-card-actions>
 </v-card>
 
      </v-col>
     
  </v-row>

  
</template>

<script>
import Stopwatch from '../repository/interactor/stopwatch'
export default {
  name: 'App',
    components:{},
    data() {
        return {
            stopwatch : [],
            newstopwatch : null,
            data : {},
            interval : null,
            runningID : null,
            newTimeStamp : 0
        }
    },
    methods : {
      // Method utk delete 1 stopwatch
      deleteStopwatch(id){
        Stopwatch.deleteStopwatchByID(id)
          .then((response)=>{
            console.log(response)  
            this.getAllStopwatch(false)  
            })
      },

      // Mengubah timestamp ke format stopwatch
      timestampToStopwatch(timestamp){
            var hours = Math.floor(timestamp / 3600);
            timestamp -= hours * 3600;
            var mins = Math.floor(timestamp / 60);
            timestamp -= mins * 60;
            var secs = timestamp;

            // (B2) UPDATE THE DISPLAY TIMER
            if (hours < 10) { hours = "0" + hours; }
            if (mins < 10) { mins = "0" + mins; }
            if (secs < 10) { secs = "0" + secs; }
            return hours + ":" + mins + ":" + secs;
      },

      /* Method utk membuat stopwatch baru */
      createStopwatch(){
         this.data.nama = this.newstopwatch
        
          Stopwatch.createStopwatch(this.data)
            .then(response => {
              console.log(response.message)
               this.getAllStopwatch(false)
            })
            .catch( e => {
              console.log(e)
            })
      },

      // Method menambahkan stopwatch ke array agar tidak double
      comparer(stopwatch, respon){
          for (let i = 0; i < stopwatch.length; i++) {
                   if(stopwatch[i].id_stopwatch == respon.id_stopwatch){
                     return true
                   }
          } 
          return false;
        },
      // Method utk me-retrieve stopwatch kedalam array
      getAllStopwatch(firstTime){
          
          Stopwatch.getAllStopwatch()
          .then((response)=>{
            var stopwatches = response.data
            if(typeof stopwatches[0] !== "undefined"){
              for (let i = 0; i < stopwatches.length; i++) {
                if(!this.comparer(this.stopwatch, stopwatches[i])){
                  this.stopwatch.push(stopwatches[i])
                }
              }
            }

            /* Method apabila first time tab dibuka */
            if(firstTime){
              
              this.newTimeStamp = Math.round(new Date().getTime()/1000);
              for (let i = 0; i < this.stopwatch.length; i++){
                if(this.stopwatch[i].status == 1){
                  console.log("calculating new timestamp")
                  console.log(this.stopwatch[i].timestamp + " + ")
                  console.log((this.newTimeStamp - this.stopwatch[i].last_timestamp))
                  this.stopwatch[i].timestamp = this.stopwatch[i].timestamp + (this.newTimeStamp - this.stopwatch[i].last_timestamp)
                  this.start(i)
                  break;
                }
              }
            }
          })
      },

      // Method utk men-start stopwatch
      start(index) {
        console.log("starting the stopwatch")
        /* Check for another running Stopwatch */
        for (let i = 0; i < this.stopwatch.length; i++){
          if(this.stopwatch[i].status == 1 && i !== index){
            this.pause(i)
            break;
          }
        }
        this.stopwatch[index].status = true
        //this.stopwatch[index].paused = false

        /* Update The Statuses */
        //update Status = true (running),
        Stopwatch.updateStopwatchStatus(
          this.stopwatch[index].id_stopwatch,
          this.stopwatch[index].status)
        //Update the timestamp,
        Stopwatch.updateStopwatchTimestamp(
              this.stopwatch[index].id_stopwatch,
              this.stopwatch[index].timestamp);
        //and Last Timestamp
        Stopwatch.updateStopwatchLastTimestamp(
          this.stopwatch[index].id_stopwatch, 
          Math.round(new Date().getTime()/1000)); 
        //Paused Status = false
        /*
        if(this.stopwatch[index].paused == true){
          Stopwatch.updateStopwatchPaused(
            this.stopwatch[index].id_stopwatch, 
            this.stopwatch[index].paused); 
        } */

        /* Create the Interval Per 1s */
        this.interval = setInterval(() => {
          this.stopwatch[index].timestamp = this.stopwatch[index].timestamp + 1;}, 1000);
      },

      // Method utk mem-pause stopwatch
      pause(index){
        console.log("pausing the stopwatch")
        this.stopwatch[index].status = false
        clearInterval(this.interval);
        
        /* Update the Selected Stopwatch */
        //Update the status
        Stopwatch.updateStopwatchStatus(
              this.stopwatch[index].id_stopwatch,
              this.stopwatch[index].status);
        //Update the timestamp
        Stopwatch.updateStopwatchTimestamp(
              this.stopwatch[index].id_stopwatch,
              this.stopwatch[index].timestamp);
        //Update the last_timestamp
        Stopwatch.updateStopwatchLastTimestamp(
              this.stopwatch[index].id_stopwatch,
              Math.round(new Date().getTime()/1000));
      },

      // Method utk stop stopwatch dan memasukannya ke rekap
      stop(index){
        this.stopwatch[index].status = false
        clearInterval(this.interval);

        /* Update the timestamp then delete the stopwatch */
        Stopwatch.updateStopwatchTimestamp(
          this.stopwatch[index].id_stopwatch,
          this.stopwatch[index].timestamp)
          .then(res=>{
            console.log(res)
            Stopwatch.deleteStopwatchByID(this.stopwatch[index].id_stopwatch)
             .then(res2=>{
               console.log(res2)
               this.$router.go()
             })

          })

        
      },

    },
    // Method yg dijalankan sebelum load 
    beforeMount(){
      var firstTime = true
      this.getAllStopwatch(firstTime);
      this.newTimeStamp = Math.round(new Date().getTime()/1000);
    }
}
</script>

<style>

</style>
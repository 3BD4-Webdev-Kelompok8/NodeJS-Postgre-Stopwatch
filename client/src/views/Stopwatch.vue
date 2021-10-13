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
         style="margin-left:-200px; height: 200px;">
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
      checkvariable(stopwatch){
        console.log("interval = " + this.interval)
        console.log("timestamp = " +stopwatch.timestamp)
      },
      deleteStopwatch(id){
        Stopwatch.deleteStopwatchByID(id)
          .then((response)=>{
            console.log(response)  
            this.getAllStopwatch(false)  
            })
      },
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
            //sw.temp = hours + " Jam " + mins + " Menit " + secs + " Detik";
      },
      createStopwatch(){
         this.data.nama = this.newstopwatch
         console.log(this.data)
          Stopwatch.createStopwatch(this.data)
            .then(response => {
              console.log(response.message)
               this.getAllStopwatch(false)
            })
            .catch( e => {
              console.log(e)
            })
      },
      comparer(stopwatch, respon){
          for (let i = 0; i < stopwatch.length; i++) {
                   if(stopwatch[i].id_stopwatch == respon.id_stopwatch){
                     return true
                   }
                // }
          } 
          return false;
        },
      getAllStopwatch(firstTime){
          Stopwatch.getAllStopwatch()
          .then((response)=>{
            
            var stopwatches = response.data
            console.log(stopwatches)
            if(typeof stopwatches[0] !== "undefined"){
              for (let i = 0; i < stopwatches.length; i++) {
                if(!this.comparer(this.stopwatch, stopwatches[i])){
                  this.stopwatch.push(stopwatches[i])
                }
                 
              }
              
            }
            if(firstTime){
              console.log("welcome back")
              for (let i = 0; i < this.stopwatch.length; i++){
                console.log("masuk sini kah?")
                console.log(this.stopwatch[i].status)
                if(this.stopwatch[i].status == 1){
                  console.log("this.stopwatch[i].last_timestamp")
                  console.log(this.stopwatch[i].last_timestamp)
                  console.log(this.stopwatch[i].timestamp + (this.newTimeStamp) - this.stopwatch[i].last_timestamp)
                  this.stopwatch[i].timestamp = this.stopwatch[i].timestamp + (this.newTimeStamp) - this.stopwatch[i].last_timestamp
                  this.start(i)
                  break;
                }
              }
            }else{
              console.log("Its not first time you've been there since 1 sec ago")
            }
          })
      },
      tick() {
        console.log("masuk")
        for(let i = 0; i < this.stopwatch.length; i++){
          if( this.stopwatch[i].id_stopwatch === this.runningID){
            this.stopwatch[i].timestamp++
          }
        }
        
      },
      start(index) {
        //check dulu ada yang lagi jalan ga
        for (let i = 0; i < this.stopwatch.length; i++){
          console.log("masuk sini kah?")
          console.log(this.stopwatch[i].status)
          if(this.stopwatch[i].status == 1 && i !== index){
            this.pause(i)
            break;
          }
        }
        this.stopwatch[index].status = true
        Stopwatch.updateStopwatchStatus(
              this.stopwatch[index].id_stopwatch,
              this.stopwatch[index].status
            )
        this.interval = setInterval(() => {
        this.stopwatch[index].timestamp = this.stopwatch[index].timestamp + 1;
        Stopwatch.updateStopwatchTimestamp(
                this.stopwatch[index].id_stopwatch, this.stopwatch[index].timestamp)
                .then(res=>{
                  console.log(res)
                  Stopwatch.updateStopwatchLastTimestamp(
                this.stopwatch[index].id_stopwatch, Math.round(new Date().getTime()/1000));
                })
        }, 1000);
      },
      pause(index){
        console.log(this.stopwatch[index])
        this.stopwatch[index].status = false
        console.log(this.stopwatch[index].status)
        clearInterval(this.interval);
        
        Stopwatch.updateStopwatchStatus(
              this.stopwatch[index].id_stopwatch,
              this.stopwatch[index].status
            )
      },
      stop(index){
        console.log(this.stopwatch[index])
        this.stopwatch[index].status = false
        console.log(this.stopwatch[index].status)
        clearInterval(this.interval);
        console.log(this.stopwatch[index].timestamp)
        this.saveAllStopwatch(true, index)
        this.$router.go()

        /*Stopwatch.updateStopwatchTimestamp(
          this.stopwatch[index].id_stopwatch, this.stopwatch[index].timestamp)
          .then(res => {
              console.log(res)
              Stopwatch.deleteStopwatchByID(this.stopwatch[index].id_stopwatch)
        
        }); */
        
      },
      checkRunningStopwatch(){
        console.log("dicek1")
        this.getAllStopwatch();
        console.log(this.stopwatch[0])
        console.log("dicek2")
        /*for (let i = 0; i < this.stopwatch.length+1; i++){
          console.log("masuk sini kah?")
          console.log(this.stopwatch[i])
          if(this.stopwatch[i].status === 1){
            
            
            this.start(i)
          }
        }*/
      },
      saveAllStopwatch(isdeleted ,index = 0){
        for (let i = 0; i < this.stopwatch.length; i++){
          if(this.stopwatch[i].status === true){
            Stopwatch.updateStopwatchStatus(
              this.stopwatch[i].id_stopwatch,
              this.stopwatch[i].status
            )
            Stopwatch.updateStopwatchTimestamp(
                this.stopwatch[i].id_stopwatch, this.stopwatch[i].timestamp)
            //
            Stopwatch.updateStopwatchLastTimestamp(
              this.stopwatch[i].id_stopwatch,
              Math.round(new Date().getTime()/1000))

          }else{
            Stopwatch.updateStopwatchTimestamp(
                this.stopwatch[i].id_stopwatch, this.stopwatch[i].timestamp)
          }
        }
        if(isdeleted){
          Stopwatch.deleteStopwatchByID(this.stopwatch[index].id_stopwatch)
          .then(res=>{
            console.log(res)
          })
        }
      },
    
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
      this.getAllStopwatch(true);
      this.newTimeStamp = Math.round(new Date().getTime()/1000);
      console.log("this.newTimeStamp")
      console.log(this.newTimeStamp)
    },
    mounted(){
      
      this.checkRunningStopwatch();
    }
}
</script>

<style>

</style>
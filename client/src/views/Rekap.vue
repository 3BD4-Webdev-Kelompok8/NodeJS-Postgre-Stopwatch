<template>
 <div align="center">      
    <v-card width="500px" class=" mx-2 my-2">
        <v-card-title class="change-font text-uppercase justify-center black--text" ><h1>K8 TASK TIMER</h1></v-card-title>
        <v-card-text>{{jumlah_history}} Task Selesai</v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer> 
            <v-btn class="red white--text"   
                    depressed>
                    Hapus Semua</v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>

    
        <v-card elevation="2"
                outlined
                width="500px"
                class="my-3"
                v-for="item in this.history" :key="item.id_history"
         >
            <v-card-title class="justify-center">{{item.nama}}</v-card-title>
            <template>
              <h1 class="text-center sw_time display-3 font-weight-bold" color="black">{{timestampToStopwatch(item.timestamp)}}</h1>
            </template>
            <v-card-text>{{timestampToText(item.timestamp)}}</v-card-text>
            <v-card-actions>
      
            <v-spacer></v-spacer>
           

      <v-btn class="red white--text"   depressed @click="deleteOneHistory(item.id_history)"
                  >Hapus</v-btn>
      </v-card-actions>
 </v-card>
     
 </div>
</template>

<script>
import History from '../repository/interactor/history'
export default {
  name: 'App',
    components:{},
    data() {
        return {
            history : [],
            jumlah_history : 0
        }
    },
    methods : {
      comparer(history, respon){
          for (let i = 0; i < history.length; i++) {
                   if(history[i].id_history == respon.id_history){
                     return true
                   }
                // }
          } 
          return false;
        },
      getAllHistory(){
        this.history = [];
        console.log("test")
          History.getAllHistory()
          .then((response)=>{
            
            if(typeof response !== "undefined"){
              var histories = response.data
              for (let i = 0; i < histories.length; i++) {
                if(!this.comparer(this.history, histories[i])){
                  this.history.unshift(histories[i])
                }
                 
              }
              
            }
            console.log(this.history)
            this.jumlah_history = this.history.length
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
      timestampToText(timestamp){
          var hours = Math.floor(timestamp / 3600);
            timestamp -= hours * 3600;
            var mins = Math.floor(timestamp / 60);
            timestamp -= mins * 60;
            var secs = timestamp;

            //return hours + ":" + mins + ":" + secs;
            return hours + " Jam " + mins + " Menit " + secs + " Detik";
      },
      deleteOneHistory(id){
          History.deleteHistoryByID(id)
          .then((response)=>{
            console.log(response)  
            this.getAllHistory()
            this.jumlah_history = this.history.length
            
            })
            
            console.log(this.history)
            
            
      }
    },
    beforeMount(){
      this.getAllHistory()
      //this.stopwatch.timer = 0
      
      
    }
}
</script>

<style>
.change-font {
    font-family: "Montserrat", Montserrat, Montserrat !important;
    font-size: 150%;
}
</style>
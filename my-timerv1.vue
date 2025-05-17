<template>
<section class="container">
  <div class="timer">
    <div class="graphics"></div>    
    <div class="time">
      <h1>{{ timer.duration.minutes }} : {{ timer.duration.second }}</h1>
      <p>Minutos:seg</p>
    </div>
    <div class="sesions">
      <vs-row>
        <vs-col>
          <p>Sessione Length</p>
          <p>25</p>
        </vs-col>
      </vs-row>
    </div>
    <vs-button square gradient color="rgb(59,222,200)" size="xl">
        Start
      </vs-button>
  </div>


</section>
</template>
<script>
export default {
  name: 'MyTimer',
  props: {},
  data(){
    return{
      timer: {
        active: false,
        ticker: null,
        interval: null,
        duration: {
          minutes: 25,
          second: 0,
        }

      }
    }
  }
  

  
  // methods: {
  //   showRemaining(){
  //     const timer = setInterval(()={
  //       const now = new Date();
  //       const end = Date();
  //       const distance = this.getTime() - now.getTime();

  //       if(distance < 0 ){
  //         clearInterval(timer);
  //         return
  //       }
  //     })
  //   }
  // }
};
</script>
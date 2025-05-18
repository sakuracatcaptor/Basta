<template>
  <div id="app">
     <TimerVersion2 />
  </div>
</template>

<script>
// import MyTimer from "./components/my-timer.vue";
import TimerVersion2 from "./components/timer-version-2.vue"

export default {
  name: 'App',
  components: {
    TimerVersion2
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

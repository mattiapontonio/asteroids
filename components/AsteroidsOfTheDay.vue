<template>
      <div style="asteroids-of-the-day">
        <h1>Asteroids of the day</h1>
        <div style="display: flex;flex-wrap:wrap;">
          <min-max />
        </div>
        <scatter-plot 
            v-bind:date="date"
            v-bind:items="items"
            v-bind:response="response"
        />
      </div>
</template>
<script>
  import MinMax from './MinMax';
  import ScatterPlot from './ScatterPlot';
  import Vue from 'vue';
  export default {
    components: {
      MinMax,
      ScatterPlot
    },
    name: 'asteroids-of-the-day',
    props: [
      "date",
      "items",
      "response",
      "apiKey"
    ]
  }

</script>
<style>
  .asteroids-of-the-day {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>
<template>
  <div style="asteroids-of-the-day">
    <h2>Asteroids of the day</h2>
    <form>
        <label for="api_key">api_key</label>
        <input type="text" id="api_key" name="api_key" :value="api_key" required>
        <label for="date">date</label>
        <input id="date" type="date" :value="date" name="date" required>
        <button type="submit" value="Submit">Submit</button>
    </form>
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
      "api_key"
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
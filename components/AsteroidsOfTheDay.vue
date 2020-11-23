<template>
  <div style="asteroids-of-the-day">
    <h2>Asteroids of the day</h2>
    <form action="/" method="get">
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
        v-bind:start_date="start_date"
        v-bind:end_date="end_date"
    />
  </div>
</template>
<script>
  import Selector from './Selector';
  import MinMax from './MinMax';
  import ScatterPlot from './ScatterPlot';
  import Vue from 'vue';
  import datetime from '../plugins/computed/datetime.js';
  import start_date from '../plugins/computed/start_date.js';
  import end_date from '../plugins/computed/end_date.js';
  export default {
    components: {
      Selector,
      MinMax,
      ScatterPlot
    },
    name: 'asteroids-of-the-day',
    props: [
      "date",
      "start_date",
      "end_date"
    ],
    computed: {
      minD: function () {
        return Math.min(...this.ds);
      },
      maxD: function () {
        return Math.max(...this.ds);
      },
      maxX: function () {
          return Math.max(...this.xs)
      },
      minX: function () {
          return Math.min(...this.xs)
      },
      maxY: function () {
          return Math.max(...this.ys)
      },
      minY: function () {
          return Math.min(...this.ys);
      },
      xs: function () {
        return this.items.map(e => e['x']);
      },
      ys: function () {
        return this.items.map(e => e['y']);
      },
      ds: function () {
        return this.items.map(e => e['d']);
      },
      length: function () {
        return this.items.length;
      },
      url: function() {
        const url = new URL(window.location.origin);
        url.pathname = 'neo/rest/v1/feed';
        url.searchParams.set('start_date', this.start_date);
        url.searchParams.set('end_date', this.end_date);
        return url;
      },
      datetime
    },
    methods: {
      scale() {
        return Vue.filter('scale');
      }
    },
    data: function () {
      return {
          items: []
      }
    }
  }

</script>
<style>
  .asteroids-of-the-day {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>
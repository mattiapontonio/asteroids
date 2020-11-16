<template>
  <div style="asteroids-of-the-day">
    <h2>Asteroids of the day</h2>
    <h2>{{length}}</h2>
    <div style="display: flex;flex-wrap:wrap;">
      <selector
        v-bind:date="date"
        v-bind:selected_index="date | lun_dom_day"
      />
      <min-max />
    </div>
    <scatter-plot
      v-bind:date="date"
      v-bind:items="items"
      v-bind:loading="loading"
      v-bind:errored="errored"
      v-bind:minD="minD"
      v-bind:maxD="maxD"
      v-bind:minX="minX"
      v-bind:maxX="maxX"
      v-bind:minY="minY"
      v-bind:maxY="maxY"
      v-bind:xs="xs"
      v-bind:ds="ds"
      v-bind:ys="ys"
    />
    <table>
      <tbody>
        <tr>
          <td>⬆</td>
          <td>Distance</td>
          <td>(au)</td>
        </tr>
        <tr>
          <td>➡</td>
          <td>Velocity</td>
          <td>(km/s)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import Selector from './Selector';
  import MinMax from './MinMax';
  import ScatterPlot from './ScatterPlot';
  import axios from 'axios';
  import Vue from 'vue';
  export default {
    components: {
      Selector,
      MinMax,
      ScatterPlot
    },
    name: 'asteroids-of-the-day',
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
    },
    props: {
      date: {
        type: String,
        required: true
      },
      start_date: {
        type: String,
        required: true
      },
      end_date: {
        type: String,
        required: true
      },
      loading: {
        type: Boolean
      },
      errored: {
        type: Boolean
      }
    },
    methods: {
      get() {
        const url = new URL(window.location.origin);
        url.pathname = 'neo/rest/v1/feed';
        url.searchParams.set('start_date', this.start_date);
        url.searchParams.set('end_date', this.end_date);
        this.loading = true;
        this.errored = false;
        this.items=[];
        axios
        .get(url)
        .then(response => {
          response.data.near_earth_objects[this.date].forEach(function(e,i,a){
            const url = new URL(window.location.origin);
            url.pathname = `/neo/rest/v1/neo/${e.id}`;
            axios
            .get(url)
            .then(function(response){
              this.items.push({
                d: response.data.estimated_diameter.kilometers.estimated_diameter_max,
                x: response.data.close_approach_data[0].relative_velocity.kilometers_per_second,
                y: response.data.close_approach_data[0].miss_distance.astronomical,
              });
            });
          });
        })
        .catch(error => this.errored = true)
        .finally(() => this.loading = false);
      },
      scale() {
        return Vue.filter('scale');
      }
    },
    mounted() {
      this.get();
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
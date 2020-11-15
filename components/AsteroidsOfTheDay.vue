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
      v-bind:asteroids="asteroids"
      v-bind:loading="loading"
      v-bind:errored="errored"
      v-bind:minD="minD"
      v-bind:maxD="maxD"
      v-bind:minX="minX"
      v-bind:maxX="maxX"
      v-bind:minY="minY"
      v-bind:maxY="maxY"
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
  export default {
    components: {
      Selector,
      MinMax,
      ScatterPlot
    },
    name: 'asteroids-of-the-day',
    computed: {
      minD: function () {
        return Math.min(this.ds)
      },
      maxD: function () {
        return Math.max(this.ds)
      },
      xs: function () {
        return this.asteroids.map(e => e['velocity_kilometers_per_second']);
      },
      ys: function () {
        return this.asteroids.map(e => e['distance']);
      },
      ds: function () {
        return this.asteroids.map(e => e['diameter']);
      },
      length:function () {
        return this.asteroids.length;
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
        axios
        .get(url)
        .then(response => {
          this.asteroids = response.data.near_earth_objects[this.date];
          this.asteroids.forEach(function(e,i,a){
            const url = new URL(window.location.origin);
            url.pathname = `/neo/rest/v1/neo/${e.id}`;
            axios
            .get(url)
            .then(function(response){
              Object.assign(e, {
                id: response.data.id,
                name: response.data.name,
                diameter: response.data.estimated_diameter.kilometers.estimated_diameter_max,
                magnitude: response.data.absolute_magnitude_h,
                velocity_kilometers_per_hour: response.data.close_approach_data[0].relative_velocity.kilometers_per_hour,
                velocity_kilometers_per_second: response.data.close_approach_data[0].relative_velocity.kilometers_per_second,
                distance: response.data.close_approach_data[0].miss_distance.astronomical,
              });
            });
          });
        })
        .catch(error => this.errored = true)
        .finally(() => this.loading = false);
      },
      scale() {
        return Vue.filter('scale');
      },
      max() {
        return Vue.filter('max');
      },
      min() {
        return Vue.filter('min');
      }
    },
    mounted() {
      this.get();
    },
  }

</script>
<style>
  .asteroids-of-the-day {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>
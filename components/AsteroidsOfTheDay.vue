<template>
  <div style="
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    ">
    <h2>Asteroids of the day</h2>
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
        console.log(this.asteroids);
        return Math.min(this.asteroids.map(e => e.diameter))
      },
      maxD: function () {
        console.log(this.asteroids);
        return Math.max(this.asteroids.map(e => e.diameter))
      }
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
      asteroids: {
        type: Array,
        default: () => new Array()
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
        axios.get(url).then(response => Promise.all(Object.values(response.data.near_earth_objects[this.date]).map(e => {
          const url = new URL(window.location.origin);
          url.pathname = `neo/rest/v1/neo/${e.id}`;
          return axios.get(url);
        })).then(values => {
          this.asteroids_of_the_day = values
          .map(e => e.data)
          .map(e => Object.assign({}, {
            id: e.id,
            name: e.name,
            diameter: e.estimated_diameter.kilometers.estimated_diameter_max,
            magnitude: e.absolute_magnitude_h,
            velocity_kilometers_per_hour: e.close_approach_data[0].relative_velocity.kilometers_per_hour,
            velocity_kilometers_per_second: e.close_approach_data[0].relative_velocity.kilometers_per_second,
            distance: e.close_approach_data[0].miss_distance.astronomical,
          }));
        })).catch(error => {
          console.log(error)
          this.errored = true
        }).finally(() => this.loading = false);
      },
    },
    mounted() {
      this.get();
    },
  }

</script>

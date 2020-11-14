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
        v-bind:onchangedate="onchangedate"
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
        type: Date,
        required: true
      },
      asteroids: {
        type: Array,
        default: () => new Array()
      },
      onchangedate: {
        type: Function
      },
      loading: {
        type: Boolean
      },
      errored: {
        type: Boolean
      }
    }
  }

</script>

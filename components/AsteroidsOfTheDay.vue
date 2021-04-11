<template>
  <div style="
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    ">
    <div style="display: flex;flex-wrap:wrap;">
      <min-max />
    </div>
    <scatter-plot
      v-bind:date="date"
      v-bind:items="items"
      v-bind:errored="errored"
      v-bind:error="error"
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
  import MinMax from './MinMax';
  import ScatterPlot from './ScatterPlot';
  export default {
    components: {
      MinMax,
      ScatterPlot
    },
    name: 'asteroids-of-the-day',
    computed: {
      minD: function () {
        return Math.min(this.items.map(e => e.diameter))
      },
      maxD: function () {
        return Math.max(this.items.map(e => e.diameter))
      }
    },
    props: {
      date: {
        type: Date,
        required: true
      },
      items: {
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
      },
      error: {
        type: Boolean
      }
    }
  }

</script>
<style>
</style>
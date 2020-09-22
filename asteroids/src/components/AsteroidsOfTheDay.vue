<template>
  <div style="
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0 16px;
    ">
    <h2>Asteroids of the day</h2>
    <div style="display: flex;">
      <div style="flex-grow: 1;">
        <p>Select one day to update the chart:</p>
        <selector
          v-bind:date="date"
          v-bind:onchangedate="onchangedate"
          v-bind:selected_index="date | lun_dom_day"
        />
      </div>
      <min-max />
    </div>
    <scatter-plot
      v-bind:date="date"
      v-bind:asteroids="asteroids"
      v-bind:loading="loading"
      v-bind:errored="errored"
    />
    <div>
      <div>
        <span style="
                width: 25px;
                display: inline-block;
                margin-right: 10px;
                ">⬆</span>
        <span style="
                text-transform: uppercase;
                font-weight: bold;
                margin-right: 10px;
                ">Distance</span>
        <span>(au)</span>
      </div>
      <div style="border-top: 1px solid gray;">
        <span style="
                    width: 25px;
                    display: inline-block;
                    margin-right: 10px;
                    ">➡</span>
        <span style="
                    text-transform: uppercase;
                    font-weight: bold;
                    margin-right: 10px;
                    ">Velocity</span>
        <span>(km/s)</span></div>
    </div>
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

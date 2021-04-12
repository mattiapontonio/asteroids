<template>
  <div>
    <scatter-plot v-bind:items="items"/>
    <div>
        <h3>Diameter</h3>
        <span>
            <bubble v-bind:d="0" />
            <span>Min km</span>
        </span>
        <span>
            <bubble
                    v-bind:d="1"
                    v-bind:style="{
                            position: 'relative',
                            transform: 'none'
                        }"
                />
            <span>Max km</span>
        </span>
    </div>
    <table>
      <caption>Legend</caption> 
      <thead>
        <tr>
          <td>Direction</td>
          <td>Data</td>
          <td>Unit of measurement</td>
        </tr>
      </thead>
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
  import ScatterPlot from './ScatterPlot';
  import Bubble from './Bubble.vue'
  export default {
    components: {
      Bubble,
      ScatterPlot
    },
    name: 'asteroids-of-the-day',
    props: {
      items: {
        type: Array,
        default: () => new Array()
      }
    }
  }

</script>
<style>
</style>
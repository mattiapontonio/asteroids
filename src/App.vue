<template>

  <body
    id="app"
    class="app"
  >
    <h1>Aseroids</h1>
    <main>
      <asteroids-of-the-day
        v-bind:date="date"
        v-bind:start_date="start_date"
        v-bind:end_date="end_date"
        v-bind:asteroids="asteroids_of_the_day"
        v-bind:onchangedate="onchangedate"
        v-bind:loading="loading"
        v-bind:errored="errored"
      />
      <aside>
        <brightest
          v-bind:start_date="start_date"
          v-bind:end_date="end_date"
        />
        <apod />
      </aside>
    </main>
    <footer>
      
        <table>
            <tbody>
                <tr>
                    <td>GitHub</td>
                    <td><a href="https://github.com/mattiapontonio/asteroids">https://github.com/mattiapontonio/asteroids</a></td>
                </tr>
                <tr>
                    <td>Version</td>
                    <td>{{version}}</td>
                </tr>
            </tbody>
        </table>
      </footer>
  </body>
</template>
<script>
  import AsteroidsOfTheDay from './components/AsteroidsOfTheDay.vue';
  import Brightest from './components/Brightest.vue';
  import Apod from './components/Apod.vue';
  import Vue from 'vue';
  import axios from 'axios';
  import {
    version
  } from '../package.json';
  export default {
    name: 'App',
    components: {
      Brightest,
      AsteroidsOfTheDay,
      Apod
    },
    watch: {
      date: function () {
        this.get_asteroids_of_the_day();
      }
    },
    methods: {
      get_asteroids_of_the_day() {
        const formatted = Vue.filter('formatted');
        const date = formatted(this.date);
        const url = new URL(window.location.origin);
        url.pathname = 'neo/rest/v1/feed';
        url.searchParams.set('start_date', date);
        url.searchParams.set('end_date', date);
        this.loading = true;
        this.errored = false;
        axios.get(url).then(response => Promise.all(Object.values(response.data.near_earth_objects[date]).map(e => {
          const url = new URL(window.location.origin);
          url.pathname = `neo/rest/v1/neo/${e.id}`;
          return axios.get(url);
        })).then(values => {
          this.asteroids_of_the_day = values.map(e => e.data).map(e => Object.assign({}, {
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
      onchangedate(date = new Date()) {
        this.date = date;
      }
    },
    data: function () {
      return {
        //near_earth_objects: {},
        date: new Date(),
        asteroids_of_the_day: new Array(),
        loading: true,
        errored: false
      }
    },
    mounted() {
      this.get_asteroids_of_the_day();
    },
    props: {
      start_date: {
        type: Date,
        default: function () {
          let date = new Date();
          date.setDate(date.getDate() - date.getDay() + 1);
          return date;
        }
      },
      end_date: {
        type: Date,
        default: function () {
          let date = new Date();
          let day_of_the_week = date.getDay() ? date.getDay() - 1 : 6;
          date.setDate(date.getDate() + (6 - day_of_the_week));
          return date;
        }
      },
    },
    computed: {
      version: function () {
        return version;
      }
    }
  }

</script>
<style>
  :root {
    --main-color: #2af598;
    --main-color-dark: #0a1e1a;
    --secondary-color-dark: rgb(25, 67, 94);
  }

  main {
    display: flex;
    width: auto;
    flex-wrap: nowrap;
  }

  @media (max-width: 800px) {
    main {
      flex-direction: column;
    }
  }

  body {
    background: rgb(2, 0, 36);
    background: linear-gradient(180deg, #0a1e1a 0%, #19435e 100%);
    color: white;
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizeLegibility;
    font-size: 12px;
    font-weight: 400;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    margin-top: 0px;
    max-width: 100%;
  }

  img {
    max-width: 100%;
  }

  input+label {
    border: 1px solid white;
    background-color: transparent;
  }

  input+label:hover {
    border-color: var(--main-color);
    color: var(--main-color);
  }

  input:checked+label {
    border: 1px solid var(--main-color);
    background-color: var(--main-color);
    color: var(--main-color-dark);
  }

  .radio {
    border: 1px solid var(--main-color);
    background: transparent;
    visibility: hidden;
    position: absolute;
  }

  h2 {
    text-decoration: none;
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter,
  .slide-fade-leave-to

  /* .slide-fade-leave-active below version 2.1.8 */
    {
    transform: translateX(10px);
    opacity: 0;
  }

  aside {
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: calc(100%/3);
  }

  .bubble {
    border: 1px solid var(--main-color);
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: inset 0 0 16px var(--secondary-color-dark),
      0 0 16px var(--main-color);
    z-index: 0;
  }

  .bubble .point {
    width: 4px;
    height: 4px;
    background: var(--main-color);
    border-radius: 50%;
  }

  .tooltip {
    border: 1px solid white;
    padding: 1.5em;
    color: white;
    background-color: rgba(0, 0, 0, 0.15);
    line-height: 1.5;
    white-space: nowrap;
    z-index: 1;
    position: absolute;
  }

  .scatter-plot {
    position: relative;
    min-height: 400px;
    width: 100%;
    background: repeating-linear-gradient(transparent, transparent 100px, rgb(19, 52, 67) 100px, rgb(19, 52, 67) 101px);
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: stretch;
    align-content: stretch;
    align-items: stretch;
    justify-items: stretch;
  }

  .scatter-plot .container {
    position: relative;
    flex: 1;
  }

  th,
  td {
    padding: 0.25em;
    text-align: left;
  }

  table {
    display: block;
  }
footer{
  background: white;
  color:black;
}
</style>

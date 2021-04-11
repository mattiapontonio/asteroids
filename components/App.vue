<template>
  <body id="app" class="app">
    <header>
    <h1>Asteroids</h1>
    <button onclick="history.back()">back</button>
    <button onclick="history.forward()">forward</button>
    <form onchange="this.submit()">
      <label for="api_key">api_key</label>
      <input type="text" id="api_key" name="api_key" required :value="this.$route.query.api_key">
      <label for="start_date">start_date</label>
      <input type="date" :value="this.$route.query.start_date" name="start_date" id="start_date">
      <label for="end_date">end_date</label>
      <input type="date" :value="this.$route.query.end_date" name="end_date" id="end_date">
      <div v-for="(e, i) in Object.keys(near_earth_objects)" v-bind:key="i">
        <input type="radio" :id="e" name="date" :value="e" :checked="$route.query.date==e"/>
        <label :for="e">{{e}}</label>
      </div>
      <input type="submit" value="Send Request">
    </form>
    </header>
    <main>
      <response v-bind="response"></response>
      <asteroids-of-the-day
        v-bind:date="date"
        v-bind:start_date="start_date"
        v-bind:end_date="end_date"
        v-bind:asteroids="asteroids_of_the_day"
        v-bind:onchangedate="onchangedate"
        v-bind:loading="loading"
        v-bind:errored="errored"
        v-bind:error="error"
      />
      <p v-if="error_message" v-text="error_message">
        <brightest
          v-bind:start_date="start_date"
          v-bind:end_date="end_date"
        />
        <apod />
      </p>
    </main>
    <aside>
      <brightest
        v-bind:start_date="start_date"
        v-bind:end_date="end_date"
      />
      <apod />
    </aside>
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
                <tr>
                    <td>
                      <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </td>
                </tr>
            </tbody>
        </table>
      </footer>
  </body>
</template>
<script>
  import Vue from 'vue';
  import {
    version
  } from '../package.json';
  export default {
    name: 'app',
    watch: {
      date: function () {
        this.get_asteroids_of_the_day();
      }
    },
    methods: {
      get_asteroids_of_the_day() {
        const formatted = Vue.filter('formatted');
        const date = formatted(this.date);
        const url = new URL("https://api.nasa.gov");
        url.pathname = 'neo/rest/v1/feed';
        url.searchParams.set('start_date', this.$route.query.start_date);
        url.searchParams.set('end_date', this.$route.query.end_date);
        url.searchParams.set('api_key', this.$route.query.api_key);
        this.loading = true;
        this.errored = false;
        fetch(url)
        .then(response => {
            this.response = response;
            if (response.status==200) {
              response.json().then(data => {
                this.near_earth_objects = data.near_earth_objects;
                console.log(data)
                console.log(document.forms[0].date)
                this.asteroids_of_the_day = data.near_earth_objects[this.$route.query.date].map(e => {
                  return {
                    id: e.id,
                    name: e.name,
                    diameter: e.estimated_diameter.kilometers.estimated_diameter_max,
                    magnitude: e.absolute_magnitude_h,
                    velocity_kilometers_per_hour: e.close_approach_data[0].relative_velocity.kilometers_per_hour,
                    velocity_kilometers_per_second: e.close_approach_data[0].relative_velocity.kilometers_per_second,
                    distance: e.close_approach_data[0].miss_distance.astronomical
                  };
                });
              })
            } else if(response.status==400) {
              response.json().then(data => {
                this.error_message = data.error_message;
              })
            }
        })
        .catch(error => {
          console.log(error)
          this.errored = true
          this.error = error;
        })
        .finally(() => this.loading = false);
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
        errored: false,
        near_earth_objects: {}
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
    },
    props: [
      "date",
      "start_date",
      "end_date",
      "api_key"
    ]
  }

</script>

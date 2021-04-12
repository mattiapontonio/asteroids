<template>
  <body id="app" class="app">
    <header>
      <img src="images/icon.png" alt="Icon">
      <h1>Asteroids</h1>
      <button onclick="history.back()">back</button>
      <button onclick="history.forward()">forward</button>
      <form>
        <fieldset>
          <legend>Legend</legend>
          <label for="api_key">API key</label>
          <input type="text" id="api_key" name="api_key" required :value="this.$route.query.api_key">
          <label for="start_date">start_date</label>
          <input type="date" :value="this.$route.query.start_date" name="start_date" id="start_date">
          <label for="end_date">end_date</label>
          <input type="date" :value="this.$route.query.end_date" name="end_date" id="end_date">
        </fieldset>
        <fieldset v-if="near_earth_objects">
          <legend>Date</legend>
          <div v-for="(e, i) in Object.keys(near_earth_objects)" v-bind:key="i">
            <input type="radio" :id="e" name="date" :value="e" :checked="$route.query.date==e"/>
            <label :for="e">{{e}}</label>
          </div>
        </fieldset>
        <input type="submit" value="Submit">
      </form>
    </header>
    <main>
      <h2>Asteroids of the day</h2>
      <p class="error" v-if="error" v-text="error.message"></p>
      <p v-if="element_count" v-text="element_count"></p>
      <div v-if="links">
        <a v-text="next" :href="links.next"></a>
        <a v-text="prev" :href="links.prev"></a>
        <a v-text="self" :href="links.self"></a>
      </div>
      <asteroids-of-the-day
        v-bind:items="items"
        v-bind:onchangedate="onchangedate"
      />
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
  import {
    version
  } from '../package.json';
  export default {
    name: 'app',
    watch: {
      date: function () {
        this.get();
      }
    },
    methods: {
      get() {
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
                Object.assign(this, data);
                this.items = data.near_earth_objects[this.$route.query.date||0];
              })
            } else if(response.status==400) {
              response.json().then(data => {
                this.error = data.error_message;
              })
            } else if(response.status==403) {
              response.json().then(data => {
                Object.assign(this, data);
              })
            }
        })
        .catch(error => {
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
        date: new Date(),
        items: new Array(),
        loading: true,
        near_earth_objects: {}
      }
    },
    mounted() {
      this.get();
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

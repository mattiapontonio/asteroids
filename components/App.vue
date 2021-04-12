<template>
  <body id="app" class="app">
    <header>
      <img src="images/icon.png" alt="Icon" width=64 height=auto>
      <h1>Asteroids</h1>
      <button onclick="history.back()">back</button>
      <button onclick="history.forward()">forward</button>
      <form>
        <fieldset>
          <legend>Legend</legend>
          <label for="api_key">API key</label>
          <input type="text" id="api_key" name="api_key" required :value="this.$route.query.api_key">
          <label for="start_date">start_date</label>
          <input type="date" :value="this.$route.query.start_date" name="start_date" id="start_date" required>
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
      <section>
        <h2>Asteroids of the day</h2>
        <p class="error" v-if="error" v-text="error.message"></p>
        <svg class="scatter-plot" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet" v-if="items.length">
          <line x1="0" y1="0" x2="0" y2="100%" stroke-width=".5" />
          <line x1="0" y1="0" x2="100%" y2="0" stroke-width=".5" />
          <line v-for="i in 10" :key="i" :x1="i*10+'%'" y1="0" :x2="i*10+'%'" y2="100%" />
          <line v-for="i in 10" :key="i" x1="0" :y1="i*10+'%'" x2="100%" :y2="i*10+'%'" />
          <g v-for="(item, i) in items" v-bind:key="i">
              <circle
                  :id="'circle'+i"
                  :cx="(()=>{
                      const g = items.map(z=>z.close_approach_data[0].relative_velocity.kilometers_per_second);
                      return `${100*(g[i]-Math.min(...g))/(Math.max(...g)-Math.min(...g))}%`;
                  })()"
                  :cy="(()=>{
                      const g = items.map(z=>z.close_approach_data[0].miss_distance.kilometers);
                      return `${100*(g[i]-Math.min(...g))/(Math.max(...g)-Math.min(...g))}%`;
                  })()"
                  :r="10"
                  class="bubble"
              />
              <use :href="'#circle'+i" r="1" />
          </g>
        </svg>
        <table v-if="items.length">
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
              <td>au</td>
            </tr>
            <tr>
              <td>➡</td>
              <td>Velocity</td>
              <td>km/s</td>
            </tr>
            <tr>
              <td>
                <button class="bubble">
                  <div class="point"></div>
                </button>
              </td>
              <th><h3>Diameter</h3></th>
              <td>Min km</td>
            </tr>
            <tr>
              <td>
                <button class="bubble">
                  <div class="point"></div>
                </button>
              </td>
              <th><h3>Diameter</h3></th>
              <td>Max km</td>
            </tr>
            <tr>
              <th>date</th>
              <td v-text="this.$route.query.date"></td>
            </tr>
          </tbody>  
          <tbody>
              <tr v-if="element_count">
                <th>Element count</th>
                <td v-text="element_count"></td>
              </tr>
              <tr v-if="links">
                <th rowspan="4">Links</th>
                <td><a v-text="next" :href="links.next"></a></td>
                <td><a v-text="prev" :href="links.prev"></a></td>
                <td><a v-text="self" :href="links.self"></a></td>
              </tr>
              <tr v-if="links">
                <td><a v-text="next" :href="links.next"></a></td>
              </tr>
              <tr v-if="links">
                <td><a v-text="prev" :href="links.prev"></a></td>
              </tr>
              <tr v-if="links">
                <td><a v-text="self" :href="links.self"></a></td>
              </tr>
              <tr>
                <th>start_date</th>
                <td v-text="this.$route.query.start_date"></td>
              </tr>
              <tr>
                <th>end_date</th>
                <td v-text="this.$route.query.end_date"></td>
              </tr>
              <tr>
                <th>api_key</th>
                <td v-text="this.$route.query.api_key"></td>
              </tr>
          </tbody>
        </table>
      </section>
    </main>
    <aside>
      <brightest />
      <apod />
    </aside>
    <footer>
        <table>
            <tbody>
                <tr>
                    <th>GitHub</th>
                    <td><a href="https://github.com/mattiapontonio/asteroids">https://github.com/mattiapontonio/asteroids</a></td>
                </tr>
                <tr>
                    <th>Version</th>
                    <td>{{version}}</td>
                </tr>
                <tr>
                    <th>Credits</th>
                    <td>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></td>
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
                this.error = {
                  message: data.error_message
                };
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
        near_earth_objects: {},
        error: undefined,
        element_count: undefined,
        links: undefined
      }
    },
    mounted() {
      this.get();
    },
    computed: {
      version: function () {
        return version;
      }
    }
  }

</script>

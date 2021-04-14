<template>
  <body>
    <header>
      <img src="images/icon.png" alt="Icon" width="64" height="auto" />
      <h1>Asteroids</h1>
      <button onclick="history.back()">back</button>
      <button onclick="history.forward()">forward</button>
      <form id="form">
        <fieldset>
          <legend>Legend</legend>
          <label for="api_key">API key</label>
          <input
            type="text"
            id="api_key"
            name="api_key"
            required
            :value="this.$route.query.api_key"
          />
          <label for="start_date">start_date</label>
          <input
            type="date"
            :value="this.$route.query.start_date"
            name="start_date"
            id="start_date"
            required
          />
          <label for="end_date">end_date</label>
          <input
            type="date"
            :value="this.$route.query.end_date"
            name="end_date"
            id="end_date"
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </header>
    <main>
      <section>
        <h2>Bubble chart</h2>
        <div class="error" v-if="error" v-text="error.message"></div>
        <fieldset
          form="form"
          onchange="this.form.submit()"
          v-if="near_earth_objects"
        >
          <legend>Date</legend>
          <div v-for="(e, i) in Object.keys(near_earth_objects)" v-bind:key="i">
            <input
              type="radio"
              :id="e"
              name="date"
              :value="e"
              :checked="$route.query.date==e"
              form="form"
            />
            <label :for="e" v-text="e"></label>
          </div>
        </fieldset>
        <loader v-if="loading" class="loading"></loader>
        <svg
          class="scatter-plot"
          viewBox="0 0 200 100"
          preserveAspectRatio="xMidYMid meet"
          v-if="items"
          overflow="hidden"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke-width="4"
            stroke="aquamarine"
          />
          <line
            x1="0"
            y1="100%"
            x2="100%"
            y2="100%"
            stroke-width="4"
            stroke="aquamarine"
          />
          <line
            v-for="i in 10"
            :key="i"
            :x1="i*10+'%'"
            y1="0"
            :x2="i*10+'%'"
            y2="100%"
            stroke-width="1"
            stroke="aquamarine"
          />
          <line
            v-for="i in 10"
            :key="i"
            x1="0"
            :y1="i*10+'%'"
            x2="100%"
            :y2="i*10+'%'"
            stroke-width="1"
            stroke="aquamarine"
          />
          <text
            v-for="i in 10"
            :key="i"
            x="4"
            :y="100-i*10+'%'"
            text-anchor="start"
            font-size="12px"
            font-weight="bold"
            fill="black"
            writing-mode="horizontal-tb"
          >
            {{i}}
          </text>
          <text
            v-for="i in 10"
            :key="i"
            :x="i*10+'%'"
            y="96"
            text-anchor="end"
            font-size="12px"
            font-weight="bold"
            fill="black"
            writing-mode="vertical-lr"
          >
            {{i}}
          </text>
          <circle
            v-for="(item, i) in items"
            v-bind:key="i"
            :cx="`${100*(items.map(z=>z.close_approach_data[0].relative_velocity.kilometers_per_second)[i]-Math.min(...items.map(z=>z.close_approach_data[0].relative_velocity.kilometers_per_second)))/(Math.max(...items.map(z=>z.close_approach_data[0].relative_velocity.kilometers_per_second))-Math.min(...items.map(z=>z.close_approach_data[0].relative_velocity.kilometers_per_second)))}%`"
            :cy="`${100*(items.map(z=>z.close_approach_data[0].miss_distance.kilometers)[i]-Math.min(...items.map(z=>z.close_approach_data[0].miss_distance.kilometers)))/(Math.max(...items.map(z=>z.close_approach_data[0].miss_distance.kilometers))-Math.min(...items.map(z=>z.close_approach_data[0].miss_distance.kilometers)))}%`"
            :r="10"
            class="bubble"
          />
        </svg>
        <table v-if="near_earth_objects">
          <caption>
            Legend
          </caption>
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 10 10"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle r="5" cx="5" cy="5"></circle>
                </svg>
              </td>
              <td>minimum diameter</td>
              <td>km</td>
            </tr>
            <tr>
              <td>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 10 10"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle r="5" cx="5" cy="5"></circle>
                </svg>
              </td>
              <td>maximum diameter</td>
              <td>km</td>
            </tr>
          </tbody>
          <tbody>
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
            <tr>
              <th>date</th>
              <td v-text="this.$route.query.date"></td>
            </tr>
          </tbody>
          <tbody v-if="links">
            <tr v-if="element_count">
              <th>Element count</th>
              <td v-text="element_count"></td>
            </tr>
            <tr>
              <th rowspan="4">Links</th>
            </tr>
            <tr>
              <td><a :href="links.next">next</a></td>
            </tr>
            <tr>
              <td><a :href="links.prev">prev</a></td>
            </tr>
            <tr>
              <td><a :href="links.self">self</a></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Brightest of the week</h2>
        <loader v-if="loading" class="loading"></loader>
        <div class="error" v-if="error" v-text="error.message"></div>
        <template v-for="(e, k, i) in near_earth_objects">
          <table v-bind:key="i">
            <thead>
              <tr>
                <th v-for="(e, k, i) in e" v-bind:key="i" v-text="k"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <template v-for="(e, k, i) in e">
                  <td v-if="typeof e =='object'" v-bind:key="i">
                    <table v-bind:key="i">
            <thead>
              <tr>
                <th v-for="(e, k, i) in e" v-bind:key="i" v-text="k"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <template v-for="(e, k, i) in e">
                  <td v-if="typeof e =='object'" v-bind:key="i">
                    <table v-bind:key="i">
            <thead>
              <tr>
                <th v-for="(e, k, i) in e" v-bind:key="i" v-text="k"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <template v-for="(e, k, i) in e">
                  <td v-if="typeof e =='object'" v-bind:key="i">
                    <table v-bind:key="i">
            <thead>
              <tr>
                <th v-for="(e, k, i) in e" v-bind:key="i" v-text="k"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <template v-for="(e, k, i) in e">
                  <td v-if="typeof e =='object'" v-bind:key="i">
                    
                  </td>
                  <td v-else v-bind:key="i" v-text="e"></td>
              </tr>
            </tbody>
          </table>
                  </td>
                  <td v-else v-bind:key="i" v-text="e"></td>
              </tr>
            </tbody>
          </table>
                  </td>
                  <td v-else v-bind:key="i" v-text="e"></td>
              </tr>
            </tbody>
          </table>
                  </td>
                  <td v-else v-bind:key="i" v-text="e"></td>
              </tr>
            </tbody>
          </table>
        </template>
      </section>
    </main>
    <aside>
      <apod />
    </aside>
    <footer>
      <table>
        <tbody>
          <tr>
            <th>GitHub</th>
            <td>
              <a href="https://github.com/mattiapontonio/asteroids"
                >asteroids</a
              >
            </td>
          </tr>
          <tr>
            <th>Version</th>
            <td>{{version}}</td>
          </tr>
          <tr>
            <th>Credits</th>
            <td>
              Icons made by
              <a
                href="https://www.flaticon.com/authors/good-ware"
                title="Good Ware"
                >Good Ware</a
              >
              from
              <a href="https://www.flaticon.com/" title="Flaticon"
                >www.flaticon.com</a
              >
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
import Loader from './Loader.vue';
export default {
  name: 'app',
  components: {
      Loader
  },
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
      this.error=undefined;
      fetch(url)
      .then(response => {
          this.response = response;
          if (response.status==200) {
            response.json().then(data => {
              Object.assign(this, data);
              this.items=data.near_earth_objects[this.$route.query.date];
              this.near_earth_objects=data.near_earth_objects;
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
      near_earth_objects: undefined,
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

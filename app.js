var app = new Vue({
  el: '#app',
  name: 'app',
  methods: {
    get() {
      const url = new URL('https://api.nasa.gov')
      url.pathname = 'neo/rest/v1/feed'
      url.searchParams.set(
        'start_date',
        new URLSearchParams(location.search).get('start_date')
      )
      url.searchParams.set(
        'end_date',
        new URLSearchParams(location.search).get('end_date')
      )
      url.searchParams.set(
        'api_key',
        new URLSearchParams(location.search).get('api_key')
      )
      this.loading = true
      this.error = undefined
      fetch(url)
        .then((response) => {
          this.response = response
          if (response.status == 200) {
            response.json().then((data) => {
              Object.assign(this, data)
              this.items =
                data.near_earth_objects[
                  new URLSearchParams(location.search).get('date')
                ]
              this.near_earth_objects = data.near_earth_objects
              this.loading = false
            })
          } else if (response.status == 400) {
            response.json().then((data) => {
              this.error = {
                message: data.error_message,
              }
            })
          } else if (response.status == 403) {
            response.json().then((data) => {
              Object.assign(this, data)
            })
          }
        })
        .catch((error) => {
          this.error = error
        })
      fetch('./package.json')
        .then((response) => response.json())
        .then((body) => (this.version = body.version))
    },
    onchangedate(date = new Date()) {
      this.date = date
    },
  },
  data: function () {
    return {
      items: new Array(),
      loading: true,
      near_earth_objects: undefined,
      error: undefined,
      element_count: undefined,
      links: undefined,
      version: undefined,
    }
  },
  mounted() {
    this.get()
  },
  computed: {
    start_date: () => new URLSearchParams(location.search).get('start_date'),
    end_date: () => new URLSearchParams(location.search).get('end_date'),
    date: () => new URLSearchParams(location.search).get('date'),
    api_key: () => new URLSearchParams(location.search).get('api_key'),
  },
  template: `<div>
<header>
  <img src="asteroid.svg" alt="Icon" width="64" height="auto" />
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
        :value="api_key"
      />
      <label for="start_date">start_date</label>
      <input
        type="date"
        :value="start_date"
        name="start_date"
        id="start_date"
        required
      />
      <label for="end_date">end_date</label>
      <input
        type="date"
        :value="end_date"
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
      <div v-for="(e, i) in Object.keys(near_earth_objects)" :id="e.id">
        <input
          type="radio"
          :id="e"
          name="date"
          :value="e"
          :checked="date == e"
          form="form"
        />
        <label :for="e" v-text="e"></label>
      </div>
    </fieldset>
    <loader v-if="loading" class="loading"></loader>
    
<scatter-plot/>
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
        :key="'1'+i"
        :x1="i * 10 + '%'"
        y1="0"
        :x2="i * 10 + '%'"
        y2="100%"
        stroke-width="1"
        stroke="aquamarine"
      />
      <line
        v-for="i in 10"
        :key="'2'+i"
        x1="0"
        :y1="i * 10 + '%'"
        x2="100%"
        :y2="i * 10 + '%'"
        stroke-width="1"
        stroke="aquamarine"
      />
      <text
        v-for="i in 10"
        :key="'3'+i"
        x="4"
        :y="100 - i * 10 + '%'"
        text-anchor="start"
        font-size="12px"
        font-weight="bold"
        fill="black"
        writing-mode="horizontal-tb"
      >
        {{ i }}
      </text>
      <text
        v-for="i in 10"
        :key="'4'+i"
        :x="i * 10 + '%'"
        y="96"
        text-anchor="end"
        font-size="12px"
        font-weight="bold"
        fill="black"
        writing-mode="vertical-lr"
      >
        {{ i }}
      </text>
      <circle
        v-for="(item, i) in items"
        :key="'5'+i"
        :cx="
        (100 *
            (items.map(
              (z) =>
                z.close_approach_data[0].relative_velocity
                  .kilometers_per_second
            )[i] -
              Math.min(
                ...items.map(
                  (z) =>
                    z.close_approach_data[0].relative_velocity
                      .kilometers_per_second
                )
              ))) /
            (Math.max(
              ...items.map(
                (z) =>
                  z.close_approach_data[0].relative_velocity
                    .kilometers_per_second
              )
            ) -
              Math.min(
                ...items.map(
                  (z) =>
                    z.close_approach_data[0].relative_velocity
                      .kilometers_per_second
                )
              ))+'%'
        "
        :cy="
        (100 *
            (items.map(
              (z) => z.close_approach_data[0].miss_distance.kilometers
            )[i] -
              Math.min(
                ...items.map(
                  (z) => z.close_approach_data[0].miss_distance.kilometers
                )
              ))) /
            (Math.max(
              ...items.map(
                (z) => z.close_approach_data[0].miss_distance.kilometers
              )
            ) -
              Math.min(
                ...items.map(
                  (z) => z.close_approach_data[0].miss_distance.kilometers
                )
              ))+'%'
        "
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
          <td v-text="start_date"></td>
        </tr>
        <tr>
          <th>end_date</th>
          <td v-text="end_date"></td>
        </tr>
        <tr>
          <th>api_key</th>
          <td v-text="api_key"></td>
        </tr>
        <tr>
          <th>date</th>
          <td v-text="date"></td>
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
    <table>
      <tr v-for="(e, k, i) in near_earth_objects" :key="'6'+i">
        <th v-text="k"></th>
        <td v-if="typeof e == 'object'" :key="'7'+i">
          <table>
            <tr v-for="(e, k, i) in e" :id="'8'+k">
              <th v-text="k"></th>
              <td v-if="typeof e == 'object'" :key="'9'+i">
                <table>
                  <tr
                    v-for="(e, k, i) in e"
                    :key="'10'+i"
                  >
                    <th v-text="k"></th>
                    <td v-if="typeof e == 'object'" :key="'11'+i">
                      <table>
                        <tr
                          v-for="(e, k, i) in e"
                          :key="'12'+i"
                        >
                          <th v-text="k"></th>
                          <td v-if="typeof e == 'object'" :key="'13'+i">
                            <table>
                              <tr
                                v-for="(e, k, i) in e"
                                :key="'14'+i"
                              >
                                <th v-text="k"></th>
                                <td
                                  v-if="typeof e == 'object'"
                                  :key="'15'+i"
                                ></td>
                                <td v-else :key="'16'+i" v-text="e"></td>
                              </tr>
                            </table>
                          </td>
                          <td v-else :key="'17'+i" v-text="e"></td>
                        </tr>
                      </table>
                    </td>
                    <td v-else :key="'18'+i" v-text="e"></td>
                  </tr>
                </table>
              </td>
              <td v-else :key="'19'+i" v-text="e"></td>
            </tr>
          </table>
        </td>
        <td v-else :key="'20'+i" v-text="e"></td>
      </tr>
    </table>
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
        <td>{{ version }}</td>
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
</div>`,
})

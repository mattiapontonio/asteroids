var app = new Vue({
    el: '#app',
    name: 'app',
    methods: {
        get() {
            this.loading = true
            this.error = undefined
            fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${this.api_key}&start_date=${this.date}`)
                .then((response) => {
                    this.response = response
                    if (response.status == 200) {
                        response.json().then((data) => {
                            Object.assign(this, data)
                            this.items = data.near_earth_objects[0]
                            this.near_earth_objects = data.near_earth_objects
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
                .finally(() => (this.loading = false))
        },
        onchangedate(date = new Date()) {
            this.date = date
        },
    },
    data: function() {
        return {
            items: new Array(),
            loading: false,
            near_earth_objects: undefined,
            error: undefined,
            element_count: undefined,
            links: undefined,
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
  <section>
    <h2>Bubble chart</h2>
    <loader v-if="loading" />
    <p class="error" v-if="error" v-text="error.message"></p>
    <selector-date-wc></selector-date-wc>
    <scatter-plot-vue/>
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
    <loader v-if="loading" />
    <p class="error" v-if="error" v-text="error.message"></p>
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
<aside>
  <apod />
</aside>

</div>`,
})
Vue.component('scatter-plot-vue', {
  data() {
    return {
      error: {},
      loading: {},
      items: [],
    }
  },
  computed: {
    date: () => new URLSearchParams(location.search).get('date'),
    api_key: () => new URLSearchParams(location.search).get('api_key'),
  },
  mounted() {
    this.loading = true
    this.error = false
    fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?api_key=${this.api_key}&start_date=${this.date}`
    )
      .then((response) => response.json())
      .then((data) => {
        const x = 'velocity_kilometers_per_second'
        const y = 'distance'
        const d = 'diameter'
        const scale = Vue.filter('scale')
        const min = Vue.filter('min')
        const max = Vue.filter('max')
        this.items = data.near_earth_objects[0]
          .map((e) => {
            return {
              id: e.id,
              name: e.name,
              diameter: e.estimated_diameter.kilometers.estimated_diameter_max,
              magnitude: e.absolute_magnitude_h,
              velocity_kilometers_per_hour:
                e.close_approach_data[0].relative_velocity.kilometers_per_hour,
              velocity_kilometers_per_second:
                e.close_approach_data[0].relative_velocity
                  .kilometers_per_second,
              distance: e.close_approach_data[0].miss_distance.astronomical,
            }
          })
          .map((e, i, a) => {
            const elements = a.map((e) => e[x])
            e.x = scale(e[x], min(elements), max(elements))
            return e
          })
          .map((e, i, a) => {
            const elements = a.map((e) => e[y])
            e.y = scale(e[y], min(elements), max(elements))
            return e
          })
          .map((e, i, a) => {
            const elements = a.map((e) => e[d])
            e.d = scale(e[d], min(elements), max(elements))
            return e
          })
      })
      .catch((error) => (this.error = error))
      .finally(() => (this.loading = false))
  },
  template: `
    <p v-if="error" class="error" v-text="error"></p>
    <loader v-else-if="loading" />
      <section class="MfPnrltCwM" v-else>
        <asteroid
          v-for="(item, i) in items"
          v-bind:data="{
            ...item,
          }"
          v-bind:key="i"
          style="position: absolute;"
          v-bind:x="item.x"
          v-bind:y="item.y"
          v-bind:d="item.d"
        />
      </section>`,
})

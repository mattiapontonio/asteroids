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
      .then((response) => {
        if (response.status==200) {
          response.json().then((data) => this.items = data.near_earth_objects[this.date])
        } else {
          throw new Error(response.statusText)
        }
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
        :key="i"
        :id="item.id"
      />
    </section>`,
})

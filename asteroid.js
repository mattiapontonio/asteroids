Vue.component('asteroid', {
  props: {
    id: {
      required: true,
    },
  },
  data: function () {
    return {
      show: false,
      items: [],
      item: undefined
    }
  },
  computed: {
    date: () => new URLSearchParams(location.search).get('date'),
    api_key: () => new URLSearchParams(location.search).get('api_key'),
    x() {
      const x = this.item?.close_approach_data[0]?.relative_velocity
        ?.kilometers_per_second
      const min = Math.min(
        ...this.items.map(
          (z) =>
            z.close_approach_data[0].relative_velocity.kilometers_per_second
        )
      )
      const max = Math.max(
        ...this.items.map(
          (z) =>
            z.close_approach_data[0].relative_velocity.kilometers_per_second
        )
      )
      return ((100 - 0) * (x - min)) / (max - min) + 0
    },
    y() {
      const x = this.item.close_approach_data[0].miss_distance.kilometers
      const min = Math.min(
        ...this.items.map(
          (z) => z.close_approach_data[0].miss_distance.kilometers
        )
      )
      const max = Math.max(
        ...this.items.map(
          (z) => z.close_approach_data[0].miss_distance.kilometers
        )
      )
      return ((100 - 0) * (x - min)) / (max - min) + 0
    },
    r() {
      const x = this.item.estimated_diameter.kilometers.estimated_diameter_max
      const min = Math.min(
        ...this.items.map(
          (z) => z.estimated_diameter.kilometers.estimated_diameter_max
        )
      )
      const max = Math.max(
        ...this.items.map(
          (z) => z.estimated_diameter.kilometers.estimated_diameter_max
        )
      )
      return ((100 - 10) * (x - min)) / (max - min) + 10
    },
  },
  mounted() {
    this.loading = true
    this.error = false
    fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?api_key=${this.api_key}&start_date=${this.date}`
    )
      .then((response) => {
        if (response.status == 200) {
          response
            .json()
            .then((data) => (this.items = data.near_earth_objects[this.date]))
        } else {
          throw new Error(response.statusText)
        }
      })
      .catch((error) => (this.error = error))
      .finally(() => (this.loading = false))
      fetch(
        `http://www.neowsapp.com/rest/v1/neo/${this.id}?api_key=${this.api_key}`
      )
        .then((response) => {
          if (response.status == 200) {
            response
              .json()
              .then((data) => (this.item = data))
          } else {
            throw new Error(response.statusText)
          }
        })
        .catch((error) => (this.error = error))
        .finally(() => (this.loading = false))
  },
  template: `<div
  class="lHUsmGLhth"
  @mouseover="show = true"
  @mouseleave="show = false"
  v-if="item"
  :style="{
    top: x + '%',
    left: y + '%',
  }"
>
  <bubble :d="r" />
  <tooltip :show="show" :id="item.id" />
</div>`,
})

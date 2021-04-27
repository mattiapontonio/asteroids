Vue.component('asteroid', {
  props: ['data'],
  data: function () {
    return {
      show: false,
      items: []
    }
  },
  computed: {
    date: () => new URLSearchParams(location.search).get('date'),
    api_key: () => new URLSearchParams(location.search).get('api_key'),
    x: () => {
      const x = this.items.find(z=>z.id==this.id).close_approach_data[0].relative_velocity.kilometers_per_second;
      const min = Math.min(...this.items.map(z=>z.close_approach_data[0].relative_velocity.kilometers_per_second));
      const max = Math.max(...this.items.map(z=>z.close_approach_data[0].relative_velocity.kilometers_per_second));
      return (100 - 0) * (x - min) / (max - min) + 0;
    },
    y: () => {
      const x = this.items.find(z=>z.id==this.id).close_approach_data[0].miss_distance.kilometers;
      const min = Math.min(...this.items.map(z=>z.close_approach_data[0].miss_distance.kilometers));
      const max = Math.max(...this.items.map(z=>z.close_approach_data[0].miss_distance.kilometers));
      return (100 - 0) * (x - min) / (max - min) + 0;
    },
    r: () => {
      const x = this.items.find(z=>z.id==this.id).estimated_diameter.kilometers.estimated_diameter_max;
      const min = Math.min(...this.items.map(z=>z.estimated_diameter.kilometers.estimated_diameter_max));
      const max = Math.max(...this.items.map(z=>z.estimated_diameter.kilometers.estimated_diameter_max));
      return (100 - 10) * (x - min) / (max - min) + 10;
    },
  },
  mounted() {
    this.loading = true
    this.error = false
    fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?api_key=${this.api_key}&start_date=${this.date}`
    )
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            this.items = data.near_earth_objects[0];
          })
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
  :style="{
    top: x + '%',
    left: y + '%',
  }"
>
  <bubble class="IyTMAxUXOq" :d="r" />
  <tooltip :show="show" :data="data" />
</div>`,
})

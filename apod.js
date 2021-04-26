Vue.component('apod', {
  data: function () {
    const date = new Date()
    return {
      url: undefined,
      date,
      response: {},
      loading: false,
      error: false,
      hdurl: undefined,
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.loading = true
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key.value}`)
        .then((response) => {
          this.response = response
          return response.json()
        })
        .then((data) => {
          Object.assign(this, data)
          this.loading = false
        })
        .catch((error) => {
          this.error = error
        })
    },
  },
  template: `<section>
    <h2>Astronomy Picture of the Day</h2>
    <loader v-if="loading" class="loading"></loader>
    <div class="error" v-if="error" v-text="error.message"></div>
    <picture v-if="url">
        <source
            media="(min-width:1680px)"
            v-bind:srcset="hdurl"
        >
        <source
            media="(min-width:465px)"
            v-bind:srcset="url"
        >
        <img
            loading="lazy"
            v-bind:src="url"
            v-bind:alt="title"
            v-bind:title="title"
        >
        <figcaption>
            <table>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <td v-text="title"></td>
                    </tr>
                    <tr>
                        <th>Date</th>
                        <td v-text="date"></td>
                    </tr>
                    <tr>
                        <th>Explanation</th>
                        <td v-text="explanation"></td>
                    </tr>
                </tbody>
            </table>
        </figcaption>
    </picture>
</section>`,
})

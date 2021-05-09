Vue.component('asteroid', {
    props: {
        id: {
            required: true,
        },
    },
    data: function() {
        return {
            show: false,
            items: [],
            item: undefined,
        }
    },
    computed: {
        date: () => new URLSearchParams(location.search).get('date'),
        api_key: () => sessionStorage.getItem('api_key'),
        cx() {
            const x = this.item.close_approach_data[0].relative_velocity.kilometers_per_second
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
        cy() {
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
            return ((10 - 5) * (x - min)) / (max - min) + 5
        },
    },
    mounted() {
        this.loading = true
        this.error = false
        Promise.all([
                fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${this.api_key}&start_date=${this.date}`),
                fetch(`http://www.neowsapp.com/rest/v1/neo/${this.id}?api_key=${this.api_key}`)
            ]).then(responses => {
                if (responses[0].status == 200 && responses[1].status == 200) {
                    Promise.all([
                            responses[0].json(),
                            responses[1].json()
                        ])
                        .then((datas) => {
                            this.items = datas[0].near_earth_objects[this.date];
                            this.item = datas[1];
                        })
                };
            })
            .catch((error) => (this.error = error))
            .finally(() => (this.loading = false))
    },
    template: `
    <a 
    v-if="item"
    :href="'/asteroid?id=' + item.id">
    <circle
  class="lHUsmGLhth"
  @mouseover="show = true"
  @mouseleave="show = false"
  :cx="cx + '%'"
  :cy="cy + '%'"
  :r="r + '%'"
>
</circle>
</a>`,
})
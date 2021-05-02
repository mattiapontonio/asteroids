Vue.component('tooltip', {
    props: ['show', 'id'],
    template: `<transition name="slide-fade">
      <foreignObject v-if="show" class="tooltip">
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{{ item.name }}</td>
            </tr>
            <tr>
              <td>Diameter</td>
              <td>{{ item.diameter }} km</td>
            </tr>
            <tr>
              <td>Magnitude</td>
              <td>{{ item.magnitude }} h</td>
            </tr>
            <tr>
              <td>Distance</td>
              <td>{{ item.distance }} au</td>
            </tr>
            <tr>
              <td>Velocity</td>
              <td>{{ item.velocity_kilometers_per_hour }} km/h</td>
            </tr>
          </tbody>
        </table>
      </foreignObject>
    </transition>`,
    computed: {
        api_key: () => sessionStorage.getItem('api_key'),
    },
    data: function() {
        return {
            item: undefined
        }
    },
    mounted() {
        fetch(
                `http://www.neowsapp.com/rest/v1/neo/${this.id}?api_key=${this.api_key}`
            )
            .then((response) => {
                if (response.status == 200) {
                    response.json().then((data) => (this.item = data))
                } else {
                    throw new Error(response.statusText)
                }
            })
            .catch((error) => (this.error = error))
            .finally(() => (this.loading = false))
    },
})
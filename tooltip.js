Vue.component('tooltip', {
  props: ['show', 'data'],
  template: `<transition name="slide-fade">
      <div v-if="show" class="tooltip">
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{{ data.name }}</td>
            </tr>
            <tr>
              <td>Diameter</td>
              <td>{{ data.diameter }} km</td>
            </tr>
            <tr>
              <td>Magnitude</td>
              <td>{{ data.magnitude }} h</td>
            </tr>
            <tr>
              <td>Distance</td>
              <td>{{ data.distance }} au</td>
            </tr>
            <tr>
              <td>Velocity</td>
              <td>{{ data.velocity_kilometers_per_hour }} km/h</td>
            </tr>
          </tbody>
        </table>
      </div>
    </transition>`,
})

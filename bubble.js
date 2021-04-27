Vue.component('bubble', {
  props: {
    minD: {
      type: Number,
      default: function () {
        return 30
      },
    },
    maxD: {
      type: Number,
      default: function () {
        return 100
      },
    },
    d: {
      type: Number,
      default: function () {
        return 0
      },
    },
  },
  computed: {
    width: function () {
      return this.d * (this.maxD - this.minD) + this.minD
    },
    height: function () {
      return this.d * (this.maxD - this.minD) + this.minD
    },
  },
  template: ``,
})

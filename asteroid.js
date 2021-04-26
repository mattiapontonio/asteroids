Vue.component('asteroid', {
  props: ['data', 'x', 'y', 'd'],
  data: function () {
    return {
      show: false,
    }
  },
  template: `<div
  class="lHUsmGLhth"
  @mouseover="show = true"
  @mouseleave="show = false"
  :style="{
    top: 100 - x * 100 + '%',
    left: y * 100 + '%',
  }"
>
  <bubble class="IyTMAxUXOq" :d="d" />
  <tooltip :show="show" :data="data" />
</div>`,
})

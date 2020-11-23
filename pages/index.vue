<template>
  <app 
    v-bind:date="date"
    v-bind:start_date="start_date"
    v-bind:end_date="end_date"
  ></app>
</template>
<script>
export default {
  async asyncData({ 
    query: {
      date,
      start_date,
      end_date 
    }}) {
    return {
      date,
      start_date,
      end_date 
    }
  }
}
</script>
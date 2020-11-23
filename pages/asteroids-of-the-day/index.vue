<template>
      <asteroids-of-the-day 
        v-bind:datetime="datetime"
        v-bind:date="date"
        v-bind:start_date="start_date"
        v-bind:end_date="end_date"
        v-bind:api_key="api_key"
      />
</template>
<script>
export default {
  async asyncData({ 
    query: {
      date,
      start_date,
      end_date,
      api_key
    }}) {
    return {
      date,
      start_date,
      end_date,
      api_key
    }
  }
}
</script>
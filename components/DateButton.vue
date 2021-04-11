<template>
    <div>
        <input type="radio" :id="id" name="date" :value="date" />
        <label :for="id">{{new Intl.DateTimeFormat('default', { weekday: 'long' }).format(date)}}</label>
    </div>
</template>
<script>
    export default {
        name: 'date-button'
    }
</script>

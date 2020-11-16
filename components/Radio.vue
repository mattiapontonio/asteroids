<template>
    <button 
        v-bind:checked="checked"
        v-bind:date="date"
        v-on:click="onclick"
    >{{innerText}}</button>
</template>
<script>
  import Vue from 'vue';        
    export default {
        name: 'radio',
        computed: {
            innerText: function() {
                const date = new Date(this.date);
                console.log(date);
                return date.toLocaleDateString(undefined, { weekday: 'long' });
            },
            url: function() {
                return new URL(window.location);
            },
            checked: function () {
                const url = new URL(location);
                return url.searchParams.get('date') == this.date;
            }
        },
        methods: {
            onclick() {
                const url = new URL(location);
                url.searchParams.set('date', Vue.filter('formatted')(this.date));
                window.history.pushState({}, '', url);
            }
        }
    }

</script>

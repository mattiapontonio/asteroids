<template>
    <button 
        v-bind:checked="checked"
        v-bind:datetime="datetime"
        v-on:click="onclick"
    >{{datetime|DateTimeFormat}}</button>
</template>
<script>
  import Vue from 'vue';      
  import format from '../formatDate.js';  
    export default {
        name: 'radio',
        computed: {
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
                url.searchParams.set('date', format(this.date));
                window.history.pushState({}, '', url);
            }
        }
    }

</script>

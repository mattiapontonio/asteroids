<template>
    <button 
        v-bind:checked="checked"
        v-bind:date="date"
        v-on:click="onclick"
    >{{innerText}}</button>
</template>
<script>
  import Vue from 'vue';      
  import format from '../formatDate.js';  
    export default {
        name: 'radio',
        props: {
            date: {
                type: String,
                requred: true
            }
        },
        computed: {
            innerText: function() {
                console.log(this.date);
                return new Intl.DateTimeFormat('default', { weekday: 'long' }).format(new Date(this.date))
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
                url.searchParams.set('date', format(this.date));
                window.history.pushState({}, '', url);
            }
        }
    }

</script>

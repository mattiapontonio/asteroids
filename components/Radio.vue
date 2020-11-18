<template>
    <button v-on:click="onclick">{{innerText}}</button>
</template>
<script>
  import Vue from 'vue';      
  import format from '../formatDate.js';  
    export default {
        name: 'radio',
        props: {
            datetime: {
                type: String,
                validator: function (value) {
                    return Date.parse(value)
                }
            }
        },
        computed: {
            url: function() {
                return new URL(window.location);
            },
            checked: function () {
                const url = new URL(location);
                return url.searchParams.get('date') == this.date;
            },
            innerText: function () {
                const options = { weekday: 'long' };
                const date = new Date(this.datetime);
                return new Intl.DateTimeFormat('default', options).format(date);
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

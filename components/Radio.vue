<template>
    <button 
        v-bind:checked="checked"
        v-on:click="onchangedate(date)"
    >{{label}}</button>
</template>
<script>
  import Vue from 'vue';        
    export default {
        name: 'radio',
        props: {
            date: {
                type: Date,
                default: new Date()
            },
            id: {
                type: String
            },
            checked: {
                type: Boolean
            }
        },
        computed: {
            label: function() {
                return this.date.toLocaleDateString(undefined, { weekday: 'long' });
            }
        },
        methods: {
            onchangedate() {
                const url = new URL(window.location);
                url.searchParams.set('date', Vue.filter('formatted')(this.date));
                window.history.pushState({}, '', url);
            }
        },
        data: function () {
            return {
                count: 0,
                selctedIndex: 0
            }
        }
    }

</script>

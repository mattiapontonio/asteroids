<template>
    <button 
        v-bind:checked="checked"
        v-on:click="onchangedate(date)"
    >{{label}}</button>
</template>
<script>
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
            },
            onchangedate: {
                type: Function
            }
        },
        computed: {
            label: function() {
                return this.date.toLocaleDateString(undefined, { weekday: 'long' });
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
